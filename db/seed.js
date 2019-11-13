const Book = require("../models/Book.js");
const bookData = require("./fictionBooks.json");
const Nonfiction = require("../models/Nonfiction.js");
const nonfictionData = require("./nonfictionBooks.json");
// const reviews = require("./bookReviews.json");
const axios = require("axios");

const updatedBookData = bookData.map(book => {
  const updatedBook = {};
  updatedBook.title = book.title;
  updatedBook.author = book.author;
  updatedBook.isbn = book.primary_isbn10;
  updatedBook.bookImage = book.book_image;
  updatedBook.description = book.description;
  updatedBook.rank = book.rank;
  let urlThree = `https://www.goodreads.com/book/isbn/${book.primary_isbn10}?format=json&key=KEitrYFSYJUx58aiLBvA`;
  axios.get(urlThree).then(res => {
    updatedBook.review = res.data;
  });
  return updatedBook;
});

const updatedNonfiction = nonfictionData.map(book => {
  const updatedBook = {};
  updatedBook.title = book.title;
  updatedBook.author = book.author;
  updatedBook.isbn = book.primary_isbn10;
  updatedBook.bookImage = book.book_image;
  updatedBook.description = book.description;
  updatedBook.rank = book.rank;
  let urlThree = `https://www.goodreads.com/book/isbn/${book.primary_isbn10}?format=json&key=KEitrYFSYJUx58aiLBvA`;
  axios.get(urlThree).then(res => {
    // console.log(res.data);
    updatedBook.review = [res.data];
    // console.log(updatedBook.review);
  });
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

Nonfiction.deleteMany({}).then(() => {
  Nonfiction.create(updatedNonfiction)
    .then(books => {
      console.log(books);
    })
    .catch(err => {
      console.log(err);
    });
});
