const Fiction = require("../models/Fiction.js");
const fictionData = require("./json/fictionBooks.json");
const Nonfiction = require("../models/Nonfiction.js");
const nonfictionData = require("./json/nonfictionBooks.json");

const axios = require("axios");

// create arrays of review links sorted by ISBN
const fictionReviews = fictionData.map(book => {
  const item = {};
  item.isbn = book.primary_isbn10;
  item.reviews = `https://www.goodreads.com/api/reviews_widget_iframe?did=0&format=html&hide_last_page=true&isbn=${book.primary_isbn10}&links=660&page=1&review_back=fff&stars=000&text=000%5C`;
  return item;
});
const nonfictionReviews = nonfictionData.map(book => {
  const item = {};
  item.isbn = book.primary_isbn10;
  item.reviews = `https://www.goodreads.com/api/reviews_widget_iframe?did=0&format=html&hide_last_page=true&isbn=${book.primary_isbn10}&links=660&page=1&review_back=fff&stars=000&text=000%5C`;
  return item;
});

const updatedFiction = fictionData.map(book => {
  const updatedBook = {};
  updatedBook.title = book.title;
  updatedBook.author = book.author;
  updatedBook.isbn = book.primary_isbn10;
  updatedBook.bookImage = book.book_image;
  updatedBook.description = book.description;
  updatedBook.rank = book.rank;
  // map through the review array to add the links to the book data
  fictionReviews.map(item => {
    if (item.isbn === book.primary_isbn10) {
      updatedBook.reviews = item.reviews;
    }
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
  nonfictionReviews.map(item => {
    if (item.isbn === book.primary_isbn10) {
      updatedBook.reviews = item.reviews;
    }
  });
  return updatedBook;
});

Fiction.deleteMany({}).then(() => {
  Fiction.create(updatedFiction)
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
