import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import MenuHome from "./components/MenuHome";
import Category from "./components/Category";
import DishDetail from "./components/DishDetail";
import RestaurantLanding from "./components/v2/RestaurantLanding";
import MenuPage from "./components/v2/MenuPage";
import V2DishDetail from "./components/v2/V2DishDetail";
import { VegFilterProvider } from "./context/VegFilterContext";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove("landing-page", "menu-page", "v2-page-body");

    if (location.pathname === "/") {
      document.body.classList.add("landing-page");
    } else if (location.pathname.startsWith("/demo")) {
      document.body.classList.add("menu-page");
    } else if (location.pathname.startsWith("/v2")) {
      document.body.classList.add("v2-page-body");
    }
  }, [location.pathname]);

  return (
    <Routes>
      {/* Original routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/demo" element={<MenuHome />} />
      <Route path="/demo/category/:categoryId" element={<Category />} />
      <Route path="/demo/dish/:dishId" element={<DishDetail />} />

      {/* V2 routes */}
      <Route path="/v2" element={<RestaurantLanding />} />
      <Route path="/v2/menu" element={<MenuPage />} />
      <Route path="/v2/dish/:dishId" element={<V2DishDetail />} />
    </Routes>
  );
}

function App() {
  return (
    <CartProvider>
      <VegFilterProvider>
        <Router>
          <AppContent />
        </Router>
      </VegFilterProvider>
    </CartProvider>
  );
}

export default App;
