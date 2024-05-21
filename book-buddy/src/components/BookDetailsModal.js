import React, { useState } from 'react';
import axios from 'axios';

const BookDetailsModal = ({ book, onClose }) => {
  const [currentPage, setCurrentPage] = useState(book.currentPage || 0);

  const handleStatusChange = async (status) => {
    try {
      await axios.put(`/api/book/${book._id}`, { status });
      alert('Status updated successfully!');
    } catch (error) {
      console.error('Error updating status', error);
    }
  };

  const handlePageUpdate = async () => {
    try {
      await axios.put(`/api/book/status/${book._id}`, { currentPage });
      alert('Page updated successfully!');
    } catch (error) {
      console.error('Error updating page', error);
    }
  };

  return (
    <div className="modal">
      <button onClick={onClose}>Close</button>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <img src={book.image} alt={book.title} />
      <p>Status: {book.status}</p>
      <select onChange={(e) => handleStatusChange(e.target.value)} value={book.status}>
        <option value="to_read">To Read</option>
        <option value="reading">Reading</option>
        <option value="finished">Finished</option>
      </select>
      {book.status === 'reading' && (
        <div>
          <input
            type="number"
            value={currentPage}
            onChange={(e) => setCurrentPage(e.target.value)}
          />
          <button onClick={handlePageUpdate}>Update Page</button>
        </div>
      )}
    </div>
  );
};

export default BookDetailsModal;
