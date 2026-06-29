import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useVegFilter } from "../../context/VegFilterContext";
import { useCart } from "../../context/CartContext";
import restaurantData from "../../data/restaurantData";
import CartDrawer from "./CartDrawer";
import ModelViewerModal from "./ModelViewerModal";
import "./V2Styles.css";

const { meta, categories, dishes } = restaurantData;
const BESTSELLER_ID = "bestsellers";

const MenuPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { vegFilter, setVegOnly, setNonVegOnly, clearFilter } = useVegFilter();
  const { totalItems, openCart } = useCart();
  const [search, setSearch] = useState("");
  const [dishFor3D, setDishFor3D] = useState(null);

  const catParam = searchParams.get("cat");
  const activeCategory =
    catParam ||
    (dishes.some((d) => d.bestseller) ? BESTSELLER_ID : categories[0]?.id);

  useEffect(() => {
    if (!catParam) {
      const defaultCat = dishes.some((d) => d.bestseller)
        ? BESTSELLER_ID
        : categories[0]?.id;
      if (defaultCat) {
        setSearchParams({ cat: defaultCat }, { replace: true });
      }
    }
  }, [catParam, setSearchParams]);

  const handleCategoryChange = (catId) => {
    setSearchParams({ cat: catId });
  };

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
      ? [{ id: BESTSELLER_ID, name: "BestSeller" }]
      : []),
    ...categories.filter((cat) =>
      filteredDishes.some((d) => d.category === cat.id)
    ),
  ];

  const categoryDishes =
    activeCategory === BESTSELLER_ID
      ? bestsellers
      : filteredDishes.filter((d) => d.category === activeCategory);

  const activeCategoryName =
    sidebarItems.find((item) => item.id === activeCategory)?.name || "";

  return (
    <div className="v2-page">
      <div className="v2-menu-page">
        <nav className="v2-sidebar">
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
              onClick={() => handleCategoryChange(item.id)}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="v2-menu-main">
          <div className="v2-menu-header">
            <div className="v2-menu-header-top">
              <h1 className="v2-menu-restaurant-name">{meta.name}</h1>
              <button
                className="v2-cart-label-btn"
                aria-label="Cart"
                onClick={openCart}
              >
                Cart
                {totalItems > 0 && (
                  <span className="v2-cart-label-badge">{totalItems}</span>
                )}
              </button>
            </div>
            <input
              type="text"
              className="v2-search-bar"
              placeholder="Search"
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
                Non-veg
              </button>
            </div>
          </div>

          <div className="v2-menu-content">
            {activeCategoryName && (
              <div className="v2-menu-category-title">{activeCategoryName}</div>
            )}

            {categoryDishes.length > 0 ? (
              <div className="v2-dish-grid">
                {categoryDishes.map((dish) => (
                  <DishCard
                    key={dish.id}
                    dish={dish}
                    navigate={navigate}
                    onView3D={() => setDishFor3D(dish)}
                  />
                ))}
              </div>
            ) : (
              <div className="v2-menu-empty">
                No dishes found matching your search.
              </div>
            )}
          </div>
        </div>
      </div>

      <CartDrawer />

      {dishFor3D && (
        <ModelViewerModal dish={dishFor3D} onClose={() => setDishFor3D(null)} />
      )}
    </div>
  );
};

const DishCard = ({ dish, navigate, onView3D }) => {
  const { getQuantity, addItem, increment, decrement } = useCart();
  const qty = getQuantity(dish.id);

  return (
    <div className="v2-dish-card">
      <button
        type="button"
        className="v2-dish-card-name-btn"
        onClick={() => navigate(`/v2/dish/${dish.id}`)}
      >
        <span
          className={dish.veg ? "v2-dish-card-veg" : "v2-dish-card-nonveg"}
        />
        {dish.name}
      </button>
      <img className="v2-dish-card-img" src={dish.image} alt={dish.name} />
      <div className="v2-dish-card-body">
        <div className="v2-dish-card-price">₹{dish.price}</div>
        <div className="v2-dish-card-actions v2-dish-card-actions-stacked">
          <button
            type="button"
            className="v2-btn-3d"
            onClick={onView3D}
          >
            View in 3D
          </button>
          {qty > 0 ? (
            <div className="v2-qty-control v2-qty-control-full">
              <button
                type="button"
                className="v2-qty-btn"
                onClick={() => decrement(dish.id)}
              >
                −
              </button>
              <span className="v2-qty-value">{qty}</span>
              <button
                type="button"
                className="v2-qty-btn"
                onClick={() => increment(dish.id)}
              >
                +
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="v2-btn-order"
              onClick={() => addItem(dish)}
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
