import Head from "next/head"
import Header from "../sections/Header"
import Footer from "../sections/Footer"
export const Layout = ({children}) => {
    return (
        <>
            <Head >
                {/* Sayfa titleı */}
                {/* Page title */}
                <title>Weather App</title>
                <meta name="description" content="Fmss Practicum Weather App"></meta>
            </Head>

            <div className="min-h-screen flex flex-col">
                {/* Header componentini cağırıdm*/}
                {/* I called the Header component */}
                <Header/>
                <main className="flex-grow">
                    {children}
                </main>
                {/* Footer componentini çağırdım */}
                {/* I called the Footer component */}
                <Footer/>
            </div>
        </>
    )
}
