import { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";

const SearchBox = () => {
    const { searchBooks } = useContext(BooksContext);

    return (
        <div>
            <input type="text" onChange={(e) => searchBooks(e.target.value)} />
        </div>
    );
};

export default SearchBox;
