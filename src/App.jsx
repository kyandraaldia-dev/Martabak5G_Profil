import React, { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PromoBanner from "./components/PromoBanner";
import MenuSection from "./components/MenuSection";
import Cart from "./components/Cart";
import Features from "./components/Features";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Toast from "./components/Toast";
import { PRODUCTS, MARTABAK_TELUR } from "./data/products";
import "./App.css";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = (message) => {
    setToastMessage(message);
    setIsToastVisible(true);
  };

  useEffect(() => {
    if (!isToastVisible) return;
    const timer = setTimeout(() => setIsToastVisible(false), 2200);
    return () => clearTimeout(timer);
  }, [isToastVisible]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    showToast(`${product.name} ditambahkan ke keranjang`);
  };

  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cartItems]
  );

  const itemCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.qty, 0),
    [cartItems]
  );

  return (
    <div className="app">
      <Navbar cartCount={itemCount} onOpenCart={() => setIsCartOpen(true)} />

      <Hero />
      <PromoBanner />

      <MenuSection
        id="menu"
        tag="Menu Favorit"
        title="Menu Favorit Martabak5G"
        description="Pilih martabak manis favoritmu, dari yang klasik sampai signature premium."
        products={PRODUCTS}
        onAddToCart={handleAddToCart}
        showFilters
        showSearch
      />

      <MenuSection
        id="martabak-telur"
        tag="Untuk Kamu yang Suka Gurih"
        title="Martabak Telur"
        description="Martabak telur gurih dengan isian daging pilihan dan kulit renyah."
        products={MARTABAK_TELUR}
        onAddToCart={handleAddToCart}
      />

      <Features />
      <About />
      <Testimonials />
      <CTA />
      <Footer />

      <FloatingWhatsApp />
      <Toast message={toastMessage} isVisible={isToastVisible} />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onRemove={handleRemove}
        subtotal={subtotal}
        itemCount={itemCount}
      />
    </div>
  );
}
