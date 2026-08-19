import React, { useRef, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import CardTasteBack from "./CardTasteBack";

const SWIPE_THRESHOLD = 40;

const SwivelDishCard = ({
  dish,
  navigate,
  onView3D,
  swivelState,
  onSwivel,
  onResetSwivel,
}) => {
  const { getQuantity, addItem, increment, decrement } = useCart();
  const qty = getQuantity(dish.id);
  const cardRef = useRef(null);
  const touchStartX = useRef(null);
  const didSwipe = useRef(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && swivelState === 1) {
          onResetSwivel(dish.id);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [swivelState, dish.id, onResetSwivel]);

  const handleSwivel = (e) => {
    if (didSwipe.current) {
      didSwipe.current = false;
      return;
    }
    if (e.target.closest("button, a")) return;
    onSwivel(dish.id);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      didSwipe.current = true;
      onSwivel(dish.id);
    }
    touchStartX.current = null;
  };

  const stopProp = (e) => e.stopPropagation();

  return (
    <div className="v2-swivel-card-clip">
      <div className="v2-swivel-card-wrapper" ref={cardRef}>
        <div className="v2-swivel-card">
          <div
            className="v2-swivel-card-inner"
            style={{ transform: `rotateY(${-swivelState * 180}deg)` }}
            onClick={handleSwivel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            role="button"
            tabIndex={0}
            aria-label={`${dish.name} card, swipe or tap to explore`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSwivel(dish.id);
              }
            }}
          >
            {/* Front — dish details */}
            <div className="v2-swivel-face v2-swivel-face-front">
              <div className="v2-swivel-face-layer">
                <button
                  type="button"
                  className="v2-dish-card-name-btn"
                  onClick={(e) => {
                    stopProp(e);
                    navigate(`/v2/dish/${dish.id}`);
                  }}
                >
                  <span
                    className={
                      dish.veg ? "v2-dish-card-veg" : "v2-dish-card-nonveg"
                    }
                  />
                  {dish.name}
                </button>
                <img
                  className="v2-dish-card-img"
                  src={dish.image}
                  alt={dish.name}
                  draggable={false}
                />
                <div className="v2-dish-card-body">
                  <div className="v2-dish-card-price">₹{dish.price}</div>
                  <div className="v2-dish-card-actions v2-dish-card-actions-stacked">
                    <button
                      type="button"
                      className="v2-btn-3d"
                      onClick={(e) => {
                        stopProp(e);
                        onView3D();
                      }}
                    >
                      View in 3D
                    </button>
                    {qty > 0 ? (
                      <div className="v2-qty-control v2-qty-control-full">
                        <button
                          type="button"
                          className="v2-qty-btn"
                          onClick={(e) => {
                            stopProp(e);
                            decrement(dish.id);
                          }}
                        >
                          −
                        </button>
                        <span className="v2-qty-value">{qty}</span>
                        <button
                          type="button"
                          className="v2-qty-btn"
                          onClick={(e) => {
                            stopProp(e);
                            increment(dish.id);
                          }}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="v2-btn-order"
                        onClick={(e) => {
                          stopProp(e);
                          addItem(dish);
                        }}
                      >
                        Order
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Back — taste profile */}
            <div className="v2-swivel-face v2-swivel-face-taste">
              <div className="v2-swivel-face-layer">
                <CardTasteBack
                  tasteProfile={dish.tasteProfile}
                  dishName={dish.name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwivelDishCard;
