const express = require("express");
const app = express();
const Fiction = require("./models/Fiction");
const Nonfiction = require("./models/Nonfiction");
const OurBook = require("./models/OurBook");
const parser = require("body-parser");
const cors = require("cors");

app.use(parser.json());
app.use(cors());

app.get("/", function(req, res) {
  res.json({
    "Nonfiction bestsellers":
      "https://best-books-tkling.herokuapp.com/nonfiction",
    "Fiction bestsellers": "https://best-books-tkling.herokuapp.com/fiction"
  });
});
// ************************* FICTION ROUTES ************************

/**
 * @api {get} /fiction Get current fiction bestsellers
 * @apiName GetFiction
 * @apiGroup Fiction
 */

app.get("/fiction", function(req, res) {
  Fiction.find({}).then(books => {
    res.json(books);
  });
});

/**
 * @api {get} /fiction/author/:author Get fiction bestseller by author
 * @apiName GetFictionByAuthor
 * @apiGroup Fiction
 *
 * @apiParam {Name} authorName Case-sensitive name of author
 *
 * @apiSuccess {String} id Book id in database
 * @apiSuccess {String} title Book title
 * @apiSuccess {String} author Author name
 * @apiSuccess {String} isbn Book isbn
 * @apiSuccess {String} bookImage Url to image of book cover
 * @apiSuccess {String} description Description of book
 * @apiSuccess {Number} rank Rank of book in New York Times bestseller list
 * @apiSuccess {String} reviews Link to Goodreads reviews of book
 *
 * @apiSuccessExample Successful Response:
 *
 *   {
 *    "_id": "5dcdc5f06b7c490004a9fa7b",
 *    "title": "THE GUARDIANS",
 *    "author": "John Grisham",
 *    "isbn": "0385544189",
 *    "bookImage": "https://s1.nyt.com/du/books/images/9780385544184.jpg",
 *   "description": "Cullen Post, a lawyer and Episcopal minister, antagonizes some ruthless killers when he takes on a wrongful conviction case.",
 *    "rank": 2,
 *    "reviews": "https://www.goodreads.com/api/reviews_widget_iframe?did=0&format=html&hide_last_page=true&isbn=0385544189&links=660&page=1&review_back=fff&stars=000&text=000%5C",
 *    "__v": 0
 *  }
 *
 */

app.get("/fiction/author/:author", function(req, res) {
  Fiction.find({ author: req.params.author }).then(book => {
    res.json(book);
  });
});

/**
 * @api {get} /fiction/title/:title Get current fiction bestseller by title
 * @apiName GetFictionByTitle
 * @apiGroup Fiction
 *
 * @apiParam {Title} Title Title must be UPPERCASE
 */

app.get("/fiction/title/:title", function(req, res) {
  Fiction.find({ title: req.params.title }).then(book => {
    res.json(book);
  });
});

/**
 * @api {get} /fiction/rank/:rank Get current fiction bestseller by bestseller rank
 * @apiName GetFictionByRank
 * @apiGroup Fiction
 *
 * @apiParam {Rank} Rank Rank must be a number from 1-15
 */
app.get("/fiction/rank/:rank", function(req, res) {
  Fiction.find({ rank: req.params.rank }).then(book => {
    res.json(book);
  });
});

// ********************  NONFICTION ROUTES ************************
/**
 * @api {get} /nonfiction Get current nonfiction bestsellers
 * @apiName GetNonfiction
 * @apiGroup Nonfiction
 */
app.get("/nonfiction", function(req, res) {
  Nonfiction.find({}).then(books => {
    res.json(books);
  });
});
/**
 * @api {get} /nonfiction/author/:author Get fiction bestseller by author
 * @apiName GetNonfictionByAuthor
 * @apiGroup Nonfiction
 *
 * @apiParam {Name} authorName Case-sensitive name of author
 *
 * @apiSuccess {String} id Book id in database
 * @apiSuccess {String} title Book title
 * @apiSuccess {String} author Author name
 * @apiSuccess {String} isbn Book isbn
 * @apiSuccess {String} bookImage Url to image of book cover
 * @apiSuccess {String} description Description of book
 * @apiSuccess {Number} rank Rank of book in New York Times bestseller list
 * @apiSuccess {String} reviews Link to Goodreads reviews of book
 *
 * @apiSuccessExample Successful Response:
 *
 *    {
 *      "_id": "5dcdc5f06b7c490004a9fa91",
 *      "title": "EDUCATED",
 *      "author": "Tara Westover",
 *      "isbn": "0399590501",
 *      "bookImage": "https://s1.nyt.com/du/books/images/9780399590504.jpg",
 *      "description": "The daughter of survivalists, who is kept out of school, educates herself enough to leave home for university.",
 *      "rank": 9,
 *      "reviews": "https://www.goodreads.com/api/reviews_widget_iframe?did=0&format=html&hide_last_page=true&isbn=0399590501&links=660&page=1&review_back=fff&stars=000&text=000%5C",
 *      "__v": 0
 *    }
 *
 */
