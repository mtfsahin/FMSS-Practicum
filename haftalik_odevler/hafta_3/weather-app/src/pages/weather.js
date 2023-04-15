import { useContext, useState } from 'react';
import WeatherContext from '../contexts/WeatherContext';
import CitySelector from '../components/CitySelector'

export default function Weather() {
    const {
        dailyWeatherData,
        currentWeatherData,
        setSelectedCity,
        units,
        setUnits,
        lang,
        setLang,
    } = useContext(WeatherContext);


    console.log("bugün", currentWeatherData);
    console.log("7 günlük tahminler", dailyWeatherData);

    const handleUnitChange = (e) => {
        setUnits(e.target.value);
    };

    const handleLangChange = (e) => {
        setLang(e.target.value);
    };

    return (
        <div>
            <h2>Güncel Hava Durumu:</h2>
            <div>
                <label htmlFor="city">Şehir:</label>
                <CitySelector setSelectedCity={setSelectedCity} />

            </div>
            <div>
                <label htmlFor="unit">Birim:</label>
                <select id="unit" value={units} onChange={handleUnitChange}>
                    <option value="metric">Santigrat</option>
                    <option value="imperial">Fahrenheit</option>
                </select>
            </div>
            <div>
                <label htmlFor="lang">Dil:</label>
                <select id="lang" value={lang} onChange={handleLangChange}>
                    <option value="tr">Türkçe</option>
                    <option value="en">English</option>
                </select>
            </div>
            {currentWeatherData ? (
                <div>
                    <h3>{currentWeatherData.name}</h3>
                    <p>{currentWeatherData.weather[0].description}</p>
                    <p>Sıcaklık: {currentWeatherData.main.temp} °C</p>
                    <p>Nem: {currentWeatherData.main.humidity} %</p>
                    <p>Rüzgar hızı: {currentWeatherData.wind.speed} m/s</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <h2>7 Günlük Hava Tahmini:</h2>
            {dailyWeatherData ? (
                dailyWeatherData.list.map((data, index) => (
                    <div key={index}>
                        <h3>{new Date(data.dt * 1000).toLocaleDateString("tr-TR")}</h3>
                        <p>{data.weather[0].description}</p>
                        <p>Sıcaklık: {data.main.temp} °C</p>
                        <p>Nem: {data.main.humidity} %</p>
                        <p>Rüzgar hızı: {data.wind.speed} m/s</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
