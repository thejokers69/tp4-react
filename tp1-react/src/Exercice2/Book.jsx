// tp4-react/tp1-react/src/Exercice2/Book.jsx
import React from "react";

function Book({ book }) {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.price} €</td>
    </tr>
  );
}

export default Book;