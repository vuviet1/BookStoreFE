import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from './page/Home'
import Book from './page/Book'
import BookDetail from './page/BookDetail/BookDetail'
import BookCat from "./page/fillBookCategory";
import Cart from './page/Cart'
import Login from './page/Login'
import Checkout from './page/Checkout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/BookDetail/:id" element={<BookDetail />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/fillCategory/:id" element={<BookCat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
