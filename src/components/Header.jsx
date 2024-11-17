import React from 'react';
import '../style/Header.css';

const Header = ({ searchTerm, setSearchTerm, onSearch }) => {
  console.log('Header rendered with:', { searchTerm }); // Debug
  return (
    <div className="header">
      <span className='logo'>Watch Cinema</span>
      <div className='searchSection'>
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={onSearch}>Search</button>
      </div>
    </div>
  );
};

export default Header;
