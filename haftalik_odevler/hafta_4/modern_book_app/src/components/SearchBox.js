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
        <div className="flex-row">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                    type="text"
                    className="rounded-lg bg-slate-200 p-3 "
                    placeholder="Search a book"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={handleSearch}
                />
                <button
                    className="bg-gray-200 hover:bg-gray-300 hover:border-gray-800 px-4 py-2 rounded-lg mr-2 border-dashed border-2 "
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            {showWarning && (
                <p className="flex justify-center text-red-500 text-sm mt-2 ">
                    Please enter a search term.
                </p>
            )}
        </div>
    );
};

export default SearchBox;
