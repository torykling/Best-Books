const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/bestBooks", {
  useNewUrlParser: true
});
module.exports = mongoose;
