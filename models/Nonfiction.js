const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Nonfiction = new Schema({
  title: String,
  author: String,
  description: String,
  isbn: String,
  rank: Number,
  bookImage: String,
  review: {}
});

module.exports = mongoose.model("Nonfiction", Nonfiction);
