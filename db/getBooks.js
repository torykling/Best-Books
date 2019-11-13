const axios = require("axios").default;
const fs = require("fs");

const url =
  "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=oQfc73zKl88H4sCAGAe87G58BgILGyGd";
const urlTwo =
  "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=oQfc73zKl88H4sCAGAe87G58BgILGyGd";

axios
  .get(url)
  .then(res => {
    console.log(typeof res);
    let books = JSON.stringify(res.data.results.books);
    fs.writeFile("./db/json/fictionBooks.json", books, err => {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
      }
    });
  })
  .catch(err => {
    console.log("oops", err);
  });

axios
  .get(urlTwo)
  .then(res => {
    let nonfictionBooks = JSON.stringify(res.data.results.books);
    fs.writeFile("./db/json/nonfictionBooks.json", nonfictionBooks, err => {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
      }
    });
  })
  .catch(err => {
    console.log("oops", err);
  });
