import Link from 'next/link';
import WeatherContext from '../contexts/WeatherContext';
import { useContext } from 'react';
const Header = () => {

  const {
    currentWeatherData,
  } = useContext(WeatherContext);


  //Navigasyon dizisi oluşturuyorum
  //Created navigations array
  const navigations = [
    { label: 'Home', path: '/' },
    { label: 'About', path: 'about' },
  ];



  return (
    <header className='h-16 flex items-center justify-between bg-white rounded-b-3xl border-sky-950 border-r-8 border-b-8'>
      <ul className='flex gap-4 p-10'>
        {/* Burada yukarıda tanımladığım navigaston dizisini mapliyorum */}
        {/* Mapping the navigations array */}
        {navigations.map((nav, i) => (
          //Link legacyBehavior kullanılma sebebi yeni sürümde doğrudan <a> etiketi kullanmayı geçersiz sayması
          // The reason for using legacyBehavior in this code is that the new version considers using the <a> tag directly invalid
          <Link key={i} href={nav.path} legacyBehavior><a id="link" className='text-gray-700 hover:text-gray-900'>{nav.label}</a></Link>
        ))}
      </ul>
      {/* Context API sayesinde şehir bilgisini headera getiriyorum */}
      {/* Get city info with contextAPI from header */}
      {currentWeatherData ? (
        <div className='pr-4 text-gray-700'>{currentWeatherData.name}</div>
      ) : (
        <div >Loading..</div>
      )}

    </header>
  )
}

export default Header;