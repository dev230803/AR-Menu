// Sample menu data for the AR menu app

export const categories = [
  { id: "starters", name: "Starters" },
  { id: "main", name: "Main Course" },
  { id: "desserts", name: "Desserts" },
  { id: "beverages", name: "Beverages" },
  { id: "salads", name: "Salads" },
  { id: "soups", name: "Soups" },
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
    bestseller: true,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "grilled-chicken",
    name: "Grilled Chicken",
    category: "main",
    price: 12.99,
    description: "Juicy grilled chicken breast with herbs.",
    nutrition: { protein: 30, carbs: 2, fat: 8 },
    quantity: "1 plate",
    bestseller: true,
    image:
      "https://images.unsplash.com/photo-1516685018646-5499d0a7d42f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "cheesecake",
    name: "Cheesecake",
    category: "desserts",
    price: 6.5,
    description: "Creamy cheesecake with a graham crust.",
    nutrition: { protein: 6, carbs: 28, fat: 18 },
    quantity: "1 slice",
    bestseller: false,
    image:
      "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "caesar-salad",
    name: "Caesar Salad",
    category: "salads",
    price: 7.5,
    description: "Classic Caesar salad with parmesan and croutons.",
    nutrition: { protein: 7, carbs: 12, fat: 10 },
    quantity: "1 bowl",
    bestseller: true,
    image:
      "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "tomato-soup",
    name: "Tomato Soup",
    category: "soups",
    price: 4.5,
    description: "Rich and creamy tomato soup.",
    nutrition: { protein: 2, carbs: 14, fat: 3 },
    quantity: "1 bowl",
    bestseller: false,
    image:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "lemonade",
    name: "Lemonade",
    category: "beverages",
    price: 2.99,
    description: "Freshly squeezed lemonade.",
    nutrition: { protein: 0, carbs: 25, fat: 0 },
    quantity: "1 glass",
    bestseller: false,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "mango-smoothie",
    name: "Mango Smoothie",
    category: "beverages",
    price: 3.99,
    description: "Chilled mango smoothie with yogurt.",
    nutrition: { protein: 4, carbs: 30, fat: 2 },
    quantity: "1 glass",
    bestseller: true,
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "greek-salad",
    name: "Greek Salad",
    category: "salads",
    price: 8.0,
    description: "Salad with feta, olives, cucumber, and tomatoes.",
    nutrition: { protein: 5, carbs: 10, fat: 9 },
    quantity: "1 bowl",
    bestseller: false,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "veg-manchow-soup",
    name: "Veg Manchow Soup",
    category: "soups",
    price: 5.0,
    description: "Spicy Indo-Chinese soup with crispy noodles.",
    nutrition: { protein: 3, carbs: 18, fat: 4 },
    quantity: "1 bowl",
    bestseller: true,
    image:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "brownie",
    name: "Chocolate Brownie",
    category: "desserts",
    price: 5.5,
    description: "Rich chocolate brownie with walnuts.",
    nutrition: { protein: 4, carbs: 32, fat: 15 },
    quantity: "1 piece",
    bestseller: true,
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
  },
];
