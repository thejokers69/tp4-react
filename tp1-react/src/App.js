// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookList from "./Exercice2/BookList";
import MyComponent from "./Exercice2/MyComponent";
import Form from "./Exercice2/Form";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<h2>Bienvenue sur Le TP1-REACT</h2>} />
          <Route path="/my-component" element={<MyComponent />} />
          <Route path="/form" element={<Form />} />
          <Route path="/book-list" element={<BookList />} />  {/* Nouvelle route pour BookList */}
        </Routes>
        
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/my-component">MyComponent</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/book-list">Book List</Link>  {/* Nouveau lien pour BookList */}
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;