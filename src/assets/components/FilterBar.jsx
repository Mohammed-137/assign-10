import React from "react";
import SearchBar from "./SearchBar";

function FilterBar({ search, setSearch, categories, setSelectedCategory, setSortOption }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      {/* Search /}
      <SearchBar search={search} setSearch={setSearch} />

      {/ Category Filter /}
      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border p-2 rounded w-full md:w-1/4"
      >
        <option value="">All Categories</option>
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>{cat}</option>
        ))}
      </select>

      {/ Sort */}
      <select
        onChange={(e) => setSortOption(e.target.value)}
        className="border p-2 rounded w-full md:w-1/4"
      >
        <option value="">Sort By</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}

export default FilterBar;