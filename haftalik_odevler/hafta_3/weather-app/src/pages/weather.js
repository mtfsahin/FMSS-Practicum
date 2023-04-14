import { useContext } from 'react';
import WeatherContext from '../contexts/WeatherContext';

export default function Weather() {
    const { weatherData } = useContext(WeatherContext);

    console.log("burada", weatherData);
    return (
        <div>
            {weatherData ? (
                <div>
                    {weatherData.map((day, index) => (
                        <div key={index}>
                            <h3>{new Date(day.dt * 1000).toLocaleDateString()}</h3>
                            <p>Açıklama: {day.weather[0].description}</p>
                            <p>Sıcaklık: {parseInt(day.main.temp)}</p>
                            <p>Nem: {day.main.humidity}</p>
                            <p>Rüzgar hızı: {day.wind.speed}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
