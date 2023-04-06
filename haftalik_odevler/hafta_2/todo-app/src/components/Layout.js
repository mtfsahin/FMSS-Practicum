import Head from "next/head"
import Header from "../sections/Header"
import Footer from "../sections/Footer"
export const Layout = ({children}) => {
    return (
        <>
            <Head >
                <title>To Do App</title>
                <meta name="descripyion" content="Fmss Practicum Todo App"></meta>
            </Head>
            <div className="min-h-screen flex flex-col">
                <Header/>
                <main className="flex-grow">
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    )
}
