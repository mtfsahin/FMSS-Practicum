import { useContext, useState } from "react";
import { BooksContext } from "../contexts/BooksContext";

const SearchBox = () => {
    //Call BooksContent with useContext
    const { searchBooks } = useContext(BooksContext);
    //define a use state for the search text
    const [searchText, setSearchText] = useState("");
    //alert if a text is not entered
    const [showWarning, setShowWarning] = useState(false);

    //trigger the search when clicking the button or clicking enter
    const handleSearch = (e) => {
        if (e.key === "Enter" || e.type === "click") {
            //set true setShowWarning if a text is not entered
            if (searchText === "") {
                setShowWarning(true);
            } else {
                //else set false setShowWarning and set searchBooks entered searchText
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
                {/* Search input */}
                <input
                    type="text"
                    className="rounded-lg bg-slate-200 p-3 "
                    placeholder="Search a book"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={handleSearch}
                />
                {/* Search buton */}
                <button
                    className="bg-gray-200 hover:bg-gray-300 hover:border-gray-800 px-4 py-2 rounded-lg mr-2 border-dashed border-2 "
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            {/* Warning area */}
            {showWarning && (
                <p className="flex justify-center text-red-500 text-sm mt-2 ">
                    Please enter a search term.
                </p>
            )}
        </div>
    );
};

export default SearchBox;
