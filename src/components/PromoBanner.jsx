import React from "react";
import "./PromoBanner.css";

export default function PromoBanner() {
  return (
    <section className="promo-banner">
      <div className="container promo-inner fade-in">
        <div className="promo-text">
          <span className="promo-fire">🔥</span>
          <div>
            <h3 className="promo-title">PROMO MARTABAK5G</h3>
            <p className="promo-desc">Beli 2 Gratis 1 Minuman</p>
          </div>
        </div>
        <a href="#menu" className="btn promo-btn">
          Ambil Promo
        </a>
      </div>
    </section>
  );
}
