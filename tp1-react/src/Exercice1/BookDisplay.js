// src/Exercise1/BookDisplay.js
import React from "react";

const book = {
  title: "Les Misérables",
  price: 19.99,
  author: "Victor Hugo",
};

const BookDisplay = () => (
  <table border="1" width="50%" cellPadding="5" cellSpacing="0">
    <thead>
      <tr>
        <th>Title</th>
        <th>Price</th>
        <th>Author</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{book.title}</td>
        <td>{book.price} €</td>
        <td>{book.author}</td>
      </tr>
    </tbody>
  </table>
);

export default BookDisplay;