import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useVegFilter } from "../../context/VegFilterContext";
import { useCart } from "../../context/CartContext";
import restaurantData from "../../data/restaurantData";
import CartDrawer from "./CartDrawer";
import "./V2Styles.css";

const { meta, categories, dishes } = restaurantData;
const BESTSELLER_ID = "bestsellers";

const MenuPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { vegFilter, setVegOnly, setNonVegOnly, clearFilter } = useVegFilter();
  const { totalItems, openCart } = useCart();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get("cat") || BESTSELLER_ID
  );

  const sectionRefs = useRef({});
  const scrollContainerRef = useRef(null);
  const isScrollingFromClick = useRef(false);

  const registerRef = useCallback((id, el) => {
    if (el) sectionRefs.current[id] = el;
  }, []);

  useEffect(() => {
    const catParam = searchParams.get("cat");
    if (catParam && sectionRefs.current[catParam]) {
      setTimeout(() => {
        sectionRefs.current[catParam].scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [searchParams]);

  const handleSidebarClick = (catId) => {
    setActiveCategory(catId);
    isScrollingFromClick.current = true;
    const el = sectionRefs.current[catId];
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        isScrollingFromClick.current = false;
      }, 800);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingFromClick.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.dataset.catId);
            break;
          }
        }
      },
      { threshold: 0.3 }
    );

    const refs = sectionRefs.current;
    Object.values(refs).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      Object.values(refs).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [search, vegFilter]);

  const searchLower = search.trim().toLowerCase();
  let filteredDishes = dishes;

  if (vegFilter !== null) {
    filteredDishes = filteredDishes.filter((d) => d.veg === vegFilter);
  }
  if (searchLower) {
    filteredDishes = filteredDishes.filter(
      (d) =>
        d.name.toLowerCase().includes(searchLower) ||
        d.description.toLowerCase().includes(searchLower)
    );
  }

  const bestsellers = filteredDishes.filter((d) => d.bestseller);

  const sidebarItems = [
    ...(bestsellers.length > 0
      ? [{ id: BESTSELLER_ID, name: "Bestsellers" }]
      : []),
    ...categories.filter((cat) =>
      filteredDishes.some((d) => d.category === cat.id)
    ),
  ];

  return (
    <div className="v2-page">
      <div className="v2-menu-page">
        {/* Sidebar */}
        <nav className="v2-sidebar" ref={scrollContainerRef}>
          <button
            className="v2-sidebar-item"
            onClick={() => navigate("/v2")}
            style={{ color: "var(--v2-gold-dark)", fontWeight: 600 }}
          >
            Offers
          </button>
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              className={`v2-sidebar-item ${activeCategory === item.id ? "active" : ""}`}
              onClick={() => handleSidebarClick(item.id)}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Main */}
        <div className="v2-menu-main">
          {/* Sticky Header */}
          <div className="v2-menu-header">
            <div className="v2-menu-header-top">
              <h1 className="v2-menu-restaurant-name">{meta.name}</h1>
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
            <input
              type="text"
              className="v2-search-bar"
              placeholder="Search dishes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="v2-filter-row">
              <button
                className={`v2-filter-btn ${vegFilter === true ? "active-veg" : ""}`}
                onClick={() =>
                  vegFilter === true ? clearFilter() : setVegOnly()
                }
              >
                Veg
              </button>
              <button
                className={`v2-filter-btn ${vegFilter === false ? "active-nonveg" : ""}`}
                onClick={() =>
                  vegFilter === false ? clearFilter() : setNonVegOnly()
                }
              >
                Non-Veg
              </button>
              {vegFilter !== null && (
                <button
                  className="v2-filter-btn active-clear"
                  onClick={clearFilter}
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Dish Sections */}
          <div className="v2-menu-content">
            {bestsellers.length > 0 && (
              <div
                className="v2-menu-category-section"
                ref={(el) => registerRef(BESTSELLER_ID, el)}
                data-cat-id={BESTSELLER_ID}
              >
                <div className="v2-menu-category-title">Bestsellers</div>
                <div className="v2-dish-grid">
                  {bestsellers.map((dish) => (
                    <DishCard key={dish.id} dish={dish} navigate={navigate} />
                  ))}
                </div>
              </div>
            )}

            {categories.map((cat) => {
              const catDishes = filteredDishes.filter(
                (d) => d.category === cat.id
              );
              if (catDishes.length === 0) return null;
              return (
                <div
                  key={cat.id}
                  className="v2-menu-category-section"
                  ref={(el) => registerRef(cat.id, el)}
                  data-cat-id={cat.id}
                >
                  <div className="v2-menu-category-title">{cat.name}</div>
                  <div className="v2-dish-grid">
                    {catDishes.map((dish) => (
                      <DishCard key={dish.id} dish={dish} navigate={navigate} />
                    ))}
                  </div>
                </div>
              );
            })}

            {filteredDishes.length === 0 && (
              <div
                style={{
                  textAlign: "center",
                  padding: 40,
                  color: "var(--v2-text-muted)",
                }}
              >
                No dishes found matching your search.
              </div>
            )}
          </div>
        </div>
      </div>

      <CartDrawer />
    </div>
  );
};

const DishCard = ({ dish, navigate }) => {
  const { getQuantity, addItem, increment, decrement } = useCart();
  const qty = getQuantity(dish.id);

  return (
    <div
      className="v2-dish-card"
      onClick={() => navigate(`/v2/dish/${dish.id}`)}
    >
      <img className="v2-dish-card-img" src={dish.image} alt={dish.name} />
      <div className="v2-dish-card-body">
        <div style={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
          <span
            className={dish.veg ? "v2-dish-card-veg" : "v2-dish-card-nonveg"}
          />
          <span className="v2-dish-card-name">{dish.name}</span>
        </div>
        <div className="v2-dish-card-price">₹{dish.price}</div>
        <div className="v2-dish-card-actions">
          <button
            className="v2-btn-3d"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/v2/dish/${dish.id}?view3d=true`);
            }}
          >
            View in 3D
          </button>
          {qty > 0 ? (
            <div
              className="v2-qty-control"
              onClick={(e) => e.stopPropagation()}
            >
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
          ) : (
            <button
              className="v2-btn-order"
              onClick={(e) => {
                e.stopPropagation();
                addItem(dish);
              }}
            >
              Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
