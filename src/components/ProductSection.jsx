import React, { useEffect, useState } from 'react';
import productsData from '../assets/data/dummy_products_50.json';
import Filters from './Filters';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';

const ProductSection = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ shape: [], gender: [] });
  const [products, setProducts] = useState(productsData);

  const handleFilterChange = (type, value) => {
    setFilters((prev) => {
      const current = prev[type];
      return {
        ...prev,
        [type]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  };

  useEffect(() => {
    let filtered = [...productsData];

    if (search) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filters.shape.length > 0) {
      filtered = filtered.filter((p) => filters.shape.includes(p.shape));
    }

    if (filters.gender.length > 0) {
      filtered = filtered.filter((p) => filters.gender.includes(p.gender));
    }

    setProducts(filtered);
  }, [search, filters]);

  return (
    <div className="flex">
      <aside className="w-1/4 p-4 border-r">
        <SearchBar onSearch={setSearch} />
        <Filters filters={filters} onFilterChange={handleFilterChange} />
      </aside>
      <main className="w-3/4 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {products.length === 0 && <p>No products found.</p>}
      </main>
    </div>
  );
};

export default ProductSection;
