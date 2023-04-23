import { BooksContext } from '../contexts/BooksContext'
import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function BooksComponent() {
    //Call BooksContent with useContext
    const { books } = useContext(BooksContext);
    //I want to notify the user if the books do not load so create a loading useState 
    const [loading, setLoading] = useState(true);

    //If the number of books is greater than 0, setLoading false
    useEffect(() => {
        if (books.length > 0) {
            setLoading(false);
        }
    }, [books]);

    return (
        <>
            {/* Check loading status */}
            {loading ? (
                <div className='flex justify-center mt-10'>
                    <p>Loading...</p>
                </div>
            ) : (
                <div className='ptb-3 pb-3 pl-8 pr-8 bg-gray-300 border-2 border-gray-500 border-dotted shadow-md rounded-lg mt-10 overflow-y-scroll max-h-[500px]'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-4 '>
                        {/* mappin incomming data */}
                        {books.map((book) => (
                            // link by book.id
                            <Link
                                className='rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:underline border-y-blue-200'
                                // convert string and use book.id for link /book/<book.id>
                                to={`/books/${book.id.toString()}`}
                                key={book.id}
                            >
                                {/* I wanted to use a blur effect when the user hovers over it */}
                                <div className="bg-white hover:blur-sm transition duration-200 ease-in-out">
                                    {/* Image area */}
                                    {book.volumeInfo.imageLinks?.thumbnail?.replace("http://", "https://").replace("zoom=1", "zoom=2") ?
                                        (
                                            //If there is image
                                            <div className="h-[180px] p-2">
                                                <img
                                                    className='w-full h-full object-cover rounded-xl'
                                                    // change zoom=1 value zoom=2, because images in zoom2 more than clear zoom1
                                                    //In some, images do not appear when http so i changed https
                                                    src={book.volumeInfo.imageLinks.thumbnail.replace("http://", "https://").replace("zoom=1", "zoom=2")}
                                                    alt={book.volumeInfo.title}
                                                />
                                            </div>
                                        ) :
                                        (
                                            // If there is no image, this text will appear
                                            <div className="h-[180px] p-2">
                                                <p>Image not found.</p>
                                            </div>
                                        )}
                                    <div className="p-4">
                                        {/* Book title */}
                                        <h3 className="text-xs font-bold mb-2 w-50 truncate">{book.volumeInfo.title}</h3>
                                        {book.volumeInfo.authors ? (
                                            //Book Authors
                                            <p className="text-xs font-medium w-50 truncate">{book.volumeInfo.authors.join(", ")}</p>
                                        ):
                                        (
                                            <p className="text-xs font-medium w-50 truncate">Author not found.</p>
                                        )}
                                        <p className='text-xs underline mt-3 flex justify-end text-zinc-400'>Click to details</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
            {/*Outlet */}
            <Outlet />
        </>
    )
}
