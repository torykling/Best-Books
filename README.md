# Best Books API

An API for accessing the current New York Times Bestsellers in fiction and non-fiction with links to reviews from Goodreads and a user-generated best book list

## Installation

Fork and clone this repository. Run npm install to install dependendencies.

## Endpoints

| Endpoint                                                                                | Description                                                                           |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| GET https://best-books-tkling.herokuapp.com/nonfiction                                  | Returns a json list of current nonfiction bestsellers                                 |
| GET https://best-books-tkling.herokuapp.com/nonfiction/title/<"CAPITALIZED TITLE HERE"> | Returns the current nonfiction bestseller with the given title                        |
| GET https://best-books-tkling.herokuapp.com/nonfiction/author/<"Author Name Here">      | Returns the current nonfiction bestseller with the given author                       |
| GET https://best-books-tkling.herokuapp.com/nonfiction/rank/<"Rank Here">               | Returns the current nonfiction bestseller with the given rank                         |
| GET https://best-books-tkling.herokuapp.com/fiction                                     | Returns a json list of current fiction bestsellers                                    |
| GET https://best-books-tkling.herokuapp.com/fiction/title/<"CAPITALIZED TITLE HERE">    | Returns the current fiction bestseller with the given title                           |
| GET https://best-books-tkling.herokuapp.com/fiction/author/<"Author Name Here">         | Returns the current fiction bestseller with the given author                          |
| GET https://best-books-tkling.herokuapp.com/fiction/rank/<"Rank Here">                  | Returns the current fiction bestseller with the given rank                            |
| GET https://best-books-tkling.herokuapp.com/ourbooks                                    | Returns a json list of best books created and updated by users                        |
| GET https://best-books-tkling.herokuapp.com/ourbooks/title/<"TITLE HERE">               | Returns the book from the user-created best book list with the given title            |
| GET https://best-books-tkling.herokuapp.com/ourbooks/author/<"Author Name Here">        | Returns the book from the user-created best book list with the given author           |
| PUT https://best-books-tkling.herokuapp.com/ourbooks/title/<"TITLE HERE">               | Updates the book on the user-created best book list with the contents of the req.body |
| POST https://best-books-tkling.herokuapp.com/ourbooks                                   | Creates a new best book and adds it to the user-generated best book list              |
| DELETE https://best-books-tkling.herokuapp.com/ourbooks/title/<"TITLE HERE">            | Deletes the book with the given title from the user-generated best book list          |
| DELETE https://best-books-tkling.herokuapp.com/ourbooks                                 | Deletes all books from the user-generated book list                                   |

## Example

Sample result from this endpoint: https://best-books-tkling.herokuapp.com/nonfiction/title/EDUCATED

```
[
    {
        "_id": "5dcc51ce52b3ef66ff7754c9",
        "title": "EDUCATED",
        "author": "Tara Westover",
        "isbn": "0399590501",
        "bookImage": "https://s1.nyt.com/du/books/images/9780399590504.jpg",
        "description": "The daughter of survivalists, who is kept out of school, educates herself enough to leave home for university.",
        "rank": 9,
        "reviews": "https://www.goodreads.com/api/reviews_widget_iframe?did=0&format=html&hide_last_page=true&isbn=0399590501&links=660&page=1&review_back=fff&stars=000&text=000%5C",
        "__v": 0
    }
]
```

## Technologies Used

- Mongoose
- Express
- Axios
- Goodreads API
- New York Times Books API

## Contribute

- source code: https://github.com/torykling/Best-Books
- issues: https://github.com/torykling/Best-Books/issues
