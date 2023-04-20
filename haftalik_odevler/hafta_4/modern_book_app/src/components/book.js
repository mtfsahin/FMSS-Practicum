import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getBooks } from './data'

export default function books() {
    let books = getBooks()
    return (
        <>
            <div className='flex justify-center bg-yellow-400 p-3'>Books Page</div>
            <main className='text-center'>
                <div className='flex flex-col gap-3 mt-4'>
                    {books.map(book => (
                        <Link
                            className='bg-red-300'
                            to={`/books/${book.number}`}
                            key={book.number}
                        >
                            {book.name}
                        </Link>
                    ))}
                </div>
            </main>
            <Outlet></Outlet>
        </>
    )
}
