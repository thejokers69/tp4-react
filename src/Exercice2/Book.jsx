// // src/Exercise2/Book.js
// import React from "react";

// const Book = ({ book }) => (
//   <tr>
//     <td>{book.title}</td>
//     <td>{book.price} €</td>
//     <td>{book.author}</td>
//   </tr>
// );

// export default Book;

function Book(props)(
  return <tr>
    <td>{props.title}</td>
    <td>{props.price} €</td>
    <td>{props.author}</td>
  </tr>
) 