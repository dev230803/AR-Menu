import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import MenuHome from "./components/MenuHome";
import Category from "./components/Category";
import DishDetail from "./components/DishDetail";
import { VegFilterProvider } from "./context/VegFilterContext";
import "./App.css";

function App() {
  return (
    <VegFilterProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/demo" element={<MenuHome />} />
          <Route path="/demo/category/:categoryId" element={<Category />} />
          <Route path="/demo/dish/:dishId" element={<DishDetail />} />
        </Routes>
      </Router>
    </VegFilterProvider>
  );
}

export default App;
