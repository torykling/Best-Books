const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Fiction = new Schema({
  title: String,
  author: String,
  description: String,
  isbn: String,
  rank: Number,
  bookImage: String,
  reviews: {}
});

module.exports = mongoose.model("Fiction", Fiction);
