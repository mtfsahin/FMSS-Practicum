import React from 'react'
import SearchBox from '../components/SearchboxComponent';
import BooksComponent from '../components/BooksComponent';
import { Outlet } from 'react-router-dom'

export default function Home() {

    return (
        <>
            <div className='flex justify-center pb-5 pt-2 font-bold'>BOOK SEARCH</div>
            <SearchBox onSearch={(searchTerm) => console.log(searchTerm)} />
            <BooksComponent />
            <Outlet />
        </>
    )
}
