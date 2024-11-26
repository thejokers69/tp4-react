// /Users/thejoker/Documents/GitHub/tp4-react/book-store/frontend/src/components/Book.jsx
function Book({ book }) {
    return (
      <tr>
        <td>{book.title}</td>
        <td>{book.price}</td>
        <td>{book.date_publication}</td>
        <td>{book.author}</td>
        <td>
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </td>
      </tr>
    );
  }
export default Book;