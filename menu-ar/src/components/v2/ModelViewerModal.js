import React from "react";
import "@google/model-viewer";
import "./V2Styles.css";

const ModelViewerModal = ({ dish, onClose }) => {
  if (!dish) return null;

  return (
    <div className="v2-modal-overlay" onClick={onClose}>
      <div className="v2-modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="v2-modal-close"
          onClick={onClose}
          aria-label="Close 3D viewer"
        >
          ✕
        </button>
        <model-viewer
          src={dish.model}
          ios-src={dish.modelIOS}
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          auto-rotate
          style={{
            width: "100%",
            height: "55vw",
            maxWidth: 360,
            maxHeight: 360,
            background: "#FDFBF7",
            borderRadius: 12,
          }}
          alt={`3D model of ${dish.name}`}
          shadow-intensity="1"
          exposure="1.1"
        />
        <div className="v2-modal-hint">
          Tap the AR icon to view in your space!
        </div>
      </div>
    </div>
  );
};

export default ModelViewerModal;
