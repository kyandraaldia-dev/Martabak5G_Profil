import React from "react";
import { HERO_IMAGE } from "../data/products";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text fade-in">
          <span className="hero-eyebrow">Martabak Premium, Rasa Juara</span>
          <h1 className="hero-title">
            Martabak<span className="hero-title-accent">5G</span>
          </h1>
          <p className="hero-subtitle">Martabak Enak, Langsung Mendarat di Rumah!</p>
          <p className="hero-desc">
            Martabak premium dengan topping melimpah, rasa mantap, dan siap
            menemani waktu santai kamu.
          </p>
          <div className="hero-buttons">
            <a href="#menu" className="btn btn-primary">
              Pesan Sekarang
            </a>
            <a href="#menu" className="btn btn-outline">
              Lihat Menu
            </a>
          </div>
        </div>

        <div className="hero-image-wrap fade-in delay-2">
          <div className="hero-blob"></div>
          <img src={HERO_IMAGE} alt="Martabak5G" className="hero-image" />
        </div>
      </div>
    </section>
  );
}
