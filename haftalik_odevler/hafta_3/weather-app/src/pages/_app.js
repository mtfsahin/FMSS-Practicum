import { WeatherProvider } from '../contexts/WeatherContext';
import { Layout } from '../components/Layout'

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (

    //WeatherProvider component'ini kullanarak tüm component'lerin WeatherContext ile haberleşebilmesini sağlıyoruz

    <WeatherProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WeatherProvider>
  );
}