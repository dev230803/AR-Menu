import React from "react";
import { useCart } from "../../context/CartContext";
import "./V2Styles.css";

const CartDrawer = () => {
  const {
    items,
    isOpen,
    closeCart,
    increment,
    decrement,
    removeItem,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="v2-cart-overlay" onClick={closeCart}>
      <div className="v2-cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="v2-cart-header">
          <h2 className="v2-cart-title">Your Cart ({totalItems})</h2>
          <button className="v2-cart-close" onClick={closeCart} aria-label="Close cart">
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="v2-cart-body">
          {items.length === 0 ? (
            <div className="v2-cart-empty">
              <span style={{ fontSize: "2.5rem" }}>🛒</span>
              <p>Your cart is empty</p>
              <p style={{ fontSize: "0.8rem", color: "var(--v2-text-muted)" }}>
                Add dishes from the menu to get started
              </p>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div key={item.id} className="v2-cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="v2-cart-item-img"
                  />
                  <div className="v2-cart-item-info">
                    <div className="v2-cart-item-top">
                      <div>
                        <span
                          className={
                            item.veg
                              ? "v2-dish-card-veg"
                              : "v2-dish-card-nonveg"
                          }
                        />
                        <span className="v2-cart-item-name">{item.name}</span>
                      </div>
                      <button
                        className="v2-cart-item-remove"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                      >
                        ✕
                      </button>
                    </div>
                    <div className="v2-cart-item-bottom">
                      <span className="v2-cart-item-price">
                        ₹{item.price * item.qty}
                      </span>
                      <div className="v2-qty-control">
                        <button
                          className="v2-qty-btn"
                          onClick={() => decrement(item.id)}
                        >
                          −
                        </button>
                        <span className="v2-qty-value">{item.qty}</span>
                        <button
                          className="v2-qty-btn"
                          onClick={() => increment(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <button className="v2-cart-clear" onClick={clearCart}>
                Clear Cart
              </button>
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="v2-cart-footer">
            <div className="v2-cart-total">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
            <button className="v2-cart-checkout">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
