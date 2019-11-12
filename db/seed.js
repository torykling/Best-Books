const Book = require("../models/Book.js");
const bookData = require("./books.json");

const updatedBookData = bookData.map(book => {
  const updatedBook = {};
  updatedBook.title = book.title;
  updatedBook.author = book.author;
  updatedBook.isbn = book.primary_isbn10;
  updatedBook.bookImage = book.book_image;
  updatedBook.description = book.description;
  updatedBook.rank = book.rank;
  return updatedBook;
});

Book.deleteMany({}).then(() => {
  Book.create(updatedBookData)
    .then(books => {
      console.log(books);
    })
    .catch(err => {
      console.log(err);
    });
});
