import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DailyQuote from './components/DailyQuote';
import FavoriteQuotes from './components/FavoriteQuotes';
import quotes from './quotes';
import './App.css';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteQuotes');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
      setFavoriteIds(JSON.parse(storedFavorites).map(q => q.id));
    }
  }, []);

  const addToFavorites = (quoteId) => {
    const quote = quotes.find(q => q.id === quoteId);
    if (!quote) return;

    let newFavorites;
    if (favoriteIds.includes(quoteId)) {
      newFavorites = favorites.filter(q => q.id !== quoteId);
    } else {
      newFavorites = [...favorites, quote];
    }

    setFavorites(newFavorites);
    setFavoriteIds(newFavorites.map(q => q.id));
    localStorage.setItem('favoriteQuotes', JSON.stringify(newFavorites));
  };

  const removeFromFavorites = (quoteId) => {
    const newFavorites = favorites.filter(q => q.id !== quoteId);
    setFavorites(newFavorites);
    setFavoriteIds(newFavorites.map(q => q.id));
    localStorage.setItem('favoriteQuotes', JSON.stringify(newFavorites));
  };

  return (
    <div className="App">
      <Header />
      <main>
        <DailyQuote 
          addToFavorites={addToFavorites} 
          favoriteIds={favoriteIds} 
        />
        <FavoriteQuotes 
          favorites={favorites} 
          removeFromFavorites={removeFromFavorites} 
        />
      </main>
    </div>
  );
}

export default App;