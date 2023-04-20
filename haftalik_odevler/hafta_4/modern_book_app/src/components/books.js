import React from 'react'
import { Link } from 'react-router-dom'
import { getBooks } from './data'

export default function Books() {
    let books = getBooks();

    return (
        <main className='text-center'>
            <div>Books</div>
            <div className='flex flex-col gap-3'>
                {books.map(book => (
                    <Link
                        className='bg-slate-600'
                        to={`books/${book.number}`}
                        key={book.number}
                    >
                        {book.name}
                    </Link>
                ))}
            </div>
        </main>
    )
}
