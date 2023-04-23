import { useParams, Link } from "react-router-dom";
import { BooksContext } from "../contexts/BooksContext";
import React, { useContext, useState, useEffect } from "react";

export default function Details() {
    const [book, setBook] = useState(null);
    //Call BooksContent with useContext
    const { books } = useContext(BooksContext);
    // use useParam because i will search in array using bookId
    const { bookId } = useParams();

    useEffect(() => {
        //here I am doing a search with the id I got from useParams
        const book = books.find(
            (book) =>
                book.selfLink ===
                `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );
        //set the book I found to the book value
        setBook(book);
    }, [books, bookId]);

    //to open in new tab
    const handlePreview = () => {
        window.open(book.volumeInfo.previewLink, "_blank");
    };

    //If the book variable is empty, a warning will appear on the screen
    if (!book) {
        return (
            <div className="flex justify-center mt-10 text-xl font-bold">
                Book not found!
            </div>
        );
    }

    return (
        <div className="container mx-auto mt-10">
            {/* create go back button and link it to the home page */}
            <Link
                to="/"
                className="border-white hover:border-gray-800 px-4 py-2 rounded-lg mr-2 border-dashed border-2 mt-6 font-bold underline"
            >
                Go back
            </Link>

            <div className="flex flex-wrap my-8">
                <div className="w-full md:w-2/5 md:pr-10 ">
                    {/* Book image area */}
                    {book.volumeInfo.imageLinks && (
                        <img
                            className="w-52 pl-4"
                            // change zoom=1 value zoom=2, because images in zoom2 more than clear zoom1
                            //In some, images do not appear when http so i changed https
                            src={book.volumeInfo.imageLinks.thumbnail.replace(
                                "http://",
                                "https://"
                            ).replace("zoom=1", "zoom=2")}
                            alt={book.volumeInfo.title}
                        />
                    )}
                </div>
                <div className="w-full md:w-3/5 mt-8 md:mt-0 pl-4">
                    <h1 className="text-xl md:text-4xl font-bold mb-2">
                    {/* Book title area */}
                        {book.volumeInfo.title}
                    </h1>
                    {/* Book Uauthors area */}
                    {book.volumeInfo.authors && (
                        <p className="text-sm">
                            <strong className="underline">Authors:</strong>{" "}
                            {book.volumeInfo.authors.map((author) => author + ", ")}
                        </p>
                    )}
                      {/* Book publisher area */}
                    {book.volumeInfo.publisher && (
                        <p className="text-sm mb-6">
                            <strong className="underline">Publisher:</strong>{" "}
                            {book.volumeInfo.publisher}
                        </p>
                    )}
                    {/* Book description area */}
                    {book.volumeInfo.description ? (
                        <p className="text-sm mb-2">
                            <strong className="underline">Description:</strong>{" "}
                            {book.volumeInfo.description}
                        </p>
                    ) : (
                        <p className="text-lg mb-2">Description not found.</p>
                    )}
                 {/* Book previewLink */}
                    {book.volumeInfo.previewLink ? (
                        <button
                            className="bg-gray-200 hover:border-gray-800 px-4 py-2 rounded-lg mr-2 border-dashed border-2 mt-6 font-bold underline"
                            onClick={handlePreview}
                        >Preview Book</button>
                    ) : (
                        <p className="text-lg mb-2">Preview not available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
