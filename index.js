const express = require("express");
const Fiction = require("./models/Fiction");
const Nonfiction = require("./models/Nonfiction");
const OurBook = require("./models/OurBook");
const app = express();
const parser = require("body-parser");

app.use(parser.json());

app.get("/", function(req, res) {
  res.json({
    "Nonfiction bestsellers": "http://localhost:4000/nonfiction",
    "Fiction bestsellers": "http://localhost:4000/fiction"
  });
});
// fiction routes
app.get("/fiction", function(req, res) {
  Fiction.find({}).then(books => {
    res.json(books);
  });
});
app.get("/fiction/author/:author", function(req, res) {
  Fiction.find({ author: req.params.author }).then(book => {
    res.json(book);
  });
});
app.get("/fiction/title/:title", function(req, res) {
  Fiction.find({ title: req.params.title }).then(book => {
    res.json(book);
  });
});
app.get("/fiction/rank/:rank", function(req, res) {
  Fiction.find({ rank: req.params.rank }).then(book => {
    res.json(book);
  });
});
// app.post("/fiction", function(req, res) {
//   Book.create(req.body).then(book => {
//     res.json(book);
//   });
// });
// app.put("/fiction/:title", function(req, res) {
//   Book.findOneAndUpdate({ title: req.params.title }, req.body, {
//     new: true
//   }).then(book => {
//     res.json(book);
//   });
// });
// app.delete("/fiction/:title", function(req, res) {
//   Book.findOneAndDelete({ title: req.params.title }).then(book => {
//     res.json(book);
//   });
// });

// nonfiction routes
app.get("/nonfiction", function(req, res) {
  Nonfiction.find({}).then(books => {
    res.json(books);
  });
});
app.get("/nonfiction/author/:author", function(req, res) {
  Nonfiction.find({ author: req.params.author }).then(book => {
    res.json(book);
  });
});
app.get("/nonfiction/title/:title", function(req, res) {
  Nonfiction.find({ title: req.params.title }).then(book => {
    res.json(book);
  });
});
app.get("/nonfiction/rank/:rank", function(req, res) {
  Nonfiction.find({ rank: req.params.rank }).then(book => {
    res.json(book);
  });
});
// app.post("/nonfiction", function(req, res) {
//   Nonfiction.create(req.body).then(book => {
//     res.json(book);
//   });
// });
// app.put("/nonfiction/:title", function(req, res) {
//   Nonfiction.findOneAndUpdate({ title: req.params.title }, req.body, {
//     new: true
//   }).then(book => {
//     res.json(book);
//   });
// });
// app.delete("/nonfiction/:title", function(req, res) {
//   Nonfiction.findOneAndDelete({ title: req.params.title }).then(book => {
//     res.json(book);
//   });
// });

// OurBooks routes
app.get("/ourbooks", function(req, res) {
  OurBook.find({}).then(books => {
    res.json(books);
  });
});
app.get("/ourbooks/author/:author", function(req, res) {
  OurBook.find({ author: req.params.author }).then(book => {
    res.json(book);
  });
});
app.get("/ourbooks/title/:title", function(req, res) {
  OurBook.find({ title: req.params.title }).then(book => {
    res.json(book);
  });
});
app.post("/ourbooks", function(req, res) {
  OurBook.create(req.body).then(book => {
    res.json(book);
  });
});
app.put("/ourbooks/title/:title", function(req, res) {
  OurBook.findOneAndUpdate({ title: req.params.title }, req.body, {
    new: true
  }).then(book => {
    res.json(book);
  });
});
app.delete("/ourbooks/title/:title", function(req, res) {
  OurBook.findOneAndDelete({ title: req.params.title }).then(book => {
    res.json(book);
  });
});
app.delete("/ourbooks", function(req, res) {
  OurBook.deleteMany({}).then(books => {
    res.json(books);
  });
});

app.listen(4000, () => console.log("listening on port 4000"));
