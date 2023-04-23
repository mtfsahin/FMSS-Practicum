import React from 'react'
import SearchboxComponent from '../components/SearchboxComponent';
import BooksComponent from '../components/BooksComponent';
import { Outlet } from 'react-router-dom'

export default function Home() {

    return (
        <>
            {/* Home page content */}
            <div className='flex justify-center pb-5 pt-2 font-bold'>BOOK SEARCH</div>
            {/* call searchBooks component */}
            <SearchboxComponent onSearch={(searchTerm) => console.log(searchTerm)} />
            {/* call BooksComponent component */}
            <BooksComponent />
            {/* call Outlet from react router dom */}
            <Outlet />
        </>
    )
}
