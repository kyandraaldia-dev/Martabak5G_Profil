import React, { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { CATEGORIES } from "../data/products";
import "./MenuSection.css";

export default function MenuSection({
  id,
  tag,
  title,
  description,
  products,
  onAddToCart,
  showFilters = false,
  showSearch = false,
}) {
  const [activeCategory, setActiveCategory] = useState("semua");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        !showFilters || activeCategory === "semua" || product.category === activeCategory;
      const matchesSearch =
        !showSearch ||
        product.name.toLowerCase().includes(searchTerm.trim().toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, searchTerm, showFilters, showSearch]);

  return (
    <section id={id} className="menu-section section">
      <div className="container">
        <div className="section-header">
          {tag && <span className="section-tag">{tag}</span>}
          <h2 className="section-title">{title}</h2>
          {description && <p className="section-desc">{description}</p>}
        </div>

        {(showFilters || showSearch) && (
          <div className="menu-toolbar">
            {showSearch && (
              <div className="menu-search">
                <span className="menu-search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Cari menu martabak..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            )}

            {showFilters && (
              <div className="menu-filters">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    className={`filter-chip ${activeCategory === cat.id ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {filteredProducts.length > 0 ? (
          <div className="menu-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        ) : (
          <div className="menu-empty">
            <p>Menu tidak ditemukan. Coba kata kunci atau kategori lain ya.</p>
          </div>
        )}
      </div>
    </section>
  );
}
