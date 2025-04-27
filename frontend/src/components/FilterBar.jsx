import React from 'react';

function FilterBar({ searchTerm, setSearchTerm, category, setCategory }) {
  return (
    <div className="mb-4 flex gap-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by title or keyword"
        className="p-2 border rounded"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Categories</option>
        <option value="sport">Sport</option>
        <option value="food">Food</option>
        <option value="study">Study</option>
        <option value="travel">Travel</option>
        <option value="fashion">Fashion</option>
      </select>
    </div>
  );
}

export default FilterBar;
