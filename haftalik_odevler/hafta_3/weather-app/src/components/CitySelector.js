import { useEffect, useState } from 'react';
import { FiChevronDown } from "react-icons/fi";
//Bu componenti datasını göstermek istediğim şehri seçmek için yaptım
//Made this component to select the city whose data I want to show
function CitySelector(props) {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');

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
            <select
                value={selectedCity}
                onChange={handleCityChange}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
            >
                {cities.map(city => (
                    <option key={city.id} value={city.name}>
                        {city.name}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FiChevronDown size={16} color={"gray"}/>
            </div>
        </div>

    );
}

export default CitySelector;
