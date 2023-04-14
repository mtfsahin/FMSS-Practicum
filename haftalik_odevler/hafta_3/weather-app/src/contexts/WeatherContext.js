import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

//Bir contextAPI oluşturuyorum
//create a contextAPI
const WeatherContext = createContext();

//Burada bir provider oluşturuyorum ve weatherData ve setWeatherData statelerini tutuyorum
//Create a provider because i will keep states weatherData , setWeatherDate 
export function WeatherProvider({ children, selectedCity, units, lang}) {

    //Hava durumu bilgisinin tutulması ve değiştirilmesi için kullanılacak stateler
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const apiKey = "1689a5fee00c14519d8e643f2a55fe6d";
        //OpenWeathermap api ı kullanarak 5 günlük/3 saatlik hava tahminini çekiyorum
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity},tr&units=${units}&lang=${lang}&appid=${apiKey}`;

        axios.get(url)
            .then(response => {
                const data = response.data.list;
                setWeatherData(data);
            })
            .catch(error => {
                console.log("Hava durumu verileri çekilirken bir hata oluştu. / An error occurred while retrieving weather data.", error)
            });
    }, [selectedCity, units, lang]);

    console.log(weatherData);

    return (
        //Bu verileri provide ediyorum
        //Provide this data
        <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
            {children}
        </WeatherContext.Provider>
    );
}

export default WeatherContext;