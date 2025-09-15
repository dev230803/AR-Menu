import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories, dishes } from "../menuData";
import { useVegFilter } from "../context/VegFilterContext";

// 3D Cube Icon Component
const CubeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Search Icon Component
const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
    <path
      d="m21 21-4.35-4.35"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MenuHome = () => {
  const navigate = useNavigate();
  const { vegFilter, setVegOnly, setNonVegOnly, clearFilter } = useVegFilter();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("starters");

  // Filter logic
  const searchLower = search.trim().toLowerCase();
  let filteredDishes = dishes;

  // Apply veg filter
  if (vegFilter !== null) {
    filteredDishes = filteredDishes.filter((dish) => dish.veg === vegFilter);
  }

  // Apply search filter
  if (searchLower) {
    filteredDishes = filteredDishes.filter(
      (dish) =>
        dish.name.toLowerCase().includes(searchLower) ||
        dish.description.toLowerCase().includes(searchLower)
    );
  }

  // Get bestsellers
  const bestsellers = filteredDishes.filter((d) => d.bestseller);

  // Get dishes for active category
  const categoryDishes = filteredDishes.filter(
    (d) => d.category === activeCategory
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="pt-8 pb-6">
          {/* Restaurant Name */}
          <div className="text-center mb-2">
            <h1 className="text-2xl font-bold text-white mb-1">
              RestaurantName
            </h1>
            <p className="text-gray-300 text-sm flex items-center justify-center gap-1">
              Explore Our Menu in 3D <span className="text-yellow-400">✨</span>
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4 max-w-3xl mx-auto">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search dishes…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          {/* Veg/Non-Veg Filter Toggle */}
          <div className="flex gap-2 mb-6 justify-center">
            <button
              onClick={setVegOnly}
              className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all ${
                vegFilter === true
                  ? "bg-green-600 text-white"
                  : "bg-gray-800 text-gray-300 border border-gray-700"
              } max-w-[140px]`}
            >
              Veg
            </button>
            <button
              onClick={setNonVegOnly}
              className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all ${
                vegFilter === false
                  ? "bg-red-600 text-white"
                  : "bg-gray-800 text-gray-300 border border-gray-700"
              } max-w-[140px]`}
            >
              Non-Veg
            </button>
            {vegFilter !== null && (
              <button
                onClick={clearFilter}
                className="px-3 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-full text-sm font-medium hover:bg-gray-700 transition-all"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Best Sellers Section */}
        {bestsellers.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-yellow-400 mb-3">
              Best Sellers
            </h2>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 pb-4 min-w-max pl-4 pr-4">
                {bestsellers.map((dish) => (
                  <div
                    key={dish.id}
                    className="w-[320px] h-[340px] flex flex-col justify-between bg-gray-800 border-[1.5px] border-[#d4af37] rounded-2xl p-4 shadow-lg hover:shadow-[0_0_20px_#d4af37] transition-all duration-300 flex-shrink-0"
                  >
                    <div className="relative">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                          {dish.name}
                        </h3>
                        <p className="text-sm text-gray-300 mb-2 line-clamp-2">
                          {dish.description}
                        </p>
                        <div className="text-lg font-bold text-yellow-400">
                          ₹{dish.price}
                        </div>
                      </div>
                      <div className="mt-auto">
                        <button
                          onClick={() => navigate(`/demo/dish/${dish.id}`)}
                          className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg px-4 py-2 text-sm flex items-center justify-center gap-2 transition-all duration-200"
                        >
                          <CubeIcon />
                          View in 3D
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Categories Section */}
        <div className="mb-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide pl-4 pr-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-yellow-600 text-white"
                    : "bg-gray-800 text-gray-300 border border-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Dish List Section */}
        <div className="pb-8">
          {categoryDishes.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-400">No dishes found in this category.</p>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-bold text-yellow-400 mb-3">
                {categories.find((cat) => cat.id === activeCategory)?.name ||
                  "Dishes"}
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {categoryDishes.map((dish) => (
                  <div
                    key={dish.id}
                    className="h-[380px] flex flex-col justify-between bg-gray-800 border-[1.5px] border-[#d4af37] rounded-2xl p-5 shadow-lg hover:shadow-[0_0_24px_#d4af37] transition-all duration-300"
                  >
                    <div className="relative">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                          {dish.name}
                        </h3>
                        <p className="text-sm text-gray-300 mb-2 line-clamp-2">
                          {dish.description}
                        </p>
                        <div className="text-lg font-bold text-yellow-400">
                          ₹{dish.price}
                        </div>
                      </div>
                      <div className="mt-auto">
                        <button
                          onClick={() => navigate(`/demo/dish/${dish.id}`)}
                          className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg px-4 py-2 text-sm flex items-center justify-center gap-2 transition-all duration-200"
                        >
                          <CubeIcon />
                          View in 3D
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuHome;
