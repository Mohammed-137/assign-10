import React, { useEffect, useState } from "react";
import Navbar from "./assets/components/NavBar";
import FilterBar from "./assets/components/FilterBar";
import ProductList from "./assets/components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.in/api/products?limit=20");
        const data = await res.json();

        // The API returns data.products → normalize
        const mapped = data.products.map((p) => ({
          id: p.id,
          name: p.title,        // match with ProductCard.jsx
          price: p.price,
          category: p.category,
          rating: p.rating,
          image: p.image,
        }));

        setProducts(mapped);
        setFiltered(mapped);

        // Extract unique categories
        const allCats = [...new Set(mapped.map((p) => p.category))];
        setCategories(allCats);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

 
  useEffect(() => {
    let updated = [...products];

    // Search
    if (search) {
      updated = updated.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory) {
      updated = updated.filter((p) => p.category === selectedCategory);
    }

    // Sorting
    if (sortOption === "priceLow") {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHigh") {
      updated.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating") {
      updated.sort((a, b) => b.rating - a.rating);
    }

    setFiltered(updated);
  }, [search, selectedCategory, sortOption, products]);

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
    // Later: Save to cart state / localStorage
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <FilterBar
          search={search}
          setSearch={setSearch}
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          setSortOption={setSortOption}
        />
        <ProductList products={filtered} onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
}

export default App;