import React from 'react';
import { FaShare, FaHeart, FaRegHeart } from 'react-icons/fa';

const QuoteCard = ({ quote, onToggleFavorite, onShare, isFavorite }) => {
  return (
    <div className="quote-card">
      <blockquote>
        <p>{quote.text}</p>
        <footer>— {quote.author}</footer>
      </blockquote>
      <div className="quote-actions">
        <button onClick={onShare} className="share-btn">
          <FaShare /> Share
        </button>
        <button onClick={() => onToggleFavorite(quote.id)} className="favorite-btn">
          {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />} 
          {isFavorite ? ' Favorited' : ' Favorite'}
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;