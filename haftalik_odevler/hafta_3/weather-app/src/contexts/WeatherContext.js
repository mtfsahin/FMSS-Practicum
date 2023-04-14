import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

//Bir contextAPI oluşturuyorum
//create a contextAPI
const WeatherContext = createContext();

//Burada bir provider oluşturuyorum ve weatherData ve setWeatherData statelerini tutuyorum
//Create a provider because i will keep states weatherData , setWeatherDate 
export function WeatherProvider({ children }) {

    //Hava durumu bilgisinin tutulması ve değiştirilmesi için kullanılacak stateler
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const apiKey = "1689a5fee00c14519d8e643f2a55fe6d";
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&lang=tr&appid=${apiKey}`);
            const data = response.data;
            setWeatherData(data);
        }
        fetchData();
    },[]);

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