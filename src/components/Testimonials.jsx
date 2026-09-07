import React from "react";
import "./Testimonials.css";

const TESTIMONIALS = [
  { text: "Martabaknya enak banget, toppingnya banyak!", name: "Andi" },
  { text: "Pesan online gampang dan martabaknya datang masih hangat.", name: "Sinta" },
  { text: "Martabak Premium 5G juara!", name: "Rizky" },
];

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">Testimoni</span>
          <h2 className="section-title">Kata Mereka Tentang Martabak5G</h2>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="testimonial-card fade-in">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"{t.text}"</p>
              <span className="testimonial-name">— {t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
