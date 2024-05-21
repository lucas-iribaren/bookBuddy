const express = require('express');
const auth = require('../middleware/auth');
const {
  addBook,
  getBooks,
  getBookById,
  updateBookStatus,
  updateBookPage,
  addBookToFavorites,
  removeBookFromFavorites
} = require('../controllers/bookController');

const router = express.Router();

router.post('/addBook', auth, addBook);
router.get('/books', auth, getBooks);
router.get('/book/:id', auth, getBookById);
router.put('/book/:id', auth, updateBookStatus);
router.put('/book/status/:id', auth, updateBookPage);
router.post('/book/:id', auth, addBookToFavorites);
router.delete('/book/:id', auth, removeBookFromFavorites);

module.exports = router;
