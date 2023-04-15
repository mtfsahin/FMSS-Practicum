import { useContext, useState } from 'react';
import WeatherContext from '../contexts/WeatherContext';
import CitySelector from '../components/CitySelector'

export default function Weather() {
    const {
        dailyWeatherData,
        currentWeatherData,
        setSelectedCity,
        units,
    } = useContext(WeatherContext);

    return (

        <div className="flex flex-col items-center justify-center  text-gray-700 p-10 bg-indigo-800 ">
            <div className='w-full max-w-lg bg-white p-3 rounded-xl ring-8 ring-white ring-opacity-40 '>
                <div className="flex flex-row justify-between">
                    <div className="w-full max-w-lg bg-blue-100 p-6 rounded-xl ring-8 ring-white ring-opacity-40 mr-2 shadow-lg">
                        {/* Şehir bilgisini ayarlıyoruz */}
                        {/* Set City data */}
                        <div className='flex mb-2 text-xs underline'>Şehir seçiniz:</div>
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
                                    <div className="text-xs font-medium underline">Rüzgar</div>
                                    <div className="text-xs text-gray-500">{currentWeatherData.wind.speed}</div>
                                    <div className="text-xs text-gray-500">m/s</div>

                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-xs font-medium underline">Nem</div>
                                    <div className="text-xs text-gray-500">{currentWeatherData.main.humidity}</div>
                                    <div className="text-xs text-gray-500">%</div>

                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="text-xs font-medium underline">Görüş</div>
                                    <div className="text-xs text-gray-500">{Math.round((currentWeatherData.visibility) / 100) / 10}</div>
                                    <div className="text-xs text-gray-500">km</div>

                                </div>
                            </div>
                        ) : (
                            <div>Loading...</div>
                        )}
                    </div>
                </div>
            </div>


            <div className='w-full max-w-lg bg-white p-3 rounded-xl shadow-lg ring-8 ring-white ring-opacity-40 mt-8'>
                <div className="flex overflow-x-scroll space-x-4">
                    {dailyWeatherData ? (
                        dailyWeatherData.list
                            //Burada saat 12 olanları filtreledim
                            //Filtered by weather time 12 o'clock
                            .filter(data => new Date(data.dt * 1000).getHours() === 12)
                            .map((data, index) => (
                                <div key={index} className="bg-white rounded-md shadow-md p-2 w-48">

                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col rounded p-2 max-w-xs">
                                            <div className="text-sm text-gray-500 underline">{new Date(data.dt * 1000).toLocaleDateString("tr-TR")}</div>
                                            <div className='h-8'>
                                                <div className="font-bold text-xs ">{(data.weather[0].description).toUpperCase()}</div>
                                            </div>
                                            <div className="mt-2 text-4xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-16 w-16">
                                                {/* API ın sağladığı fotoğrafları kullandım */}
                                                <img
                                                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                                    alt="Hava Durumu"
                                                    className=""
                                                />
                                            </div>
                                            <div className="flex flex-row items-center justify-center mt-2">
                                                <div className="font-medium text-4xl">{parseInt(data.main.temp)}°C</div>
                                                <div className="flex flex-col items-center ml-2 text-xs">
                                                    <div className="mt-1">
                                                        <span className="text-sm">
                                                            <i className="far fa-long-arrow-up" />
                                                        </span>
                                                        <span className="text-xs font-light text-gray-500">Min(</span>
                                                        <span className="text-sm font-light text-gray-500">{parseInt(data.main.temp_min)}°C)</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-sm">
                                                            <i className="far fa-long-arrow-down" />
                                                        </span>
                                                        <span className="text-xs font-light text-gray-500">Maks(</span>
                                                        <span className="text-sm font-light text-gray-500">{parseInt(data.main.temp_max)}°C)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-between mt-2">
                                                <div className="flex flex-col items-center">
                                                    <div className="font-medium text-xs ">Rüzgar</div>
                                                    <div className="font-medium text-xs underline">(m/s)</div>
                                                    <div className="text-xs text-gray-500">{data.wind.speed}</div>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <div className="font-medium text-xs">Nem</div>
                                                    <div className="font-medium text-xs underline">(%)</div>
                                                    <div className="text-xs text-gray-500"> {data.main.humidity}</div>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <div className="font-medium text-xs">Görüş</div>
                                                    <div className="font-medium text-xs underline">(km)</div>
                                                    <div className="text-xs text-gray-500">{Math.round((data.visibility) / 100) / 10}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))
                    ) : (
                        <p>Loading...</p>
                    )}

                </div>
            </div>

        </div>

    );
}
