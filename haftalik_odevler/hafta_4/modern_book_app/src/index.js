import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/about';
import Books from './components/books';

import {
  BrowserRouter, Route, Routes
} from "react-router-dom";


import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* I write other routes in / so that the routes do not disappear from the screen when the pages change */}
      <Route path="/" element={<App />} >
        <Route path="/about" element={<About />} />

        <Route path="/books" element={<Books />} >
          <Route path="/books/detail" element={<div>Detail books</div>}></Route>
        </Route>

      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
