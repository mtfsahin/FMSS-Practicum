import About from '../components/book';
import Books from '../components/book';
import Details from '../components/details';

import { Routes, Route, } from 'react-router-dom'

const Routers = () => {
    return (
        <Routes>
            {/* I write other routes in / so that the routes do not disappear from the screen when the pages change */}
            <Route path="/">
                {/* after listing the books, when you click on the book, it creates a route according to the id of the book */}
                <Route path="/books" element={<Books />}></Route>
                <Route path="/books/:bookId" element={<Details />} ></Route>
                {/* if searched page is not found this will be this output */}
                <Route path="*" element={
                    <main>
                        <div className='text-center bg-cyan-500 p-4'>404 Page</div>
                    </main>
                }></Route>
                <Route path="/about" element={<About />}></Route>
            </Route>
        </Routes>
    );
};

export default Routers;
