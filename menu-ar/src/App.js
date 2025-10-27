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
import { VegFilterProvider } from "./context/VegFilterContext";
import "./App.css";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Remove all page classes
    document.body.classList.remove("landing-page", "menu-page");

    // Add appropriate class based on route
    if (location.pathname === "/") {
      document.body.classList.add("landing-page");
    } else if (location.pathname.startsWith("/demo")) {
      document.body.classList.add("menu-page");
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/demo" element={<MenuHome />} />
      <Route path="/demo/category/:categoryId" element={<Category />} />
      <Route path="/demo/dish/:dishId" element={<DishDetail />} />
    </Routes>
  );
}

function App() {
  return (
    <VegFilterProvider>
      <Router>
        <AppContent />
      </Router>
    </VegFilterProvider>
  );
}

export default App;
