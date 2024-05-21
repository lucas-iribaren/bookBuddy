const Book = require('../models/Book');

exports.addBook = async (req, res) => {
  try {
    const book = new Book({ ...req.body, userId: req.user._id });
    await book.save();
    res.status(201).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find({ userId: req.user._id });
    res.send(books);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.id, userId: req.user._id });
    if (!book) return res.status(404).send();
    res.send(book);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateBookStatus = async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.id, userId: req.user._id });
    if (!book) return res.status(404).send();
    book.status = req.body.status;
    await book.save();
    res.send(book);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateBookPage = async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.id, userId: req.user._id });
    if (!book) return res.status(404).send();
    book.currentPage = req.body.currentPage;
    await book.save();
    res.send(book);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.addBookToFavorites = async (req, res) => {
  try {
    const user = req.user;
    user.favorites.push(req.params.id);
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.removeBookFromFavorites = async (req, res) => {
  try {
    const user = req.user;
    user.favorites = user.favorites.filter(fav => fav.toString() !== req.params.id);
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};
