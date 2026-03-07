import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import restaurantData from "../../data/restaurantData";
import CartDrawer from "./CartDrawer";
import "./V2Styles.css";

const { meta, offers, categories, dishes } = restaurantData;
const bestsellers = dishes.filter((d) => d.bestseller);

const RestaurantLanding = () => {
  const navigate = useNavigate();
  const { totalItems, openCart } = useCart();
  const [activeOffer, setActiveOffer] = useState(0);

  const nextOffer = useCallback(() => {
    setActiveOffer((prev) => (prev + 1) % offers.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextOffer, 4000);
    return () => clearInterval(timer);
  }, [nextOffer]);

  return (
    <div className="v2-page">
      <div className="v2-landing">
        {/* Header */}
        <div className="v2-landing-header">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <img
                src={meta.logo}
                alt={`${meta.name} logo`}
                className="v2-landing-logo"
              />
              <h1 className="v2-landing-name">{meta.name}</h1>
            </div>
            <div className="v2-cart-btn-wrap">
              <button
                className="v2-cart-btn"
                aria-label="Cart"
                onClick={openCart}
              >
                🛒
              </button>
              {totalItems > 0 && (
                <span className="v2-cart-badge">{totalItems}</span>
              )}
            </div>
          </div>
          <p className="v2-landing-tagline">{meta.description}</p>
        </div>

        {/* Offers Carousel */}
        <div className="v2-offers-section">
          <div className="v2-offers-carousel">
            {offers.map((offer, idx) => (
              <div
                key={offer.id}
                className="v2-offer-slide"
                style={{ display: idx === activeOffer ? "block" : "none" }}
                onClick={() => navigate("/v2/menu")}
              >
                <img src={offer.image} alt={offer.name} />
                <div className="v2-offer-overlay">
                  <p className="v2-offer-title">{offer.name}</p>
                  <p className="v2-offer-duration">{offer.duration}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="v2-carousel-dots">
            {offers.map((_, idx) => (
              <button
                key={idx}
                className={`v2-carousel-dot ${idx === activeOffer ? "active" : ""}`}
                onClick={() => setActiveOffer(idx)}
                aria-label={`Go to offer ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="v2-categories-section">
          <div className="v2-section-title">What are you searching for?</div>
          <div className="v2-category-grid">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="v2-category-card"
                onClick={() => navigate(`/v2/menu?cat=${cat.id}`)}
              >
                <div className="v2-category-img-wrap">
                  <img src={cat.image} alt={cat.name} />
                </div>
                <div className="v2-category-label">{cat.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular / Bestseller Dishes */}
        <div className="v2-popular-section">
          <div className="v2-section-title">Popular Dishes</div>
          <div className="v2-popular-grid">
            {bestsellers.map((dish) => (
              <PopularDishCard key={dish.id} dish={dish} navigate={navigate} />
            ))}
          </div>
        </div>
      </div>

      <CartDrawer />
    </div>
  );
};

const PopularDishCard = ({ dish, navigate }) => {
  const { getQuantity, addItem, increment, decrement } = useCart();
  const qty = getQuantity(dish.id);

  return (
    <div className="v2-popular-card">
      <img
        src={dish.image}
        alt={dish.name}
        onClick={() => navigate(`/v2/dish/${dish.id}`)}
      />
      <div className="v2-popular-card-info">
        <div className="v2-popular-card-name">{dish.name}</div>
        <div className="v2-popular-card-price">₹{dish.price}</div>
      </div>
      <div className="v2-popular-card-actions">
        {qty > 0 ? (
          <div className="v2-popular-qty-wrap">
            <div className="v2-qty-control">
              <button
                className="v2-qty-btn"
                onClick={() => decrement(dish.id)}
              >
                −
              </button>
              <span className="v2-qty-value">{qty}</span>
              <button
                className="v2-qty-btn"
                onClick={() => increment(dish.id)}
              >
                +
              </button>
            </div>
          </div>
        ) : (
          <button
            className="v2-popular-order-btn"
            onClick={() => addItem(dish)}
          >
            Order
          </button>
        )}
      </div>
    </div>
  );
};

export default RestaurantLanding;
