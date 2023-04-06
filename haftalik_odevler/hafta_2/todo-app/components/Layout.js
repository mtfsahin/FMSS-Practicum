import Head from "next/head"
import Header from "../sections/Header"
import Footer from "../sections/Footer"
export const Layout = ({children}) => {
    return (
        <>
            <Head >
                <title>Next dark mode example</title>
            </Head>
            <Header/>
            <div className="min-h-screen flex flex-col">
                <main className="flex-grow">
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    )
}
