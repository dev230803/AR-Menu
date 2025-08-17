import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { categories, dishes } from "../menuData";
import { useVegFilter } from "../context/VegFilterContext";
import "../App.css";

// Decorative corner icon - simple geometric pattern
const Icon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.3">
      <circle
        cx="24"
        cy="24"
        r="20"
        fill="none"
        stroke="#e0c9a6"
        strokeWidth="1"
      />
      <circle
        cx="24"
        cy="24"
        r="12"
        fill="none"
        stroke="#e0c9a6"
        strokeWidth="1"
      />
      <circle cx="24" cy="24" r="4" fill="#e0c9a6" />
    </g>
  </svg>
);

const BESTSELLER_ID = "bestsellers";

const MenuHome = () => {
  const navigate = useNavigate();
  const { vegFilter, setVegOnly, setNonVegOnly, clearFilter } = useVegFilter();
  // Only bestsellers open by default
  const [expanded, setExpanded] = useState([BESTSELLER_ID]);
  const [search, setSearch] = useState("");
  const [showPopup, setShowPopup] = useState(true);

  // Hide popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleCategory = (catId) => {
    setExpanded((prev) =>
      prev.includes(catId)
        ? prev.filter((id) => id !== catId)
        : [...prev, catId]
    );
  };

  // Filter logic
  const searchLower = search.trim().toLowerCase();
  let filteredCategories = categories;
  let filteredDishes = dishes;

  // Apply veg filter
  if (vegFilter !== null) {
    filteredDishes = filteredDishes.filter((dish) => dish.veg === vegFilter);
  }

  if (searchLower) {
    filteredCategories = categories.filter(
      (cat) =>
        cat.name.toLowerCase().includes(searchLower) ||
        filteredDishes.some(
          (dish) =>
            dish.category === cat.id &&
            dish.name.toLowerCase().includes(searchLower)
        )
    );
    filteredDishes = filteredDishes.filter(
      (dish) =>
        dish.name.toLowerCase().includes(searchLower) ||
        categories.find(
          (cat) =>
            cat.id === dish.category &&
            cat.name.toLowerCase().includes(searchLower)
        )
    );
  }

  // Bestsellers logic
  const bestsellers = filteredDishes.filter((d) => d.bestseller);
  const showBestsellers =
    bestsellers.length > 0 &&
    (!searchLower ||
      bestsellers.some((dish) =>
        dish.name.toLowerCase().includes(searchLower)
      ));

  return (
    <div className="menu-card" style={{ position: "relative" }}>
      {/* Accent icons in corners */}
      <div className="menu-icon-corner menu-icon-tl">
        <Icon />
      </div>
      <div className="menu-icon-corner menu-icon-tr">
        <Icon />
      </div>
      <div className="menu-icon-corner menu-icon-bl">
        <Icon />
      </div>
      <div className="menu-icon-corner menu-icon-br">
        <Icon />
      </div>
      <div
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "1.3rem",
          color: "#b47b2b",
          marginBottom: 4,
          letterSpacing: 1,
        }}
      >
        The Gourmet House
      </div>
      <h1 className="menu-title">Menu</h1>

      {/* Veg Filter Buttons */}
      <div
        style={{
          display: "flex",
          gap: 8,
          marginBottom: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={setVegOnly}
          style={{
            padding: "8px 16px",
            borderRadius: 8,
            border:
              vegFilter === true ? "2px solid #4caf50" : "2px solid #e0c9a6",
            background: vegFilter === true ? "#4caf50" : "transparent",
            color: vegFilter === true ? "#fff" : "#b47b2b",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          Veg Only
        </button>
        <button
          onClick={setNonVegOnly}
          style={{
            padding: "8px 16px",
            borderRadius: 8,
            border:
              vegFilter === false ? "2px solid #ff6b6b" : "2px solid #e0c9a6",
            background: vegFilter === false ? "#ff6b6b" : "transparent",
            color: vegFilter === false ? "#fff" : "#b47b2b",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          Non-Veg Only
        </button>
        {vegFilter !== null && (
          <button
            onClick={clearFilter}
            style={{
              padding: "8px 12px",
              borderRadius: 8,
              border: "2px solid #e0c9a6",
              background: "transparent",
              color: "#b47b2b",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
              minWidth: 40,
            }}
            aria-label="Clear filter"
          >
            ×
          </button>
        )}
      </div>

      <input
        type="text"
        placeholder="Search by dish or category..."
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
      {/* Bestsellers Section */}
      {showBestsellers && (
        <div className="accordion" key={BESTSELLER_ID}>
          <div
            className="accordion-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              background: "#ffe7b3",
            }}
            onClick={() => toggleCategory(BESTSELLER_ID)}
          >
            <span style={{ flex: 1, fontWeight: 700, color: "#b47b2b" }}>
              Bestsellers ⭐
            </span>
            <span
              style={{
                marginLeft: 12,
                fontSize: 18,
                cursor: "pointer",
                userSelect: "none",
              }}
              onClick={(e) => {
                e.stopPropagation();
                toggleCategory(BESTSELLER_ID);
              }}
              aria-label={
                expanded.includes(BESTSELLER_ID) ? "Collapse" : "Expand"
              }
            >
              {expanded.includes(BESTSELLER_ID) ? "▲" : "▼"}
            </span>
          </div>
          {expanded.includes(BESTSELLER_ID) && (
            <div className="accordion-content">
              {bestsellers.filter(
                (dish) =>
                  !searchLower || dish.name.toLowerCase().includes(searchLower)
              ).length === 0 ? (
                <div
                  style={{ color: "#b47b2b", textAlign: "center", padding: 8 }}
                >
                  No bestsellers found.
                </div>
              ) : (
                bestsellers
                  .filter(
                    (dish) =>
                      !searchLower ||
                      dish.name.toLowerCase().includes(searchLower)
                  )
                  .map((dish, index) => (
                    <div
                      className="dish-list-item"
                      key={dish.id}
                      onClick={() => navigate(`/demo/dish/${dish.id}`)}
                      style={{ alignItems: "center", position: "relative" }}
                    >
                      {showPopup && index === 0 && (
                        <div
                          style={{
                            position: "absolute",
                            top: "-40px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            background: "#4caf50",
                            color: "white",
                            padding: "8px 12px",
                            borderRadius: "6px",
                            fontSize: "12px",
                            fontWeight: "600",
                            zIndex: 10,
                            whiteSpace: "nowrap",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                          }}
                        >
                          Click on a dish to view it in 3D
                        </div>
                      )}
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
                      <div className="dish-info">
                        <div className="dish-name">{dish.name}</div>
                        <div className="dish-desc">{dish.description}</div>
                      </div>
                      <div className="dish-price">₹{dish.price.toFixed(2)}</div>
                    </div>
                  ))
              )}
            </div>
          )}
        </div>
      )}
      {/* Category Accordions */}
      {filteredCategories.length === 0 ? (
        <div style={{ textAlign: "center", color: "#b47b2b", marginTop: 24 }}>
          No results found.
        </div>
      ) : (
        filteredCategories.map((cat) => (
          <div className="accordion" key={cat.id}>
            <div
              className="accordion-header"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => navigate(`/demo/category/${cat.id}`)}
            >
              <span style={{ flex: 1 }}>{cat.name}</span>
              <span
                style={{
                  marginLeft: 12,
                  fontSize: 18,
                  cursor: "pointer",
                  userSelect: "none",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleCategory(cat.id);
                }}
                aria-label={expanded.includes(cat.id) ? "Collapse" : "Expand"}
              >
                {expanded.includes(cat.id) ? "▲" : "▼"}
              </span>
            </div>
            {expanded.includes(cat.id) && (
              <div className="accordion-content">
                {filteredDishes.filter((d) => d.category === cat.id).length ===
                0 ? (
                  <div
                    style={{
                      color: "#b47b2b",
                      textAlign: "center",
                      padding: 8,
                    }}
                  >
                    No dishes found.
                  </div>
                ) : (
                  filteredDishes
                    .filter((d) => d.category === cat.id)
                    .map((dish) => (
                      <div
                        className="dish-list-item"
                        key={dish.id}
                        onClick={() => navigate(`/demo/dish/${dish.id}`)}
                        style={{ alignItems: "center" }}
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
                        <div className="dish-info">
                          <div className="dish-name">{dish.name}</div>
                          <div className="dish-desc">{dish.description}</div>
                        </div>
                        <div className="dish-price">
                          ₹{dish.price.toFixed(2)}
                        </div>
                      </div>
                    ))
                )}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default MenuHome;
