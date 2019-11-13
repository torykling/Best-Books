# Best Books API

An API for accessing the current New York Times Bestsellers in fiction and non-fiction

## Installation

Fork and clone this repository. Run npm install to install dependendencies.

## Endpoints

| Endpoint                                                                   | Description                                                                           |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| GET http://localhost:4000/nonfiction                                       | Returns a json list of current nonfiction bestsellers                                 |
| GET http://localhost:4000/nonfiction/title/<INSERT CAPITALIZED TITLE HERE> | Returns the current nonfiction bestseller with the given title                        |
| GET http://localhost:4000/nonfiction/author/<Insert Author Name Here>      | Returns the current nonfiction bestseller with the given author                       |
| GET http://localhost:4000/nonfiction/rank/<Insert Rank Here>               | Returns the current nonfiction bestseller with the given rank                         |
| GET http://localhost:4000/fiction                                          | Returns a json list of current fiction bestsellers                                    |
| GET http://localhost:4000/fiction/title/<INSERT CAPITALIZED TITLE HERE>    | Returns the current fiction bestseller with the given title                           |
| GET http://localhost:4000/fiction/author/<Insert Author Name Here>         | Returns the current fiction bestseller with the given author                          |
| GET http://localhost:4000/fiction/rank/<Insert Rank Here>                  | Returns the current fiction bestseller with the given rank                            |
| GET http://localhost:4000/ourbooks                                         | Returns a json list of best books created and updated by users                        |
| GET http://localhost:4000/ourbooks/title/<INSERT TITLE HERE>               | Returns the book from the user-created best book list with the given title            |
| GET http://localhost:4000/ourbooks/author/<Insert Author Name Here>        | Returns the book from the user-created best book list with the given author           |
| PUT http://localhost:4000/ourbooks/title/<INSERT TITLE HERE>               | Updates the book on the user-created best book list with the contents of the req.body |
| POST http://localhost:4000/ourbooks                                        | Creates a new best book and adds it to the user-generated best book list              |
| DELETE http://localhost:4000/ourbooks/title/<INSERT TITLE HERE>            | Deletes the book with the given title from the user-generated best book list          |
| DELETE http://localhost:4000/ourbooks                                      | Deletes all books from the user-generated book list                                   |

## Example

Sample result from this endpoint: http://localhost:4000/nonfiction/title/EDUCATED

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
