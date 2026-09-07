import React from "react";
import { formatRupiah } from "../data/products";
import "./ProductCard.css";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card fade-in">
      <div className="product-image-wrap">
        {product.badge && <span className="badge">{product.badge}</span>}
        <img src={product.image} alt={product.name} className="product-image" />
      </div>

      <div className="product-body">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>

        <div className="product-footer">
          <span className="product-price">{formatRupiah(product.price)}</span>
          <button className="product-add-btn" onClick={() => onAddToCart(product)}>
            + Tambah
          </button>
        </div>
      </div>
    </div>
  );
}
