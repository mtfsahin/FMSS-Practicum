import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
    const [books, setBooks] = useState([]);
    
    const searchBooks = async (searchTerm) => {
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&filter=partial&maxResults=40&key=${process.env.REACT_APP_API_KEY}`
        );
        setBooks(response.data.items);
    };
    
    useEffect(() => {
        searchBooks("js");
    }, []);

    return (
        <BooksContext.Provider value={{ books, searchBooks }}>
            {props.children}
        </BooksContext.Provider>
    );
};

export default BooksContextProvider;
