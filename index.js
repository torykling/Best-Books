const express = require("express");
const Book = require("./models/Book");
const app = express();
const parser = require("body-parser");

app.use(parser.json());
// app.use(require("./routes/index.js"));

app.get("/", function(req, res) {
  Book.find({}).then(books => {
    res.json(books);
  });
});
app.get("/:author", function(req, res) {
  Book.find({ author: req.params.author }).then(book => {
    res.json(book);
  });
});
app.post("/", function(req, res) {
  Book.create(req.body).then(book => {
    res.json(book);
  });
});
app.put("/:title", function(req, res) {
  Book.findOneAndUpdate({ title: req.params.title }, req.body, {
    new: true
  }).then(book => {
    res.json(book);
  });
});
app.delete("/:title", function(req, res) {
  Book.findOneAndDelete({ title: req.params.title }).then(book => {
    res.json(book);
  });
});

app.listen(4000, () => console.log("listening on port 4000"));
