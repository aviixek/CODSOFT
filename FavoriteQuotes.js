import React from 'react';
import QuoteCard from './QuoteCard';

const FavoriteQuotes = ({ favorites, removeFromFavorites }) => {
  return (
    <div className="favorites-section">
      <h2>Your Favorite Quotes</h2>
      {favorites.length === 0 ? (
        <p>No favorite quotes yet. Add some!</p>
      ) : (
        <div className="favorites-list">
          {favorites.map(quote => (
            <div key={quote.id} className="favorite-item">
              <QuoteCard 
                quote={quote} 
                onToggleFavorite={() => removeFromFavorites(quote.id)}
                isFavorite={true}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteQuotes;