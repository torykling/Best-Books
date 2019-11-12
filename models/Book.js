const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Book = new Schema({
  title: String,
  author: String,
  description: String,
  isbn: String,
  rank: Number,
  bookImage: String
});

module.exports = mongoose.model("Book", Book);
