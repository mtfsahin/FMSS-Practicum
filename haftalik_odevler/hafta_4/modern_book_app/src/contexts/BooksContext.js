import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
    const [books, setBooks] = useState([]);
    

    const searchBooks = async (searchTerm,fiter) => {
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&filter=partial&maxResults=40&key=AIzaSyC8aTE2SdPpyJX-INAXzGDze2DXNOneilA`
        );

        //`https://www.googleapis.com/books/v1/volumes?q=${search}&filter=${filter}&printType=${printType}&orderBy=${sortBy}&startIndex=0&maxResults=40&key=${process.env.BOOK_API_KEY}`

        setBooks(response.data.items);
    };

    console.log(books);
    
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
