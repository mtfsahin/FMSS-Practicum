import { BooksContext } from '../contexts/BooksContext'
import { Link, Outlet } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import SearchBox from './SearchBox';

export default function Home() {
    const { books } = useContext(BooksContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (books.length > 0) {
            setLoading(false);
        }
    }, [books]);

    return (
        <>
            <div className='flex justify-center pb-5 pt-2 font-bold'>BOOK SEARCH</div>
            <SearchBox onSearch={(searchTerm) => console.log(searchTerm)} />
            {loading ? (
                <div className='flex justify-center mt-10'>
                    <p>Loading...</p>
                </div>
            ) : (
                <div className='ptb-3 pb-3 pl-8 pr-8 border-4 border-gray-600 border-double shadow-xl rounded-lg mt-10 bg-white overflow-y-scroll max-h-[500px]'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-4 '>
                        {books.map((book) => (
                            <Link
                                className='rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:underline border-y-blue-200 '
                                to={`/books/${book.id.toString()}`}
                                key={book.id}
                            >
                                <div className="bg-white hover:blur-sm transition duration-200 ease-in-out">
                                    {book.volumeInfo.imageLinks?.thumbnail?.replace("http://", "https://").replace("zoom=1", "zoom=2") &&
                                        (
                                            <div className="h-[180px] p-2">
                                                <img
                                                    className='w-full h-full object-cover rounded-xl'
                                                    src={book.volumeInfo.imageLinks.thumbnail.replace("http://", "https://").replace("zoom=1", "zoom=2")}
                                                    alt={book.volumeInfo.title}
                                                />
                                            </div>
                                        )}

                                    <div className="p-4">
                                        <h3 className="text-xs font-bold mb-2 w-50 truncate">{book.volumeInfo.title}</h3>
                                        {book.volumeInfo.authors && (
                                            <p className="text-xs font-medium w-50 truncate">{book.volumeInfo.authors.join(", ")}</p>
                                        )}
                                        <p className='text-xs underline mt-3 flex justify-end text-zinc-400'>Click to details</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            )}

            <Outlet />
        </>
    )
}
