import About from '../pages/about';
import Details from '../components/DetailsComponent';
import Home from '../pages/home';
import { Routes, Route, } from 'react-router-dom'

const Routers = () => {
    return (
        <Routes>
            {/* I write other routes in / so that the routes do not disappear from the screen when the pages change */}
            <Route path="/" element={<Home />} />          
                {/* after listing the books, when you click on the book, it creates a route according to the id of the book */}
                <Route path="/books/:bookId" element={<Details />} />
                {/* if searched page is not found this will be this output */}
                <Route path="*" element={
                    // 404 page content
                    <main>
                        <div className='text-center bg-cyan-500 p-4'>404 Page</div>
                    </main>
                } />
                <Route path="/about" element={<About />} />
        </Routes>
    );
};
export default Routers;
