import { useState, useEffect } from 'react';
import Book from './Book';
import '../styles/BookList.css';
import axios from 'axios'

function BookList() {
    const [books, setBooks] = useState([]);
    useEffect(, []);
    async function () {
        const res=aawait axios.get("http://localhost:3000/api/books");
        console.log(res.data);
        setBooks(res.data);
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Author</th>
                    <th>Publication Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {books.map((b, index) => (
                    <Book key={index} book={b} />
                ))}
            </tbody>
        </table>

    )
}
export default BookList;