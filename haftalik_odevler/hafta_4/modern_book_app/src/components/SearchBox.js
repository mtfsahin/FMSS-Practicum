import { useContext, useState } from "react";
import { BooksContext } from "../contexts/BooksContext";

const SearchBox = () => {
    const { searchBooks } = useContext(BooksContext);
    const [searchText, setSearchText] = useState("");
    const [showWarning, setShowWarning] = useState(false);



    const handleSearch = (e) => {
        if (e.key === "Enter" || e.type === "click") {
            if (searchText === "") {
                setShowWarning(true);
            } else {
                setShowWarning(false);
                searchBooks(searchText);
            }
        } else {
            setShowWarning(false);
        }
    };


    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
                type="text"
                className="rounded-lg bg-slate-200 pl-3"
                placeholder="Search a book"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleSearch}
            />
            <button
                className="ml-2 border-red-500 rounded-lg bg-red-800 border-2 p-1 text-sm"
                onClick={handleSearch}
            >
                Search
            </button>
            {showWarning && (
                <p className="text-red-500 text-sm mt-2">
                    Please enter a search term.
                </p>
            )}
        </div>
    );
};

export default SearchBox;
