import { WeatherProvider } from '../contexts/WeatherContext';

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (

    //WeatherProvider component'ini kullanarak tüm component'lerin WeatherContext ile haberleşebilmesini sağlıyoruz
    <WeatherProvider>
      <Component {...pageProps} />
    </WeatherProvider>
  );
}