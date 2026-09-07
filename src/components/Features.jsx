import React from "react";
import "./Features.css";

const FEATURES = [
  { icon: "🥞", title: "Adonan Premium", desc: "Dibuat dari bahan pilihan untuk tekstur lembut dan gurih." },
  { icon: "🧀", title: "Topping Melimpah", desc: "Setiap gigitan penuh dengan topping favoritmu." },
  { icon: "🔥", title: "Dibuat Fresh", desc: "Digoreng setelah pesanan masuk, selalu hangat." },
  { icon: "🚀", title: "Siap Diantar", desc: "Pengantaran cepat langsung ke depan rumahmu." },
];

export default function Features() {
  return (
    <section className="features section">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">Keunggulan Kami</span>
          <h2 className="section-title">Kenapa Martabak5G?</h2>
        </div>

        <div className="features-grid">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="feature-card fade-in">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
