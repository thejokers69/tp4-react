/*  /Users/thejoker/Documents/GitHub/tp4-react/book-store/backend/controllers/books_controller.js */
const { response } = require("express");
const bookService = require("../services/books_services");
// const BookModel = require("../models/Book");
/*const books = [
  { id: 1, title: "ExpressJS programming", price: 20 },
  { id: 2, title: "NodeJS programming", price: 30 },
  { id: 3, title: "AngularJS programming", price: 40 },
];*/

async function getAllBooks(req, res) {
  try {
    const books = await bookService.getAllBooks();
    res.json(books);
    /*if (req.query.q) {
    const booksCopy = books.filter((b) =>
      b.title.toLowerCase().includes(req.query.q.toLowerCase())
    );
    res.json(booksCopy);
  } else {
    res.json({ books });
  }*/
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch books." });
  }
}

async function getBookById(req, res) {
  try {
    const books = await bookService.getBookById(req.params.id);
    // const books = await BookModel.findOne({ _id: req.params.id });
    // const book = books.find((b) => b.id == req.params.id);
    if (!books) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(books);
  } catch (error) {
    console.log("Error fetching book by ID:", error);
  }
}

async function addBook(req, res) {
  const { title, author, price } = req.body;
  if (!title || !author || price === undefined || price < 0) {
    return res
      .status(400)
      .json({ error: "Title, author, and a non-negative price are required." });
  }

  try {
    const book = await bookService.addBook(req.body);
    res.status(201).json(book);
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({ error: error.message });
  }
  // const book = await BookModel.create(req.body);
  // res.json(book);
  // book.id = books[books.length - 1].id + 1;
  // books.push(book);
  // res.send("The book is added.");
}

async function deleteBookById(req, res) {
  const books = await bookService.deleteBookById(req.params.id);
  // const books = await BookModel.findByIdAndDelete(req.params.id);
  if (!books) {
    return res.status(404).send("Book not found");
  }
  res.json(books);
  // const index = books.findIndex((b) => b.id == req.params.id);
  // if (index === -1) {
  //   return res.status(404).send("Book not found");
  // }
  // books.splice(index, 1);
  res.send(`The book with id: ${req.params.id} has been deleted.`);
}

async function updateBookById(req, res) {
  const book = await bookService.updateBookById(req.params.id, req.body);
  // const books = await BookModel.findByIdAndUpdate(
  //   req.params.id,
  //   req.params.body
  // );
  if (!books) {
    return res.status(404).send("Book not found");
  }
  res.json(books);
  // const index = books.findIndex((b) => b.id == req.params.id);
  // if (index === -1) {
  //   return res.status(404).send("Book not found");
  // }

  // books[index].title = req.body.title || books[index].title;
  // books[index].price = req.body.price || books[index].price;

  // res.send(`The book with id: ${req.params.id} has been updated.`);
}

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  deleteBookById,
  updateBookById,
};