app.get("/nonfiction/author/:author", function(req, res) {
  Nonfiction.find({ author: req.params.author }).then(book => {
    res.json(book);
  });
});
/**
 * @api {get} /nonfiction/title/:title Get current nonfiction bestseller by title
 * @apiName GetNonfictionByTitle
 * @apiGroup Nonfiction
 *
 * @apiParam {Title} Title Title must be UPPERCASE
 */
app.get("/nonfiction/title/:title", function(req, res) {
  Nonfiction.find({ title: req.params.title }).then(book => {
    res.json(book);
  });
});
/**
 * @api {get} /nonfiction/rank/:rank Get current nonfiction bestseller by bestseller rank
 * @apiName GetNonfictionByRank
 * @apiGroup Nonfiction
 *
 * @apiParam {Rank} Rank Rank must be a number from 1-15
 */
app.get("/nonfiction/rank/:rank", function(req, res) {
  Nonfiction.find({ rank: req.params.rank }).then(book => {
    res.json(book);
  });
});

// ********************  OUR BOOKS ROUTES ************************

/**
 * @api {get} /ourbooks Get user-generated list of best books
 * @apiName GetOurBooks
 * @apiGroup OurBooks
 */
app.get("/ourbooks", function(req, res) {
  OurBook.find({}).then(books => {
    res.json(books);
  });
});
/**
 * @api {get} /ourbooks/author/:author Search user-generated list of best books by author
 * @apiName GetOurBooksByAuthor
 * @apiGroup OurBooks
 *
 * @apiParam {Name} authorName Case-sensitive name of author
 */

app.get("/ourbooks/author/:author", function(req, res) {
  OurBook.find({ author: req.params.author }).then(book => {
    res.json(book);
  });
});
/**
 * @api {get} /ourbooks/title/:title Search user-generated list of best books by title
 * @apiName GetOurBooksByTitle
 * @apiGroup OurBooks
 *
 * @apiParam {Title} Title Title must be UPPERCASE
 */

app.get("/ourbooks/title/:title", function(req, res) {
  OurBook.find({ title: req.params.title }).then(book => {
    res.json(book);
  });
});
/**
 * @api {post} /ourbooks Add a new book to the user-generated list of best books
 * @apiName AddBook
 * @apiGroup OurBooks
 *
 * @apiParam {Title} Title Title must be UPPERCASE
 * @apiParam {Name} authorName Case-sensitive name of author
 *
 * @apiParamExample Example Body:
 *
 * {
 *
 *      "title": "THE HAUNTING OF HILL HOUSE",
 *      "author": "Shirley Jackson"
 *
 * }
 *
 */

app.post("/ourbooks", function(req, res) {
  OurBook.create(req.body).then(book => {
    res.json(book);
  });
});
/**
 * @api {put} /ourbooks/title/:title Edit one of the books from the user-generated list of best books. Include any parameters that need to be edited in the body of the request. You can add or update a book's title, author, description, a url to the book image, or a url to reviews.
 * @apiName EditBook
 * @apiGroup OurBooks
 *
 * @apiParam {title} Title Title of book to be edited must be UPPERCASE
 *
 * @apiParamExample Example Body:
 *
 * {
 *
 *      "title": "THE HAUNTING OF HILL HOUSE",
 *      "author": "Shirley Jackson",
 *      "description": "First published in 1959, Shirley Jackson's The Haunting of Hill House has been hailed as a perfect work of unnerving terror. It is the story of four seekers who arrive at a notoriously unfriendly pile called Hill House"
 *
 * }
 *
 */

app.put("/ourbooks/title/:title", function(req, res) {
  OurBook.findOneAndUpdate({ title: req.params.title }, req.body, {
    new: true
  }).then(book => {
    res.json(book);
  });
});

/**
 * @api {delete} /ourbooks/title/:title Remove one of the books from the user-generated list of best books.
 * @apiName DeleteBook
 * @apiGroup OurBooks
 *
 * @apiParam {title} Title Title of book to be edited must be UPPERCASE
 *
 */

app.delete("/ourbooks/title/:title", function(req, res) {
  OurBook.findOneAndDelete({ title: req.params.title }).then(book => {
    res.json(book);
  });
});

/**
 * @api {delete} /ourbooks Remove ALL of the books from the user-generated list of best books.
 * @apiName DeleteAllBooks
 * @apiGroup OurBooks
 *
 */

app.delete("/ourbooks", function(req, res) {
  OurBook.deleteMany({}).then(books => {
    res.json(books);
  });
});

app.use("/docs", express.static("./docs"));
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`PORT: ${app.get("port")}`);
});
