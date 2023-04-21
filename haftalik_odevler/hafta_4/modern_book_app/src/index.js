import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//import BooksContextProvider
import BooksContextProvider from './contexts/BooksContext';

//import BrowserRouter
import {
  BrowserRouter,
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //render  App component inside the BrowserRouter 
  <BrowserRouter>
  {/* and BooksContextProvider components */}
    <BooksContextProvider>
      <App/>
    </BooksContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
