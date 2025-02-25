const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const authorSchema = new Schema({
  name: String,
  lastName: String,
  nationality: String,
  birthday: Date,
  pictureUrl: String
});
const Author = mongoose.model("Author", authorSchema);
module.exports = Author;
