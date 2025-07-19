import React from 'react';

const Header = () => {
  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  return (
    <header className="app-header">
      <h1>Quote of the Day</h1>
      <p className="date">{dateString}</p>
    </header>
  );
};

export default Header;