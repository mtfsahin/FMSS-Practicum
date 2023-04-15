import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

//Bir contextAPI oluşturuyorum
//create a contextAPI
const WeatherContext = createContext();

//Burada bir provider oluşturuyorum ve weatherData ve setWeatherData statelerini tutuyorum
//Create a provider because i will keep states weatherData , setWeatherDate 
export function WeatherProvider({ children, selectedCity: initialSelectedCity, units: initialUnits, lang: initialLang }) {

    //Hava durumu bilgisinin tutulması ve değiştirilmesi için kullanılacak stateler
    const [weatherData, setWeatherData] = useState(null);
    const [dailyWeatherData, setDailyWeatherData] = useState(null);
    const [currentWeatherData, setCurrentWeatherData] = useState(null);
    //Seçike şehre göre veri güncellemesi sağlamak için
    const [selectedCity, setSelectedCity] = useState("");
    //Seçilen metric değerine göre veri güncellemesi sağlamak için
    const [units, setUnits] = useState('metric');
    //Seçilen dile göre veri güncellemesi sağlamak için
    const [lang, setLang] = useState('en');

    //Kullanıcıdan konum değerlerini alıyorum
    //Give a location values at user
    useEffect(() => {
        if (!selectedCity) {
            navigator.geolocation.getCurrentPosition(
                async position => {
                    const { latitude, longitude } = position.coords;
                    const apiKey = "1689a5fee00c14519d8e643f2a55fe6d";
                    const { data } = await axios.get(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&lang=${lang}&appid=${apiKey}`
                    );
                    setSelectedCity(data.name);
                },
                error => {
                    console.error(error);
                    //Konum seçmezse İstanbulu set ediyorum
                    //İf user not allow location, set Istanbul
                    setSelectedCity("İstanbul")
                }
            );
        }
    }, [selectedCity, units, lang]);

    //Kullanıcının mevcut konumu dışında farllı konumları da seçebilmesine imkan sağlıyorum
    //User to select different locations other than the current location
    useEffect(() => {
        if (!selectedCity) return;
        const fetchData = async () => {
            // !! Burada bir sorun var env dosyasından alınca çalışmıyor düzelt
            const apiKey = "1689a5fee00c14519d8e643f2a55fe6d";
            const { data } = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&units=${units}&lang=${lang}&appid=${apiKey}`
            );
            setDailyWeatherData(data);

            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=${units}&lang=${lang}&appid=${apiKey}`
            );
            setCurrentWeatherData(response.data);

            setWeatherData({ dailyWeatherData: data, currentWeatherData: response.data });
        };

        fetchData();
    }, [selectedCity, units, lang]);


    console.log(weatherData);
    console.log("Günlük", dailyWeatherData);
    console.log("7 günlük", currentWeatherData);

    return (
        //Bu verileri provide ediyorum
        //Provide this data
        <WeatherContext.Provider
            value={{
                weatherData, setWeatherData,
                dailyWeatherData, setDailyWeatherData,
                currentWeatherData, setCurrentWeatherData,
                selectedCity, setSelectedCity,
                units, setUnits,
                lang, setLang
            }}>
            {children}
        </WeatherContext.Provider>
    );
}

export default WeatherContext;