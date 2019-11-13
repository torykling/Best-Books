const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const OurBook = new Schema({
  title: String,
  author: String,
  description: String,
  isbn: String,
  rank: Number,
  bookImage: String,
  reviews: {}
});

module.exports = mongoose.model("OurBook", OurBook);
