import React, { useState } from "react";
import { WHATSAPP_NUMBER, formatRupiah } from "../data/products";
import "./Checkout.css";

const PAYMENT_METHODS = [
  { id: "cod", label: "COD" },
  { id: "transfer", label: "Transfer" },
  { id: "qris", label: "QRIS" },
];

export default function Checkout({ cartItems, subtotal, onClose }) {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    address: "",
    note: "",
    payment: "cod",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const isValid = form.name.trim() && form.whatsapp.trim() && form.address.trim();

  const buildWhatsAppMessage = () => {
    const orderLines = cartItems
      .map((item) => `- ${item.name} x${item.qty} (${formatRupiah(item.price * item.qty)})`)
      .join("\n");

    const paymentLabel =
      PAYMENT_METHODS.find((p) => p.id === form.payment)?.label || "COD";

    return (
      `Halo Martabak5G, saya ingin memesan:\n\n` +
      `${orderLines}\n\n` +
      `Total: ${formatRupiah(subtotal)}\n\n` +
      `Nama: ${form.name}\n` +
      `Alamat: ${form.address}\n` +
      `Metode Pembayaran: ${paymentLabel}\n` +
      `Catatan: ${form.note || "-"}`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid || cartItems.length === 0) return;

    setIsSubmitting(true);
    const message = buildWhatsAppMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <div className="checkout-overlay" onClick={onClose}>
      <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
        <div className="checkout-header">
          <h3>Checkout Pesanan</h3>
          <button className="checkout-close" onClick={onClose} aria-label="Tutup checkout">
            ✕
          </button>
        </div>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>
            Nama
            <input
              type="text"
              placeholder="Nama lengkap kamu"
              value={form.name}
              onChange={handleChange("name")}
              required
            />
          </label>

          <label>
            Nomor WhatsApp
            <input
              type="tel"
              placeholder="08xxxxxxxxxx"
              value={form.whatsapp}
              onChange={handleChange("whatsapp")}
              required
            />
          </label>

          <label>
            Alamat
            <textarea
              placeholder="Alamat lengkap pengantaran"
              value={form.address}
              onChange={handleChange("address")}
              rows={3}
              required
            />
          </label>

          <label>
            Catatan Pesanan
            <textarea
              placeholder="Contoh: jangan pedas, tanpa kacang, dll (opsional)"
              value={form.note}
              onChange={handleChange("note")}
              rows={2}
            />
          </label>

          <div className="checkout-payment">
            <span className="checkout-payment-label">Metode Pembayaran</span>
            <div className="checkout-payment-options">
              {PAYMENT_METHODS.map((method) => (
                <button
                  type="button"
                  key={method.id}
                  className={`payment-chip ${form.payment === method.id ? "active" : ""}`}
                  onClick={() => setForm((prev) => ({ ...prev, payment: method.id }))}
                >
                  {method.label}
                </button>
              ))}
            </div>
          </div>

          <div className="checkout-total-row">
            <span>Total Pesanan</span>
            <span className="checkout-total-value">{formatRupiah(subtotal)}</span>
          </div>

          <button type="submit" className="btn btn-primary btn-block" disabled={!isValid || isSubmitting}>
            {isSubmitting ? "Menyiapkan pesanan..." : "Pesan Sekarang via WhatsApp"}
          </button>
        </form>
      </div>
    </div>
  );
}
