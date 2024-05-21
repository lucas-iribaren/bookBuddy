import React from 'react';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';

const Home = () => (
  <div>
    <h1>My Book Collection</h1>
    <BookForm />
    <BookList />
  </div>
);

export default Home;
