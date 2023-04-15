import CurrentWeather from '@/components/CurrentWeather';
import DailyWeather from '@/components/DailyWeather';

export default function Weather() {

    return (

        <div className="flex flex-col items-center justify-center  text-gray-700 p-10 bg-indigo-800 ">

            {/* Bulunduğumuz günün hava durumu için oluşturduğum componenti çağırıyorum */}
            <CurrentWeather />
            {/* Diğer günler için oluşturduğum componenti çağırıyorum */}
            <DailyWeather />

        </div>

    );
}
