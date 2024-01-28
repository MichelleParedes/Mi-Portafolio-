import React, { useState } from 'react';
import './Favorites.css';

const Favorites = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  const addToFavorites = (book) => {
    setFavoriteBooks([...favoriteBooks, book]);
  };

  const removeFromFavorites = (bookToRemove) => {
    const updatedFavorites = favoriteBooks.filter((book) => book !== bookToRemove);
    setFavoriteBooks(updatedFavorites);
  };

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      <ul>
        {favoriteBooks.map((book, index) => (
          <li key={index}>
            {book.title}
            <button onClick={() => removeFromFavorites(book)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
