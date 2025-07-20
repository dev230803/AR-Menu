import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuHome from "./components/MenuHome";
import Category from "./components/Category";
import DishDetail from "./components/DishDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuHome />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/dish/:dishId" element={<DishDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
