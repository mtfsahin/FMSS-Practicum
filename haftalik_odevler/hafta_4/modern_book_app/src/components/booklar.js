import { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";

const Booklar = () => {
    const { books } = useContext(BooksContext);

    return (
        <div>
            {books.map((book) => (
                <div key={book.id}>
                    <h2>{book.volumeInfo.title}</h2>
                    <p>{book.volumeInfo.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Booklar;
