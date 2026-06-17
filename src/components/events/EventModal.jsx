import { useEffect } from "react";
import "../../styles/events.css";

export const EventModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="brochure-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button className="close-btn" onClick={onClose}>
        X
      </button>

      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};
