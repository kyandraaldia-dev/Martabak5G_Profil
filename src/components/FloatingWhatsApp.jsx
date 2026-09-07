import React from "react";
import { WHATSAPP_NUMBER } from "../data/products";
import "./FloatingWhatsApp.css";

export default function FloatingWhatsApp() {
  const message = encodeURIComponent("Halo Martabak5G, saya mau tanya-tanya menu dulu boleh?");

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp"
      aria-label="Chat WhatsApp"
    >
      💬
    </a>
  );
}
