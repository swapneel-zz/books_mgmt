const Book = require('../models/book.model.js');

exports.create = (req, res) => {
    
    const Book = new Book({
        author: req.body.author,
        title: req.body.title,
        ISBN: req.body.ISBN,
        release_date: req.body.release_date
    });

    Book.save()
    .then(data => {
        return data
    }).catch(err => {
        return res.status(500).send({
            message: "Error "
        });
    });
};

exports.findOne = (req, res) => {
    Book.findById(req.params.bookId)
    .then(book => {
        return book
    }).catch(err => {
        return res.status(500).send({
            message: "no ID found "
        });
    });
};

exports.findAll = (req, res) => {
    Book.find()
    .then(book => {
        return book
    }).catch(err => {
        return res.status(500).send({
            message: "no ID found "
        });
    });
};



exports.update = (req, res) => {
    Book.findByIdAndUpdate(req.params.bookId, {
        author: req.body.author,
        title: req.body.title,
        ISBN: req.body.ISBN,
        release_date: req.body.release_date
    }, {new: true})
    .then(book => {
        return book
    }).catch(err => {
        return res.status(500).send({
            message: "Error updating book"
        });
    });
};

exports.delete = (req, res) => {
    Book.findByIdAndRemove(req.params.bookId)
    .then(book => {
        return book
    }).catch(err => {       
        return res.status(500).send({
            message: "Error deleting book "
        });
    });
};
