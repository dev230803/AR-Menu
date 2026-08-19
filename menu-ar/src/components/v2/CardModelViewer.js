import React from "react";
import "@google/model-viewer";

const CardModelViewer = ({ dish }) => (
  <div className="v2-card-model-viewer">
    <model-viewer
      src={dish.model}
      ios-src={dish.modelIOS}
      camera-controls
      auto-rotate
      loading="lazy"
      style={{
        width: "100%",
        height: "100%",
        background: "#FDFBF7",
      }}
      alt={`3D model of ${dish.name}`}
      shadow-intensity="0.8"
      exposure="1.1"
    />
  </div>
);

export default CardModelViewer;
