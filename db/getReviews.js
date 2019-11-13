const axios = require("axios").default;
const fs = require("fs");

let urlThree = `https://www.goodreads.com/book/isbn/${book.primary_isbn10}?format=json&key=KEitrYFSYJUx58aiLBvA`;

axios.get(urlThree).then(res => {
  let review = JSON.stringify(res);
  fs.appendFile("./db/json/bookReviews.json", review, err => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  });
});
