import React, { useState } from "react";
import { formatRupiah } from "../data/products";
import Checkout from "./Checkout";
import "./Cart.css";

export default function Cart({
  isOpen,
  onClose,
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
  subtotal,
  itemCount,
}) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>

      <aside className="cart-panel">
        <div className="cart-header">
          <h3>Keranjang Belanja {itemCount > 0 && `(${itemCount})`}</h3>
          <button className="cart-close" onClick={onClose} aria-label="Tutup keranjang">
            ✕
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <span className="cart-empty-icon">🛒</span>
              <p>Keranjang kamu masih kosong.</p>
              <p className="cart-empty-sub">Yuk pilih martabak favoritmu!</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />

                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <span className="cart-item-price">{formatRupiah(item.price)}</span>

                  <div className="cart-item-actions">
                    <div className="qty-control">
                      <button onClick={() => onDecrease(item.id)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => onIncrease(item.id)}>+</button>
                    </div>
                    <button className="cart-item-remove" onClick={() => onRemove(item.id)}>
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal-row">
              <span>Subtotal</span>
              <span className="cart-subtotal-value">{formatRupiah(subtotal)}</span>
            </div>
            <button className="btn btn-primary btn-block" onClick={() => setIsCheckoutOpen(true)}>
              Checkout
            </button>
          </div>
        )}
      </aside>

      {isCheckoutOpen && (
        <Checkout
          cartItems={cartItems}
          subtotal={subtotal}
          onClose={() => setIsCheckoutOpen(false)}
        />
      )}
    </>
  );
}
