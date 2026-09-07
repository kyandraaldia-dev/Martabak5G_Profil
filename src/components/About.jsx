import React from "react";
import { ABOUT_IMAGE } from "../data/products";
import "./About.css";

const STATS = [
  { value: "1.000+", label: "Martabak Terjual" },
  { value: "4.9/5", label: "Rating Pelanggan" },
  { value: "30 Menit", label: "Rata-rata Pengantaran" },
];

export default function About() {
  return (
    <section id="tentang" className="about section">
      <div className="container about-inner">
        <div className="about-image-wrap fade-in">
          <img src={ABOUT_IMAGE} alt="Tentang Martabak5G" />
        </div>

        <div className="about-text fade-in delay-1">
          <span className="section-tag">Tentang Kami</span>
          <h2 className="section-title">Tentang Martabak5G</h2>
          <p className="section-desc">
            Martabak5G hadir untuk memberikan pengalaman menikmati martabak
            yang lebih praktis, lezat, dan modern. Kami menggunakan bahan
            berkualitas dan topping melimpah untuk membuat setiap gigitan
            terasa spesial.
          </p>

          <div className="about-stats">
            {STATS.map((stat) => (
              <div key={stat.label} className="about-stat">
                <span className="about-stat-value">{stat.value}</span>
                <span className="about-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
