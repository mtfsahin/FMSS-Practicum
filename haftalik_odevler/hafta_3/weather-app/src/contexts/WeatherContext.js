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
    const [selectedCity, setSelectedCity] = useState("Istanbul");
    //Seçilen metric değerine göre veri güncellemesi sağlamak için
    const [units, setUnits] = useState('metric');
     //Seçilen dile göre veri güncellemesi sağlamak için
    const [lang, setLang] = useState('tr');

    useEffect(() => {
        const fetchData = async () => {
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