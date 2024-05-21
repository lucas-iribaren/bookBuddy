const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
  status: { type: String, required: true, enum: ['to_read', 'reading', 'finished'] },
  pages: { type: Number, required: true },
  category: { type: String, required: true },
  currentPage: { type: Number, default: 0 },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Book', bookSchema);
