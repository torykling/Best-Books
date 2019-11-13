const express = require("express");
const Book = require("./models/Book");
const Nonfiction = require("./models/Nonfiction");
const app = express();
const parser = require("body-parser");

app.use(parser.json());
// app.use(require("./routes/index.js"));

app.get("/fiction", function(req, res) {
  Book.find({}).then(books => {
    res.json(books);
  });
});
app.get("/fiction/:author", function(req, res) {
  Book.find({ author: req.params.author }).then(book => {
    res.json(book);
  });
});
app.get("/fiction/title/:title", function(req, res) {
  Book.find({ title: req.params.title }).then(book => {
    res.json(book);
  });
});
app.post("/fiction", function(req, res) {
  Book.create(req.body).then(book => {
    res.json(book);
  });
});
app.put("/fiction/:title", function(req, res) {
  Book.findOneAndUpdate({ title: req.params.title }, req.body, {
    new: true
  }).then(book => {
    res.json(book);
  });
});
app.delete("/fiction/:title", function(req, res) {
  Book.findOneAndDelete({ title: req.params.title }).then(book => {
    res.json(book);
  });
});
// nonfiction routes
app.get("/nonfiction", function(req, res) {
  Nonfiction.find({}).then(books => {
    res.json(books);
  });
});
app.get("/nonfiction/:author", function(req, res) {
  Nonfiction.find({ author: req.params.author }).then(book => {
    res.json(book);
  });
});
app.get("/nonfiction/title/:title", function(req, res) {
  Nonfiction.find({ title: req.params.title }).then(book => {
    res.json(book);
  });
});
app.post("/nonfiction", function(req, res) {
  Nonfiction.create(req.body).then(book => {
    res.json(book);
  });
});
app.put("/nonfiction/:title", function(req, res) {
  Nonfiction.findOneAndUpdate({ title: req.params.title }, req.body, {
    new: true
  }).then(book => {
    res.json(book);
  });
});
app.delete("/nonfiction/:title", function(req, res) {
  Nonfiction.findOneAndDelete({ title: req.params.title }).then(book => {
    res.json(book);
  });
});

app.listen(4000, () => console.log("listening on port 4000"));
