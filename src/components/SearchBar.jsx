import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      className="w-full p-2 border rounded shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
