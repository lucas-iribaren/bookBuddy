import React, { useState } from 'react';
import axios from 'axios';

const BookForm = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    image: '',
    status: '',
    pages: '',
    category: ''
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/addBook', book);
      alert('Book added successfully!');
    } catch (error) {
      console.error('Error adding book', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} required />
      <input name="author" placeholder="Author" onChange={handleChange} required />
      <input name="image" placeholder="Image URL" onChange={handleChange} required />
      <select name="status" onChange={handleChange} required>
        <option value="">Select Status</option>
        <option value="to_read">To Read</option>
        <option value="reading">Reading</option>
        <option value="finished">Finished</option>
      </select>
      <input name="pages" placeholder="Pages" onChange={handleChange} required />
      <input name="category" placeholder="Category" onChange={handleChange} required />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
