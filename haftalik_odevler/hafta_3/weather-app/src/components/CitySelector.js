import { useEffect, useState } from 'react';

function CitySelector(props) {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        const fetchCities = async () => {
            const response = await fetch('/cities.json');
            const data = await response.json();
            console.log("iller: ");
            setCities(data.cities);
        };
        fetchCities();
    }, []);

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
        props.setSelectedCity(e.target.value);
    };

    return (
        <div>
            <select value={selectedCity} onChange={handleCityChange}>
                {cities.map(city => (
                    <option key={city.id} value={city.name}>{city.name}</option>
                ))}
            </select>
        </div>
    );
}

export default CitySelector;
