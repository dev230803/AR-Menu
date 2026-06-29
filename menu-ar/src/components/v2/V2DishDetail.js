import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { useCart } from "../../context/CartContext";
import restaurantData from "../../data/restaurantData";
import CartDrawer from "./CartDrawer";
import ModelViewerModal from "./ModelViewerModal";
import "./V2Styles.css";

Chart.register(ArcElement, Tooltip, Legend);

const V2DishDetail = () => {
  const { dishId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [show3D, setShow3D] = useState(false);
  const { getQuantity, addItem, increment, decrement } = useCart();

  const dish = restaurantData.dishes.find((d) => d.id === dishId);

  useEffect(() => {
    if (searchParams.get("view3d") === "true" && dish) {
      setShow3D(true);
    }
  }, [searchParams, dish]);

  if (!dish) {
    return (
      <div className="v2-page">
        <div className="v2-detail-page" style={{ textAlign: "center", paddingTop: 60 }}>
          <p>Dish not found.</p>
          <button className="v2-detail-back" onClick={() => navigate("/v2/menu")}>
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  const nutrition = dish.nutrition;
  const pieData = {
    labels: ["Protein", "Carbs", "Fat"],
    datasets: [
      {
        data: [nutrition.protein, nutrition.carbs, nutrition.fat],
        backgroundColor: ["#4caf50", "#C5A44E", "#e53935"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="v2-page">
      <div className="v2-detail-page">
        <button className="v2-detail-back" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="v2-detail-card">
          <img
            className="v2-detail-img"
            src={dish.bannerImage || dish.image}
            alt={dish.name}
          />
          <div className="v2-detail-body">
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span
                className={dish.veg ? "v2-dish-card-veg" : "v2-dish-card-nonveg"}
              />
              <h2 className="v2-detail-name">{dish.name}</h2>
            </div>
            <p className="v2-detail-desc">{dish.description}</p>
            <div className="v2-detail-price">₹{dish.price}</div>

            <div className="v2-detail-meta">
              <div className="v2-detail-meta-item">
                <strong>Quantity:</strong> {dish.quantity}
              </div>
              {dish.bestseller && (
                <div className="v2-detail-meta-item">
                  <strong>Bestseller</strong>
                </div>
              )}
            </div>

            <div className="v2-detail-nutrition">
              <h3>Nutritional Info</h3>
              <div style={{ maxWidth: 200, margin: "0 auto" }}>
                <Pie data={pieData} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 16,
                  marginTop: 10,
                  fontSize: "0.8rem",
                  color: "var(--v2-text-muted)",
                }}
              >
                <span>Protein: {nutrition.protein}g</span>
                <span>Carbs: {nutrition.carbs}g</span>
                <span>Fat: {nutrition.fat}g</span>
              </div>
            </div>

            <div className="v2-detail-actions">
              <button
                className="v2-detail-btn-3d"
                onClick={() => setShow3D(true)}
              >
                View in 3D
              </button>
              {getQuantity(dish.id) > 0 ? (
                <div className="v2-qty-control" style={{ flex: 1, justifyContent: "center" }}>
                  <button
                    className="v2-qty-btn"
                    style={{ width: 40, height: 36, fontSize: "1.1rem" }}
                    onClick={() => decrement(dish.id)}
                  >
                    −
                  </button>
                  <span className="v2-qty-value" style={{ width: 36, fontSize: "1rem" }}>
                    {getQuantity(dish.id)}
                  </span>
                  <button
                    className="v2-qty-btn"
                    style={{ width: 40, height: 36, fontSize: "1.1rem" }}
                    onClick={() => increment(dish.id)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="v2-detail-btn-order"
                  onClick={() => addItem(dish)}
                >
                  Order
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <CartDrawer />

      {show3D && (
        <ModelViewerModal dish={dish} onClose={() => setShow3D(false)} />
      )}
    </div>
  );
};

export default V2DishDetail;
