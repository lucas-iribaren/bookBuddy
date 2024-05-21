import React from 'react';

const BookComponent = ({ book, onClick }) => (
  <div onClick={() => onClick(book)}>
    <img src={book.image} alt={book.title} />
    <h3>{book.title}</h3>
    <p>{book.author}</p>
  </div>
);

export default BookComponent;
