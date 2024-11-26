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
        try {
          setLoading(true);
          const res = await axios.get("http://localhost:9090/api/books");
          console.log("Books API Response:", res.data); 
          setBooks(res.data); 
        } catch (err) {
          console.error("Error fetching books:", err);
          setError("Failed to fetch books. Please try again later.");
        } finally {
          setLoading(false);
        }
      }
    if (loading)return <p className='loading-message'>Loading books...</p>;
    if (error) return <p className='error-message'>{error}</p>;
    return (
        <div className='table-container'>
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
                    {Array.isArray(books) && books.map((b, index) => {
                        return <Book key={index} book={b} />
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default BookList;