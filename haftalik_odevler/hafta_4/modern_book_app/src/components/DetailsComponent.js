import { useParams, Link } from "react-router-dom";
import { BooksContext } from "../contexts/BooksContext";
import React, { useContext, useState, useEffect } from "react";

export default function Details() {
    const [book, setBook] = useState(null);
    const { books } = useContext(BooksContext);
    const { bookId } = useParams();

    useEffect(() => {
        const book = books.find(
            (book) =>
                book.selfLink ===
                `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );
        setBook(book);
    }, [books, bookId]);

    const handlePreview = () => {
        window.open(book.volumeInfo.previewLink, "_blank");
    };

    if (!book) {
        return (
            <div className="flex justify-center mt-10 text-xl font-bold">
                Book not found!
            </div>
        );
    }

    return (
        <div className="container mx-auto mt-10">
            <Link
                to="/"
                className="border-white hover:border-gray-800 px-4 py-2 rounded-lg mr-2 border-dashed border-2 mt-6 font-bold underline"
            >
                Go back
            </Link>
            <div className="flex flex-wrap my-8">
                <div className="w-full md:w-2/5 md:pr-10 ">
                    {book.volumeInfo.imageLinks && (
                        <img
                            className="w-52 pl-4"
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
                        {book.volumeInfo.title}
                    </h1>
                    {book.volumeInfo.authors && (
                        <p className="text-sm">
                            <strong className="underline">Authors:</strong>{" "}
                            {book.volumeInfo.authors.map((author) => author + ", ")}
                        </p>
                    )}
                    {book.volumeInfo.publisher && (
                        <p className="text-sm mb-6">
                            <strong className="underline">Publisher:</strong>{" "}
                            {book.volumeInfo.publisher}
                        </p>
                    )}
                    {book.volumeInfo.description ? (
                        <p className="text-sm mb-2">
                            <strong className="underline">Description:</strong>{" "}
                            {book.volumeInfo.description}
                        </p>
                    ) : (
                        <p className="text-lg mb-2">Description not found.</p>
                    )}
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
