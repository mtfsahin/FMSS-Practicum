import { useContext } from 'react';
import WeatherContext from '../contexts/WeatherContext';

export default function Weather() {
    const { weatherData } = useContext(WeatherContext);

    console.log("burada" , weatherData);
    return (
        <div>
            {weatherData ? (
                <div>
                    <h1>Name: {weatherData.name}</h1>
                    <p>Açıklama: {weatherData.weather[0].description}</p>
                    <p>Sıcaklık: {parseInt(weatherData.main.temp)}</p>
                    <p>Nem: {weatherData.main.humidity}</p>
                    <p>Rüzgar hızı: {weatherData.wind.speed}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
