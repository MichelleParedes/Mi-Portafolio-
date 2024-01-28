import React, { useState } from 'react';
import './App.css';
import SearchBooks from './components/SearchBooks';
import Favorites from './components/Favorites';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Book Search App</h1>
      </header>
      <div className="content">
        <SearchBooks />
        <Favorites />
      </div>
    </div>
  );
}

export default App;
