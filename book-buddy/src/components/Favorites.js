import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookComponent from './BookComponent';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get('/api/favorites');
        setFavorites(response.data);
      } catch (error) {
        console.error('Error fetching favorites', error);
      }
    };
    fetchFavorites();
  }, []);

  return (
    <div>
      {favorites.map((book) => (
        <BookComponent key={book._id} book={book} />
      ))}
    </div>
  );
};

export default Favorites;
