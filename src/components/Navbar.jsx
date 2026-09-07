import React, { useEffect, useState } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar({ cartCount, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsMobileOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo" onClick={() => handleLinkClick("#home")}>
          <span className="logo-icon">🥞</span>
          Martabak<span className="logo-highlight">5G</span>
        </a>

        <nav className={`navbar-links ${isMobileOpen ? "navbar-links-open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar-link ${activeLink === link.href ? "active" : ""}`}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            className="btn btn-primary navbar-cart-btn"
            onClick={() => {
              onOpenCart();
              setIsMobileOpen(false);
            }}
          >
            🛒 Keranjang
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>

          <button
            className={`navbar-hamburger ${isMobileOpen ? "open" : ""}`}
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label="Buka menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {isMobileOpen && (
          <div className="navbar-overlay" onClick={() => setIsMobileOpen(false)}></div>
        )}
      </div>
    </header>
  );
}
