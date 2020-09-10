const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    author: String,
    title: String,
    ISBN: String,
    release_date: Date
});

module.exports = mongoose.model('Book', BookSchema);