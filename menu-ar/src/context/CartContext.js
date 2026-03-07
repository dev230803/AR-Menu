import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

const CartContext = createContext();
const CART_KEY = "v2_cart";
const CART_TTL = 2 * 60 * 60 * 1000; // 2 hours in ms

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const { items, timestamp } = JSON.parse(raw);
    if (Date.now() - timestamp > CART_TTL) {
      localStorage.removeItem(CART_KEY);
      return [];
    }
    return items || [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  localStorage.setItem(
    CART_KEY,
    JSON.stringify({ items, timestamp: Date.now() })
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(loadCart);
  const [isOpen, setIsOpen] = useState(false);

  // Persist on every change
  useEffect(() => {
    saveCart(items);
  }, [items]);

  // Auto-clear check every 60s
  useEffect(() => {
    const interval = setInterval(() => {
      try {
        const raw = localStorage.getItem(CART_KEY);
        if (!raw) return;
        const { timestamp } = JSON.parse(raw);
        if (Date.now() - timestamp > CART_TTL) {
          setItems([]);
          localStorage.removeItem(CART_KEY);
        }
      } catch { /* ignore */ }
    }, 60_000);
    return () => clearInterval(interval);
  }, []);

  const getQuantity = useCallback(
    (dishId) => {
      const found = items.find((i) => i.id === dishId);
      return found ? found.qty : 0;
    },
    [items]
  );

  const addItem = useCallback((dish) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.id === dish.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [
        ...prev,
        {
          id: dish.id,
          name: dish.name,
          price: dish.price,
          image: dish.image,
          veg: dish.veg,
          qty: 1,
        },
      ];
    });
  }, []);

  const increment = useCallback((dishId) => {
    setItems((prev) =>
      prev.map((i) => (i.id === dishId ? { ...i, qty: i.qty + 1 } : i))
    );
  }, []);

  const decrement = useCallback((dishId) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === dishId ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  }, []);

  const removeItem = useCallback((dishId) => {
    setItems((prev) => prev.filter((i) => i.id !== dishId));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    localStorage.removeItem(CART_KEY);
  }, []);

  const totalItems = items.reduce((s, i) => s + i.qty, 0);
  const totalPrice = items.reduce((s, i) => s + i.price * i.qty, 0);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        getQuantity,
        addItem,
        increment,
        decrement,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
