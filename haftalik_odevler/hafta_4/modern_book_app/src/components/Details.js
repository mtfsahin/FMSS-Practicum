import { useParams, Link } from "react-router-dom";
import { BooksContext } from "../contexts/BooksContext";
import React, { useContext, useState, useEffect } from "react";

export default function Details() {
    const [book, setBook] = useState(null);
    const { books } = useContext(BooksContext);
    const { bookId } = useParams();

    useEffect(() => {
        const book = books.find((book) => book.id === bookId);
        setBook(book);
    }, [books, bookId]);

    console.log("Books",books)

    if (!book) {
        return <div className="flex justify-center mt-10">Kitap bulunamadı</div>;
    }

    return (
        <div className="flex flex-col items-center bg-yellow-700 text-white mt-3 p-2">
            <Link to="/books">Go back</Link>
            <h1 className="text-3xl font-bold mb-2">{book.volumeInfo.title}</h1>
            {book.volumeInfo.authors && (
                <p className="text-lg mb-4">
                    <strong>Authors:</strong>{" "}
                    {book.volumeInfo.authors.map((author) => author + ", ")}
                </p>
            )}
            {book.volumeInfo.imageLinks && (
                <img
                    className="w-72 mb-4"
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                />
            )}
            {book.volumeInfo.description && (
                <p className="text-lg mb-4">{book.volumeInfo.description}</p>
            )}
            {book.volumeInfo.publisher && (
                <p className="text-lg">
                    <strong>Publisher:</strong> {book.volumeInfo.publisher}
                </p>
            )}
        </div>

    );
}
