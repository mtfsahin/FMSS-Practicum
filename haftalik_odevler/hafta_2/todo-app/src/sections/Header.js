import Link from 'next/link';
import Button from '../components/Button';
import { GiStripedSun } from "react-icons/gi";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Header = () => {

  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  //Navigasyon dizisi oluşturuyorum
  //Created navigations array
  const navigations = [
    { label: 'Home', path: '/' },
    { label: 'About', path: 'about' },
  ];

  useEffect(() => {
    setMounted(true);
  }, [])

  const renderThemeChanger = () => {

    if (!mounted) return null;



    if (currentTheme === "dark") {
      return (
        <Button onClick={() => setTheme('light')} className="bg-bracken-900">
          <GiStripedSun style={{color:"white"}} />
        </Button>
      )
    } else {
      return (
        <Button onClick={() => setTheme('dark')} className="bg-comet-100">
          <GiStripedSun />
        </Button>
      )
    }
  }

  return (
    <header className='h-16 flex items-center justify-between'>
      <ul className='flex gap-4'>
        {/* Burada yukarıda tanımladığım navigaston dizisini mapliyorum */}
        {/* Mapping the navigations array */}
        {navigations.map((nav, i) => (
          //Link legacyBehavior kullanılma sebebi yeni sürümde doğrudan <a> etiketi kullanmayı geçersiz sayması
          // The reason for using legacyBehavior in this code is that the new version considers using the <a> tag directly invalid
          <Link key={i} href={nav.path} legacyBehavior><a id="link" className='text-comet-100 dark:text-comet-800 hover:text-cherokee-200 dark:hover:text-cherokee-800'>{nav.label}</a></Link>
        ))}
      </ul>
      {renderThemeChanger()}

    </header>
  )
}

export default Header;