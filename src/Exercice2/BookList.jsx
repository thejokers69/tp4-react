// src/Exercise2/BookList.js
import 
// import React from "react";
// import Book from "./Book";

// const BookList = ({ books }) => (
//   <table>
//     <thead>
//       <tr>
//         <th>Title</th>
//         <th>Price</th>
//         <th>Author</th>
//       </tr>
//     </thead>
//     <tbody>
//       {books.map((book, index) => (
//         <Book key={index} book={book} />
//       ))}
//     </tbody>
//   </table>
// );

// export default BookList;

function BokList(){
  const books=[
    {title:"Les Misérables", price:19.99, author:"Victor Hugo"},
    {title:"1984", price:14.99, author:"George Orwell"},
    {title:"To Kill a Mockingbird", price:12.99, author:"Harper Lee"}
  ];
  return (<table>
    <tr>
      <th>Title</th>
      <th>Price</th>
      <th>Author</th>
    </tr>
    {books.map((b)=>{
      return <Book book={b} />
    })}
  </table>);
}