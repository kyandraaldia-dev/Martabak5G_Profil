import React from "react";
import { WHATSAPP_NUMBER } from "../data/products";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="kontak" className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            🥞 Martabak<span>5G</span>
          </a>
          <p className="footer-tagline">Martabak Enak, Langsung Mendarat di Rumah!</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#tentang">Tentang Kami</a></li>
            <li><a href="#kontak">Kontak</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Kontak</h4>
          <ul>
            <li>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                WhatsApp: +{WHATSAPP_NUMBER}
              </a>
            </li>
            <li>
              <a href="https://instagram.com/martabak5g" target="_blank" rel="noreferrer">
                Instagram: @martabak5g
              </a>
            </li>
            <li>Jl. Contoh Alamat No. 5, Kota Kamu</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Martabak5G. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
