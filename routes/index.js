const express = require('express');
const router = express.Router();

const booksRouter = require('./books');
const authorsRouter = require("./author");

// route  /books
router.use('/books', booksRouter);

// route  /books
router.use('/authors', authorsRouter);

//
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
