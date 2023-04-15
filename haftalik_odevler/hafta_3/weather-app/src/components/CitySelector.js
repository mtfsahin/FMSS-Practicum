import { useEffect, useState, useContext } from 'react';
import { FiChevronDown } from "react-icons/fi";
import WeatherContext from '../contexts/WeatherContext';

//Bu componenti datasını göstermek istediğim şehri seçmek için yaptım
//Made this component to select the city whose data I want to show
function CitySelector(props) {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const {
        currentWeatherData,
    } = useContext(WeatherContext);

    useEffect(() => {
        const fetchCities = async () => {
            //şehir dataları publicdeki jsondan çekiyorum
            //fetch city data
            const response = await fetch('/cities.json');
            const data = await response.json();
            setCities(data.cities);
        };
        fetchCities();
    }, []);

    //Seçilen şehri setSelectedCity değişkenine atıyorum
    //Set selected city
    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
        props.setSelectedCity(e.target.value);
    };

    return (
        <div className="relative">
            {currentWeatherData ? (
                <div>
                    <select
                        value={selectedCity}
                        onChange={handleCityChange}
                        className="block appearance-none w-full bg-white border border-white hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
                    >
                        {/* Seçili konumu disabled value olarak set ediyorum */}
                        <option disabled value="">
                            Seçili konum: {currentWeatherData.name}
                        </option>
                        {cities.map(city => (
                            <option key={city.id} value={city.name}>
                                {city.name}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <FiChevronDown size={16} color={"gray"} />
                    </div>
                </div>
            ) : (
                <div>Loading..</div>
            )}
        </div>

    );
}

export default CitySelector;
