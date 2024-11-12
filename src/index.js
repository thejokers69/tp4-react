// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import BookDisplay from "./Exercise1/BookDisplay";
import BookList from "./Exercise2/BookList";

const books = [
  { title: "Les Misérables", price: 19.99, author: "Victor Hugo" },
  { title: "1984", price: 14.99, author: "George Orwell" },
  { title: "To Kill a Mockingbird", price: 12.99, author: "Harper Lee" }
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h2>Single Book Display</h2>
    <BookDisplay />

    <h2>Book List</h2>
    <BookList books={books} />
  </div>
);

reportWebVitals();