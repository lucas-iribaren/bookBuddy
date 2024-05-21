import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookComponent from './BookComponent';
import BookDetailsModal from './BookDetailsModal';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books', error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      {books.map((book) => (
        <BookComponent key={book._id} book={book} onClick={setSelectedBook} />
      ))}
      {selectedBook && (
        <BookDetailsModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
};

export default BookList;
