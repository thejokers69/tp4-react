/*  /Users/thejoker/Documents/GitHub/tp4-react/book-store/backend/services/books_services.js */
const BookModel = require("../models/Book");

async function getAllBooks() {
  return await BookModel.find();
}
async function getBookById(idB) {
  return await BookModel.findById(idB);
}
async function addBook(book) {
  return await BookModel.create(book);
}
async function deleteBook(idB) {
  return await BookModel.findByIdAndDelete(idB);
}
async function updateBook(idB, books) {
  return await BookModel.findByIdAndUpdate(idB, books);
}
module.exports = { getAllBooks, getBookById, addBook, deleteBook, updateBook };
