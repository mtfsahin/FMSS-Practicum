import { useContext } from 'react';
import WeatherContext from '../contexts/WeatherContext';
import CitySelector from '../components/CitySelector';


export default function currentWeather() {
    const {
        currentWeatherData,
        setSelectedCity,
        units,
    } = useContext(WeatherContext);

    return (
        <div className='w-full max-w-lg bg-white p-3 rounded-xl ring-8 ring-white ring-opacity-40 '>
            <div className="flex flex-row justify-between">
                <div className="w-full max-w-lg bg-blue-100 p-6 rounded-xl ring-8 ring-white ring-opacity-40 mr-2 shadow-lg">
                    {/* Şehir bilgisini ayarlıyoruz */}
                    {/* Set City data */}
                    <div className='flex mb-2 text-xs underline'>Select city:</div>
                    <CitySelector setSelectedCity={setSelectedCity} />

                    {currentWeatherData ? (
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-2 md:gap-8">
                            <div className="flex justify-center items-center">
                                {/* API nin sunduğu resimleri kullanıyorım */}
                                <img
                                    src={`https://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@4x.png`}
                                    alt="Hava Durumu"
                                    className="w-24 md:w-32"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <span className="text-4xl md:text-5xl font-bold">
                                    {parseInt(currentWeatherData.main.temp)}&deg;{units === "metric" ? "C" : "F"}
                                </span>
                                <span className="text-lg font-semibold text-gray-500">{currentWeatherData.name}</span>
                                <div className="flex flex-col justify-center items-center">
                                    <span className="text-sm font-medium underline">Weather </span>
                                    <span className="text-xs text-gray-500">{(currentWeatherData.weather[0].description.toUpperCase())}</span>
                                </div>
                            </div>

                        </div>


                    ) : (
                        <div className="text-center">
                            <p className="text-xl font-bold mb-2">Loading...</p>
                        </div>
                    )}

                </div>
                <div className=" bg-indigo-100 p-5 rounded-xl ring-8 ring-white  ring-opacity-40 flex justify-center">
                    {currentWeatherData ? (
                        <div className="grid grid-cols-1 gap-4 mt-4">
                            <div className="flex flex-col justify-center items-center">
                                <div className="text-xs font-medium ">Wild</div>
                                <div className="text-xs font-medium underline">(m/s)</div>
                                <div className="text-xs text-gray-500">{currentWeatherData.wind.speed}</div>

                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="text-xs font-medium underline">Humidity</div>
                                <div className="text-xs font-medium underline">(%)</div>
                                <div className="text-xs text-gray-500">{currentWeatherData.main.humidity}</div>

                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="text-xs font-medium underline">Visibility</div>
                                <div className="text-xs font-medium underline">(km)</div>
                                <div className="text-xs text-gray-500">{Math.round((currentWeatherData.visibility) / 100) / 10}</div>

                            </div>
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
        </div>

    );
}
