import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

//create a BooksContext
export const BooksContext = createContext();

//create a BooksContextProvider, 
const BooksContextProvider = (props) => {
    const [books, setBooks] = useState([]);
    
    //use searchterm from user to bring here
    const searchBooks = async (searchTerm) => {
        //pulling data from google book api with axios connection
        //api key is located in .env file
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&filter=partial&maxResults=40&key=${process.env.REACT_APP_API_KEY}`
        );
        //set the return value to setBook
        setBooks(response.data.items);
    };
    //use the use effect because I don't want a blank search page when the app startsset the term "js" because I don't want a blank search page when the app starts
    useEffect(() => {
        //and set js value searchBooks
        searchBooks("js");
    }, []);

    return (
        //Provide props
        <BooksContext.Provider value={{ books, searchBooks }}>
            {props.children}
        </BooksContext.Provider>
    );
};

export default BooksContextProvider;
