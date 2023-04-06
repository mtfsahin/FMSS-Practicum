import Link from 'next/link';
import Button from '../components/Button';
import { GiStripedSun } from "react-icons/gi";

const Header = () => {

  //Navigasyon dizisi oluşturuyorum
  //Created navigations array
  const navigations = [
    { label: 'Home', path: '/' },
    { label: 'About', path: 'About' },
  ];

  const renderThemeChanger = () => {
    return (
      <Button>
        <GiStripedSun/>
      </Button>
    )
  }

  return (
    <header className='h-16 flex items-center justify-between'>
      <ul className='flex gap-4'>
        {/* Burada yukarıda tanımladığım navigaston dizisini mapliyorum */}
        {/* Mapping the navigations array */}
        {navigations.map((nav,i) => (
          //Link legacyBehavior kullanılma sebebi yeni sürümde doğrudan <a> etiketi kullanmayı geçersiz sayması
          // The reason for using legacyBehavior in this code is that the new version considers using the <a> tag directly invalid
          <Link key={i} href={nav.path} legacyBehavior><a id="link" className='text-chamois-950 hover:text-chamois-800'>{nav.label}</a></Link>
        ))}
      </ul>
      {renderThemeChanger()}

    </header>
  )
}

export default Header;