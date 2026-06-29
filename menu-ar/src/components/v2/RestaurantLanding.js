import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import restaurantData from "../../data/restaurantData";
import "./V2Styles.css";

const { meta, offers, categories } = restaurantData;

const RestaurantLanding = () => {
  const navigate = useNavigate();
  const [activeOffer, setActiveOffer] = useState(0);
  const hasOffers = offers.length > 0;

  const nextOffer = useCallback(() => {
    if (!hasOffers) return;
    setActiveOffer((prev) => (prev + 1) % offers.length);
  }, [hasOffers]);

  useEffect(() => {
    if (!hasOffers) return undefined;
    const timer = setInterval(nextOffer, 4000);
    return () => clearInterval(timer);
  }, [nextOffer, hasOffers]);

  return (
    <div className="v2-page">
      <div className="v2-landing">
        <div className="v2-landing-header v2-landing-header-simple">
          <h1 className="v2-landing-name">{meta.name}</h1>
        </div>

        {hasOffers && (
          <div className="v2-offers-section">
            <div className="v2-offers-carousel">
              {offers.map((offer, idx) => (
                <div
                  key={offer.id}
                  className="v2-offer-slide"
                  style={{ display: idx === activeOffer ? "block" : "none" }}
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
                  type="button"
                  className={`v2-carousel-dot ${idx === activeOffer ? "active" : ""}`}
                  onClick={() => setActiveOffer(idx)}
                  aria-label={`Go to offer ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        <div className="v2-categories-section">
          <div className="v2-section-title">What are you searching for?</div>
          <div className="v2-category-grid">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className="v2-category-card"
                onClick={() => navigate(`/v2/menu?cat=${cat.id}`)}
              >
                <div className="v2-category-img-wrap">
                  <img src={cat.image} alt={cat.name} />
                </div>
                <div className="v2-category-label">{cat.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantLanding;
