"use client"
import { useEffect } from "react";

export default function Notifier({ success, msg, onClose }) {
  useEffect(() => {
    if (success !== null && msg) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success, msg, onClose]);

  if (success === null || !msg) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-4 right-4 px-6 py-4 rounded-lg shadow-lg text-white max-w-sm  z-50 ${
        success ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium">{msg}</p>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 text-xl font-bold leading-none"
        >
          ×
        </button>
      </div>
    </div>
  );
}
