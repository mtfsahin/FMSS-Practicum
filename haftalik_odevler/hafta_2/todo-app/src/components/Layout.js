import Head from "next/head"
import Header from "../sections/Header"
import Footer from "../sections/Footer"
export const Layout = ({children}) => {
    return (
        <>
            <Head >
                {/* Sayfa titleı */}
                {/* Page title */}
                <title>To Do App</title>
                <meta name="descripyion" content="Fmss Practicum Todo App"></meta>
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
