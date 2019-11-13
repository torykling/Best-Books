const axios = require("axios").default;
const fs = require("fs");
const nonfictionBooks = require("./json/nonfictionBooks.json");
const fictionBooks = require("./json/fictionBooks.json");

// let urlThree = `https://www.goodreads.com/book/isbn/${book.primary_isbn10}?format=json&key=KEitrYFSYJUx58aiLBvA`;
// let urlThree = `https://www.goodreads.com/book/isbn/0399589651?format=json&key=KEitrYFSYJUx58aiLBvA`;

// axios
//   .get(urlThree)
//   .then(res => {
//     // let review = { isbn: "0399589651", review: [res.data.reviews_widget] };
//     let review = res.data.reviews_widget;
//     // let review = JSON.stringify(res.data.reviews_widget);
//     // let isbn = "isbn": "0399589651";
//     // fs.appendFile("./db/json/bookReviews.json", isbn, err => {
//     //   if (err) {
//     //     console.log(err);
//     //   }
//     // });
//     fs.appendFile("./db/json/bookReviews.json", review, err => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("success");
//       }
//     });
//   })
//   .catch(err => {
//     console.log(err);
//   });

const fictionISBNS = fictionBooks.map(book => {
  const item = {};
  item.isbn = book.primary_isbn10;
  item.review = `https://www.goodreads.com/api/reviews_widget_iframe?did=0&format=html&hide_last_page=true&isbn=${book.primary_isbn10}&links=660&page=1&review_back=fff&stars=000&text=000%5C`;
  return item;
});

// console.log(fictionISBNS);
fs.writeFile("./db/json/bookReviews.json", fictionISBNS, err => {
  if (err) {
    console.log(err);
  }
});

const nonfictionISBNS = nonfictionBooks.map(book => {
  const item = {};
  item.isbn = book.primary_isbn10;
  item.review = `https://www.goodreads.com/api/reviews_widget_iframe?did=0&format=html&hide_last_page=true&isbn=${book.primary_isbn10}&links=660&page=1&review_back=fff&stars=000&text=000%5C`;
  return item;
});

console.log(nonfictionISBNS);
