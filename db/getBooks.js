const axios = require("axios").default;
const fs = require("fs");

const url =
  "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=oQfc73zKl88H4sCAGAe87G58BgILGyGd";
const urlTwo =
  "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=oQfc73zKl88H4sCAGAe87G58BgILGyGd";

axios
  .get(url)
  // .then(res => res.json())
  .then(res => {
    console.log(typeof res);
    // console.log("Success", res.data.results.books);
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

axios.get(urlTwo).then(res => {
  //   console.log(res.data.results.books);
  let nonfictionBooks = JSON.stringify(res.data.results.books);
  fs.writeFile("./db/json/nonfictionBooks.json", nonfictionBooks, err => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  });
});

// const requestOne = axios.get(url);
// const requestTwo = axios.get(urlTwo);

// axios
//   .all([requestOne, requestTwo])
//   .then(
//     axios.spread((...responses) => {
//       //   const responseOne = JSON.stringify(responses[0].data.results.books);
//       //   const responseTwo = JSON.stringify(responses[1].data.results.books);

//       const books = [];
//       for (let i = 0; i < responses.length; i++) {
//         for (let j = 0; j < responses[i].data.results.books.length; j++) {
//           books.push(JSON.stringify(responses[i].data.results.books[j]));
//         }
//       }
//       fs.appendFile("./books.json", books, err => {
//         if (err) {
//           throw err;
//         } else {
//           console.log("success");
//         }
//       });
//     })
//   )
//   .catch(err => {
//     console.error(err);
//   });
