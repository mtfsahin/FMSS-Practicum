import { BooksContext } from '../contexts/BooksContext'
import { Link, Outlet } from 'react-router-dom'
import React, { useContext } from 'react'

export default function Books() {
    const { books } = useContext(BooksContext);
    return (
        <>
            <div className='flex justify-center bg-yellow-400 p-3'>Books Page</div>
            <main className='text-center'>
                <div className='flex flex-col gap-3 mt-4'>
                    {books.map((book) => (
                        <Link
                            className='bg-red-300'
                            to={`/books/${book.id.toString()}`}
                            key={book.id}
                        >
                            {book.volumeInfo.title}
                        </Link>

                    ))}
                </div>
            </main>
            <Outlet></Outlet>
        </>
    )
}
