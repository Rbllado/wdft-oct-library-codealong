var express = require('express');
var router = express.Router();

const Book = require('./../models/Book');
const Author = require('./../models/Author');

// GET   /books
router.get('/', function(req, res, next) {
  Book.find()
    .then(allBooksFromDB => {
      res.render('books', { allBooksFromDB });
    })
    .catch(err => console.log(err));
});

// GET /books/add     --RENDERS THE FORM
router.get('/add', (req, res, next) => {
  res.render('book-add');
});

// POST /books/add  -- HANDLES INCOMING DATA
router.post('/add', (req, res, next) => {
  console.log(req.body);

  const { title, author, description, rating } = req.body;

  Book.create({ title, author, description, rating })
    .then(book => {
      res.redirect('/books');
    })
    .catch(err => console.log(err));
});

// Get Books edit
router.get("/edit", (req, res, next) => {

  const {_id} = req.query;
  
  // get the book from db
  Book.findOne({_id })
  .then( (book) => {
    res.render("book-edit", { book });
  })
  .catch( (err) => console.log(err));

});


router.post("/edit", (req, res, next) =>{

  console.log(req.query);
  
  const {_id} = req.query;
  const {title, author, description, rating} = req.body;
  // Update BOOK

  Book.updateOne({_id}, {title, author, description, rating})
  .then( (updateBook) => {
    res.redirect("/books")
  })
  .catch( (err) => console.log(err));
});

router.get("/details/:bookId", (req, res, next) =>{
  const {bookId} = req.params;

  // Get the book and render IT

  Book.findById(bookId)
  .populate("author")
  .then( (oneBook) => {
    res.render("book-details", { oneBook })
  })
  .catch( (err) => console.log(err));
});

module.exports = router;
