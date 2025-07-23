import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { categories, dishes } from "../menuData";
import "../App.css";

const Category = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const category = categories.find((c) => c.id === categoryId);
  const [search, setSearch] = useState("");

  if (!category) return <div>Category not found</div>;

  const filteredDishes = dishes.filter(
    (d) =>
      d.category === categoryId &&
      (d.name.toLowerCase().includes(search.trim().toLowerCase()) ||
        d.description.toLowerCase().includes(search.trim().toLowerCase()))
  );

  return (
    <div className="menu-card" style={{ position: "relative" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: 12,
          left: 12,
          background: "#f7e7d3",
          border: "none",
          borderRadius: 8,
          padding: "8px 14px",
          fontWeight: 600,
          color: "#7a5c2e",
          fontSize: 16,
          cursor: "pointer",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        }}
        aria-label="Back"
      >
        ← Back
      </button>
      <h2 className="menu-title" style={{ marginBottom: 12 }}>
        {category.name}
      </h2>
      <input
        type="text"
        placeholder={`Search in ${category.name}...`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px 12px",
          marginBottom: 16,
          borderRadius: 8,
          border: "1.5px solid #e0c9a6",
          fontSize: "1rem",
          outline: "none",
          boxSizing: "border-box",
          background: "#fff9f3",
        }}
      />
      <div className="dishes-list">
        {filteredDishes.length === 0 ? (
          <div style={{ color: "#b47b2b", textAlign: "center", padding: 16 }}>
            No dishes found.
          </div>
        ) : (
          filteredDishes.map((dish, idx) => (
            <div
              key={dish.id}
              className="dish-card"
              onClick={() => navigate(`/dish/${dish.id}`)}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                marginBottom: 0,
                borderBottom:
                  idx !== filteredDishes.length - 1
                    ? "1px solid #e0c9a6"
                    : "none",
                padding: "10px 12px",
              }}
            >
              <img
                src={dish.image}
                alt={dish.name}
                style={{
                  width: 48,
                  height: 48,
                  objectFit: "cover",
                  borderRadius: 8,
                  marginRight: 12,
                }}
              />
              <div className="dish-info" style={{ flex: 1 }}>
                <div className="dish-name">{dish.name}</div>
                <div className="dish-desc">{dish.description}</div>
              </div>
              <div className="dish-price">₹{dish.price.toFixed(2)}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Category;
