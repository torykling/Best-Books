const axios = require("axios").default;
const fs = require("fs");

const url =
  "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=oQfc73zKl88H4sCAGAe87G58BgILGyGd";
const urlTwo =
  "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=oQfc73zKl88H4sCAGAe87G58BgILGyGd";

axios
  .get(url)
  .then(res => {
    console.log("Success", res.data.results.books);
    let books = JSON.stringify(res.data.results.books);
    fs.writeFile("./books.json", res.data.results.books, err => {
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

axios.get(urlTwo).then(res => {
  console.log(res.data.results.books);
  let nonfictionBooks = JSON.stringify(res.data.results.books);
  fs.appendFile("./books.json", nonfictionBooks, err => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  });
});
