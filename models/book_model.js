//Dependencies
const mongoose = require('mongoose');
const { Schema } = mongoose;

//Book Schema
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String,
})

//Book Model and Export
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;