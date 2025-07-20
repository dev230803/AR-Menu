// Sample menu data for the AR menu app

export const categories = [
  { id: "starters", name: "Starters" },
  { id: "main", name: "Main Course" },
  { id: "desserts", name: "Desserts" },
];

export const dishes = [
  {
    id: "spring-rolls",
    name: "Spring Rolls",
    category: "starters",
    price: 5.99,
    description: "Crispy rolls stuffed with veggies.",
    nutrition: { protein: 3, carbs: 15, fat: 5 },
    quantity: "4 pieces",
  },
  {
    id: "grilled-chicken",
    name: "Grilled Chicken",
    category: "main",
    price: 12.99,
    description: "Juicy grilled chicken breast with herbs.",
    nutrition: { protein: 30, carbs: 2, fat: 8 },
    quantity: "1 plate",
  },
  {
    id: "cheesecake",
    name: "Cheesecake",
    category: "desserts",
    price: 6.5,
    description: "Creamy cheesecake with a graham crust.",
    nutrition: { protein: 6, carbs: 28, fat: 18 },
    quantity: "1 slice",
  },
];
