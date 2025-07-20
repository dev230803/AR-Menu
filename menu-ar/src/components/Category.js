import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { categories, dishes } from "../menuData";
import "../App.css";

const Category = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const category = categories.find((c) => c.id === categoryId);
  const filteredDishes = dishes.filter((d) => d.category === categoryId);
  return (
    <div className="container">
      <h2 className="title">{category ? category.name : "Category"}</h2>
      <div className="dishes-list">
        {filteredDishes.map((dish) => (
          <div
            key={dish.id}
            className="dish-card"
            onClick={() => navigate(`/dish/${dish.id}`)}
          >
            <div className="dish-name">{dish.name}</div>
            <div className="dish-price">${dish.price.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
