import React, { useState } from 'react';
import axios from 'axios';
import './SearchBooks.css';

const SearchBooks = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const searchBooks = async () => {
    try {
      const response = await axios.get(`https://api.example.com/books?q=${query}`);
      setBooks(response.data);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button onClick={searchBooks} className="search-button">Search</button>
      <div className="books-container">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.coverImageUrl} alt={book.title} className="book-cover" />
            <div className="book-details">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">By {book.author}</p>
              <p className="book-published">Published: {book.publishedDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBooks;

