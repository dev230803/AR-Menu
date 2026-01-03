import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { dishes } from "../menuData";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import "../App.css";
import "@google/model-viewer";
import { launchAR } from "../ar/arLauncher";
Chart.register(ArcElement, Tooltip, Legend);

const DishDetail = () => {
  const { dishId } = useParams();
  const dish = dishes.find((d) => d.id === dishId);
  if (!dish) return <div>Dish not found</div>;
  const nutrition = dish.nutrition;
  const data = {
    labels: ["Protein", "Carbs", "Fat"],
    datasets: [
      {
        data: [nutrition.protein, nutrition.carbs, nutrition.fat],
        backgroundColor: ["#4caf50", "#2196f3", "#ff9800"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="menu-card" style={{ position: "relative", paddingTop: 24 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 18,
        }}
      >
        <h2
          className="menu-title"
          style={{ margin: 0, textAlign: "center", fontSize: "1.5rem" }}
        >
          {dish.name}
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <div
          className="dish-description"
          style={{ textAlign: "center", fontSize: "1.1rem", marginBottom: 4 }}
        >
          {dish.description}
        </div>
        <div
          className="dish-price-detail"
          style={{
            fontSize: "1.15rem",
            color: "#b47b2b",
            fontWeight: 600,
            marginBottom: 8,
          }}
        >
          Price: ₹{dish.price.toFixed(2)}
        </div>
        <img
          src={dish.image}
          alt={dish.name}
          style={{
            width: "100%",
            maxWidth: 320,
            borderRadius: 12,
            marginBottom: 16,
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
          }}
        />
        <div
          style={{
            width: "100%",
            maxWidth: 360,
            margin: "16px auto",
            borderRadius: 12,
            overflow: "hidden",
            background: "#f5f5f5",
          }}
        >
          <model-viewer
            src={dish.model}
            ios-src={dish.modelIOS}
            camera-controls
            auto-rotate
            loading="lazy"
            rotation-per-second="30deg"
            shadow-intensity="1"
            exposure="1"
            ar={false} // ⛔ PREVIEW ONLY
            style={{
              width: "100%",
              height: 320,
              background: "#f5f5f5",
            }}
            alt={`3D preview of ${dish.name}`}
          />
        </div>
        <button
          className="ar-btn"
          style={{
            margin: "12px 0 0 0",
            padding: "12px 28px",
            fontSize: 16,
            minWidth: 120,
            display: "block",
            background: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            boxShadow: "0 2px 8px rgba(67,233,123,0.13)",
            fontWeight: 600,
            letterSpacing: 0.5,
            cursor: "pointer",
            transition: "background 0.2s",
            alignSelf: "center",
          }}
          onClick={() => {
            if (!dish.model || !dish.modelIOS) {
              alert("AR model not available for this dish");
              return;
            }
            launchAR({ glb: dish.model, usdz: dish.modelIOS, dishId: dish.id });
          }}
        >
          View in 3D
        </button>
      </div>
      <div
        className="nutrition-section"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>Nutrition</h3>
        <div style={{ maxWidth: 220, width: "100%" }}>
          <Pie data={data} />
        </div>
      </div>
      <div
        style={{
          marginTop: 18,
          textAlign: "center",
          fontSize: "1.08rem",
          color: "#5a4327",
          fontWeight: 500,
          background: "#fff9f3",
          borderRadius: 8,
          padding: "10px 0",
        }}
      >
        Quantity served: {dish.quantity}
      </div>
    </div>
  );
};

export default DishDetail;
