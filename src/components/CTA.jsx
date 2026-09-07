import React from "react";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta section">
      <div className="container cta-inner fade-in">
        <h2 className="cta-title">Lagi Ngidam Martabak?</h2>
        <p className="cta-desc">
          Jangan cuma dibayangin. Pesan sekarang dan biarkan Martabak5G
          mendarat di depan rumahmu!
        </p>
        <a href="#menu" className="btn btn-primary cta-btn">
          Pesan Sekarang
        </a>
      </div>
    </section>
  );
}
