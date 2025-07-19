import React, { useState, useEffect } from 'react';
import QuoteCard from './QuoteCard';
import quotes from '../quotes';

const DailyQuote = ({ addToFavorites, favoriteIds }) => {
  const [currentQuote, setCurrentQuote] = useState(null);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const updateQuote = () => {
    const storedQuote = localStorage.getItem('dailyQuote');
    const storedDate = localStorage.getItem('quoteDate');
    const today = new Date().toDateString();

    if (storedQuote && storedDate === today) {
      setCurrentQuote(JSON.parse(storedQuote));
    } else {
      const newQuote = getRandomQuote();
      localStorage.setItem('dailyQuote', JSON.stringify(newQuote));
      localStorage.setItem('quoteDate', today);
      setCurrentQuote(newQuote);
    }
  };

  useEffect(() => {
    updateQuote();
  }, []);

  const handleNewQuote = () => {
    const newQuote = getRandomQuote();
    setCurrentQuote(newQuote);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Quote of the Day',
        text: `"${currentQuote.text}" - ${currentQuote.author}`,
      });
    } else {
      alert(`Share this quote:\n\n"${currentQuote.text}" - ${currentQuote.author}`);
    }
  };

  if (!currentQuote) return <div>Loading...</div>;

  return (
    <div className="daily-quote">
      <QuoteCard
        quote={currentQuote}
        onShare={handleShare}
        onToggleFavorite={() => addToFavorites(currentQuote.id)}
        isFavorite={favoriteIds.includes(currentQuote.id)}
      />
      <button onClick={handleNewQuote} className="new-quote-btn">
        Get New Quote
      </button>
    </div>
  );
};

export default DailyQuote;