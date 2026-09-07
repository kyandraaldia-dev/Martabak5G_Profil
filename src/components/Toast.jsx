import React from "react";
import "./Toast.css";

export default function Toast({ message, isVisible }) {
  if (!isVisible) return null;

  return (
    <div className="toast">
      <span className="toast-icon">✅</span>
      {message}
    </div>
  );
}
