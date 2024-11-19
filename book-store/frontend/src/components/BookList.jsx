// /Users/thejoker/Documents/GitHub/tp4-react/book-store/frontend/src/components/BookList.jsx
import { useState, useEffect } from 'react';
import Book from './Book';
import '../styles/BookList.css';
import axios from 'axios'

function BookList() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetchBooks();;
    }, []);
    async function fetchBooks() {
        const res = await axios.get("http://localhost:9090/api");
        console.log('API Response:', res.data);
        setBooks(res.data.books || []);
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
                {books.map((b, index) => {
                    return <Book key={index} book={b} />
                })}
            </tbody>
        </table>

    )
}
export default BookList;