import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
    const [books, setBooks] = useState([]);
    
    const searchBooks = async (searchTerm) => {
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&filter=free-ebooks&key=AIzaSyC8aTE2SdPpyJX-INAXzGDze2DXNOneilA`
        );
        setBooks(response.data.items);
    };

    useEffect(() => {
        searchBooks("flowers");
    }, []);

    return (
        <BooksContext.Provider value={{ books, searchBooks }}>
            {props.children}
        </BooksContext.Provider>
    );
};

export default BooksContextProvider;
