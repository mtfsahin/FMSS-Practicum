import { BooksContext } from '../contexts/BooksContext'
import { Link, Outlet } from 'react-router-dom'
import React, { useContext } from 'react'
import SearchBox from './SearchBox';

export default function Home() {
    const { books } = useContext(BooksContext);

    return (
        <>
            <div className='flex justify-center bg-white p-3'>Books Page</div>
            <SearchBox onSearch={(searchTerm) => console.log(searchTerm)} />
            <main className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-4 '>
                {books.map((book) => (
                    <Link
                        className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:underline'
                        to={`/books/${book.id.toString()}`}
                        key={book.id}
                    >
                        <div className="bg-white">
                            {book.volumeInfo.imageLinks?.thumbnail?.replace("http://", "https://").replace("zoom=1", "zoom=2") ? (
                                <div className="h-[200px] sm:h-[280px] md:h-[280px] lg:h-[280px] p-3">
                                    <img
                                        className='w-full h-full object-cover'
                                        src={book.volumeInfo.imageLinks.thumbnail.replace("http://", "https://").replace("zoom=1", "zoom=2")}
                                        alt={book.volumeInfo.title}
                                    />
                                </div>
                            ) : (
                                <div className="h-[250px] p-10 flex items-center justify-center">
                                    <p className='bg-white text-sm'>Image not found</p>
                                </div>
                            )}
                        </div>
                        <div className="p-4">
                            <h2 className="text-sm  font-bold mb-2">{book.volumeInfo.title}</h2>
                            {book.volumeInfo.authors ? (
                                <p className="text-xs text-gray-600">
                                    <strong>Authors:</strong> {book.volumeInfo.authors.join(", ")}
                                </p>
                            ) :
                                (
                                    <p className="text-xs text-gray-600">
                                        Author information not found.
                                    </p>
                                )
                            }

                            {book.volumeInfo.description ? (
                                <p className="text-xs text-gray-600 mt-2 line-clamp-3">
                                    {book.volumeInfo.description}
                                </p>
                            ) :
                                <p className="text-xs text-gray-600 mt-2 line-clamp-3">
                                    Description information not found.
                                </p>
                            }
                        </div>
                    </Link>
                ))}
            </main>
            <Outlet />
        </>
    )
}
