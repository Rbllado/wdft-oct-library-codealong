// models/Book.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// CREATE SCHEMA
const bookSchema = new Schema(
  {
    title: String,
    description: String,
    // object id that represent Authors
    author: [{type: Schema.Types.ObjectId, ref: 'Author'}],
    rating: Number,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

// CREATE MODEL
const Book = mongoose.model('Book', bookSchema);

// EXPORT
module.exports = Book;
