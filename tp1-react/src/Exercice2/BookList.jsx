// tp1-react/src/Exercice2/BookList.jsx
import React, { useState } from "react";
import Book from "./Book";

function BookList() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [books, setBooks] = useState([
    { id: 1, title: "JavaProgramming", price: 45 },
    { id: 2, title: "Python", price: 120 },
    { id: 3, title: "React", price: 100 }
  ]);

  function handleForm(e) {
    e.preventDefault();
    if (title && price) {
      const newBook = { id: books.length + 1, title, price };
      setBooks([...books, newBook]);
    
    }
  }

  return (
    <>
    {/* Form for adding a new book */}
    <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <button type="submit">Add Book</button>
      </form>

      <table border="1" width="50%" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </tbody>
      </table>
      
      
    </>
  );
}

export default BookList;