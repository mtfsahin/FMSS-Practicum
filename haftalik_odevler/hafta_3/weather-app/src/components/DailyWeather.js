import { useContext } from 'react';
import WeatherContext from '../contexts/WeatherContext';


export default function DailyWeather() {
    const {
        dailyWeatherData,
    } = useContext(WeatherContext);

    return (
        <div className='w-full max-w-lg bg-white p-3 rounded-xl shadow-lg ring-8 ring-white ring-opacity-40 mt-8'>
            <div className='flex justify-center mb-3 bg-neutral-200 rounded-xl text-gray-800'>Next 5 days</div>
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
                                                    <span className="text-xs font-light text-gray-500">Max(</span>
                                                    <span className="text-sm font-light text-gray-500">{parseInt(data.main.temp_max)}°C)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-between mt-2">
                                            <div className="flex flex-col items-center">
                                                <div className="font-medium text-xs ">Wild</div>
                                                <div className="font-medium text-xs underline">(m/s)</div>
                                                <div className="text-xs text-gray-500">{data.wind.speed}</div>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <div className="font-medium text-xs">Humidity</div>
                                                <div className="font-medium text-xs underline">(%)</div>
                                                <div className="text-xs text-gray-500"> {data.main.humidity}</div>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <div className="font-medium text-xs">Visibility</div>
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
    );
}
