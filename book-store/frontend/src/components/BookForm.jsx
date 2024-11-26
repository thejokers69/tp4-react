// /Users/thejoker/Documents/GitHub/tp4-react/book-store/frontend/src/components/BookForm.jsx
import axios from "axios";
import {useState} from "react";
function BookForm(){
    const [title,setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [author, setAuthor] = useState("");
    async function handleForm(e) {
        e.preventDefault();
        if (!title || !author || price <= 0) {
          alert("Please fill out all fields correctly.");
          return;
        }
        const res= await axios.post("http://localhost:9090/api/books", { title, price, author });
        setTitle("");
        setPrice(0);
        setAuthor("");
      }
    return <form onSubmit={handleForm}>
        <label htmlFor="title">Titre:</label>
        <input type="text" id="title" onChange={(e)=>setTitle(e.target.value)}/>
        <br/>
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" onChange={(e)=>setPrice(e.target.value)}/>
        <br/>
        <label htmlFor="author">Author:</label>
        <input type="text" id="author" onChange={(e)=>setAuthor(e.target.value)}/>
        <br/>
        <input type="submit"/>
        <input type="reset"/>
    </form>
}
export default BookForm;