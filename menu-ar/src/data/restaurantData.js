const dishModel = require("../models/apple_plate.glb");
const dishModelIOS = require("../models/apple_plate.usdz");

const restaurantData = {
  meta: {
    name: "The Gourmet House",
    description:
      "An exquisite fine-dining experience blending traditional flavours with modern culinary artistry. Every dish is crafted with passion and the freshest ingredients.",
    location: {
      address: "42, MG Road, Connaught Place",
      city: "New Delhi",
      state: "Delhi",
      pincode: "110001",
      mapUrl: "https://maps.google.com/?q=28.6315,77.2167",
    },
    contactInfo: {
      phone: "+91 98765 43210",
      email: "hello@thegourmethouse.in",
      website: "https://thegourmethouse.in",
      instagram: "@thegourmethouse",
    },
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    ],
    logo: "https://img.icons8.com/external-ddara-lineal-color-ddara/96/external-restaurant-food-and-drink-ddara-lineal-color-ddara.png",
  },

  offers: [
    {
      id: "offer-1",
      name: "Flat 20% Off on Beverages",
      duration: "Valid till 31 Mar 2026",
      image:
        "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&h=300&fit=crop",
      description:
        "Enjoy 20% off on all hot & cold beverages. Perfect for your coffee cravings!",
      tnc: "Cannot be combined with other offers. Valid on dine-in only.",
    },
    {
      id: "offer-2",
      name: "Buy 1 Get 1 Free Desserts",
      duration: "Valid till 15 Apr 2026",
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=300&fit=crop",
      description:
        "Order any dessert and get another one absolutely free. Sweeten your meal!",
      tnc: "Applicable on the lower-priced item. Dine-in only.",
    },
    {
      id: "offer-3",
      name: "Starter Combo @ ₹399",
      duration: "Valid till 30 Apr 2026",
      image:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&h=300&fit=crop",
      description:
        "Get any 3 starters for just ₹399. A steal deal for foodies!",
      tnc: "Select starters only. Not valid on premium starters.",
    },
    {
      id: "offer-4",
      name: "Weekend Brunch Special",
      duration: "Every Sat & Sun",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=300&fit=crop",
      description:
        "Unlimited brunch buffet with live counters every weekend at ₹999 per person.",
      tnc: "Advance reservation recommended. Beverages charged separately.",
    },
  ],

  preferences: {
    template: "premium-gold",
    colorScheme: {
      primary: "#C5A44E",
      secondary: "#F5E6C8",
      background: "#FFFFFF",
      text: "#2D2D2D",
    },
  },

  categories: [
    {
      id: "starters",
      name: "Starters",
      image:
        "https://d1mxd7n691o8sz.cloudfront.net/static/recipe/recipe/2023-12/Vegetable-Spring-Rolls-2-1-906001560ca545c8bc72baf473f230b4_thumbnail_170.jpeg",
    },
    {
      id: "main",
      name: "Main Course",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHE2IFqqmt6YZlOCt7DNR6_peALt9qeoctg&s",
    },
    {
      id: "desserts",
      name: "Desserts",
      image:
        "https://butternutbakeryblog.com/wp-content/uploads/2020/04/cheesecake-slice.jpg",
    },
    {
      id: "beverages",
      name: "Beverages",
      image:
        "https://myfoodstory.com/wp-content/uploads/2022/04/Classic-Cold-Coffee-Cafe-Style-1.jpg",
    },
    {
      id: "salads",
      name: "Salads",
      image:
        "https://www.allrecipes.com/thmb/mXZ0Tulwn3x9_YB_ZbkiTveDYFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg",
    },
    {
      id: "soups",
      name: "Soups",
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/tomato-soup-recipe.jpg",
    },
  ],

  dishes: [
    {
      id: "classic-cold-coffee",
      name: "Classic Cold Coffee",
      category: "beverages",
      price: 270,
      description:
        "Cappuccino enhanced with the delicate and subtle essence of hazelnut",
      nutrition: { protein: 12, carbs: 58, fat: 30 },
      quantity: "750 ml",
      bestseller: true,
      veg: true,
      image:
        "https://myfoodstory.com/wp-content/uploads/2022/04/Classic-Cold-Coffee-Cafe-Style-1.jpg",
      bannerImage:
        "https://myfoodstory.com/wp-content/uploads/2022/04/Classic-Cold-Coffee-Cafe-Style-1.jpg",
      model: require("../models/apple_plate.glb"),
      modelIOS: require("../models/apple_plate.usdz"),
    },
    {
      id: "iced-latte",
      name: "Iced Latte",
      category: "beverages",
      price: 245,
      description:
        "A rich espresso, balanced with milk and a thin layer of foam.",
      nutrition: { protein: 12, carbs: 58, fat: 30 },
      quantity: "750 ml",
      bestseller: false,
      veg: true,
      image:
        "https://b.zmtcdn.com/data/dish_photos/eb2/c12a3adf5a68fc847411c4047919beb2.jpeg?fit=around|130:130&crop=130:130;*,*",
      bannerImage:
        "https://b.zmtcdn.com/data/dish_photos/eb2/c12a3adf5a68fc847411c4047919beb2.jpeg?fit=around|130:130&crop=130:130;*,*",
      model: require("../models/salad_plate2.glb"),
      modelIOS: require("../models/salad_plate2.usdz"),
    },
    {
      id: "cheesecake",
      name: "Cheesecake",
      category: "desserts",
      price: 499,
      description: "Creamy cheesecake with a graham crust.",
      nutrition: { protein: 6, carbs: 28, fat: 18 },
      quantity: "1 slice",
      bestseller: false,
      veg: true,
      image:
        "https://butternutbakeryblog.com/wp-content/uploads/2020/04/cheesecake-slice.jpg",
      bannerImage:
        "https://butternutbakeryblog.com/wp-content/uploads/2020/04/cheesecake-slice.jpg",
      model: dishModel,
      modelIOS: dishModelIOS,
    },
    {
      id: "caesar-salad",
      name: "Caesar Salad",
      category: "salads",
      price: 275,
      description: "Classic Caesar salad with parmesan and croutons.",
      nutrition: { protein: 7, carbs: 12, fat: 10 },
      quantity: "1 bowl",
      bestseller: true,
      veg: false,
      image:
        "https://www.allrecipes.com/thmb/mXZ0Tulwn3x9_YB_ZbkiTveDYFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg",
      bannerImage:
        "https://www.allrecipes.com/thmb/mXZ0Tulwn3x9_YB_ZbkiTveDYFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg",
      model: require("../models/salad_plate2.glb"),
      modelIOS: require("../models/salad_plate2.usdz"),
    },
    {
      id: "tomato-soup",
      name: "Tomato Soup",
      category: "soups",
      price: 149,
      description: "Rich and creamy tomato soup.",
      nutrition: { protein: 2, carbs: 14, fat: 3 },
      quantity: "1 bowl",
      bestseller: false,
      veg: true,
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/tomato-soup-recipe.jpg",
      bannerImage:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/tomato-soup-recipe.jpg",
      model: dishModel,
      modelIOS: dishModelIOS,
    },
    {
      id: "spring-rolls",
      name: "Spring Rolls",
      category: "starters",
      price: 149,
      description: "Crispy rolls stuffed with veggies.",
      nutrition: { protein: 3, carbs: 15, fat: 5 },
      quantity: "4 pieces",
      bestseller: true,
      veg: true,
      image:
        "https://d1mxd7n691o8sz.cloudfront.net/static/recipe/recipe/2023-12/Vegetable-Spring-Rolls-2-1-906001560ca545c8bc72baf473f230b4_thumbnail_170.jpeg",
      bannerImage:
        "https://d1mxd7n691o8sz.cloudfront.net/static/recipe/recipe/2023-12/Vegetable-Spring-Rolls-2-1-906001560ca545c8bc72baf473f230b4_thumbnail_170.jpeg",
      model: require("../models/spring_roll2.glb"),
      modelIOS: require("../models/spring_roll2.usdz"),
    },
    {
      id: "lemonade",
      name: "Lemonade",
      category: "beverages",
      price: 49,
      description: "Freshly squeezed lemonade.",
      nutrition: { protein: 0, carbs: 25, fat: 0 },
      quantity: "1 glass",
      bestseller: false,
      veg: true,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3CxYonC8qV5pNC6NDv66GJu7zocUkRnPCyw&s",
      bannerImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3CxYonC8qV5pNC6NDv66GJu7zocUkRnPCyw&s",
      model: dishModel,
      modelIOS: dishModelIOS,
    },
    {
      id: "mango-smoothie",
      name: "Mango Smoothie",
      category: "beverages",
      price: 249,
      description: "Chilled mango smoothie with yogurt.",
      nutrition: { protein: 4, carbs: 30, fat: 2 },
      quantity: "1 glass",
      bestseller: true,
      veg: true,
      image:
        "https://www.kerryfoodservice.com/cdn/shop/files/DVGMangoSmoothie_015_SmoothieMix_Photoshoot_2024_Recipe_1000x.png?v=1716408442",
      bannerImage:
        "https://www.kerryfoodservice.com/cdn/shop/files/DVGMangoSmoothie_015_SmoothieMix_Photoshoot_2024_Recipe_1000x.png?v=1716408442",
      model: dishModel,
      modelIOS: dishModelIOS,
    },
    {
      id: "greek-salad",
      name: "Greek Salad",
      category: "salads",
      price: 349,
      description: "Salad with feta, olives, cucumber, and tomatoes.",
      nutrition: { protein: 5, carbs: 10, fat: 9 },
      quantity: "1 bowl",
      bestseller: false,
      veg: true,
      image:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/greek_salad_16407_16x9.jpg",
      bannerImage:
        "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/greek_salad_16407_16x9.jpg",
      model: dishModel,
      modelIOS: dishModelIOS,
    },
    {
      id: "veg-manchow-soup",
      name: "Veg Manchow Soup",
      category: "soups",
      price: 149,
      description: "Spicy Indo-Chinese soup with crispy noodles.",
      nutrition: { protein: 3, carbs: 18, fat: 4 },
      quantity: "1 bowl",
      bestseller: true,
      veg: true,
      image:
        "https://i0.wp.com/asthaskitchendilse.wordpress.com/wp-content/uploads/2022/02/wp-1643806181558.jpg?fit=900%2C1200&ssl=1",
      bannerImage:
        "https://i0.wp.com/asthaskitchendilse.wordpress.com/wp-content/uploads/2022/02/wp-1643806181558.jpg?fit=900%2C1200&ssl=1",
      model: dishModel,
      modelIOS: dishModelIOS,
    },
    {
      id: "brownie",
      name: "Chocolate Brownie",
      category: "desserts",
      price: 119,
      description: "Rich chocolate brownie with walnuts.",
      nutrition: { protein: 4, carbs: 32, fat: 15 },
      quantity: "1 piece",
      bestseller: true,
      veg: true,
      image:
        "https://icecreambakery.in/wp-content/uploads/2024/12/Brownie-Recipe-with-Cocoa-Powder.jpg",
      bannerImage:
        "https://icecreambakery.in/wp-content/uploads/2024/12/Brownie-Recipe-with-Cocoa-Powder.jpg",
      model: dishModel,
      modelIOS: dishModelIOS,
    },
    {
      id: "cupcake",
      name: "Vanilla Cupcake",
      category: "desserts",
      price: 129,
      description: "Soft vanilla cupcake topped with buttercream frosting.",
      nutrition: { protein: 3, carbs: 35, fat: 12 },
      quantity: "1 piece",
      bestseller: false,
      veg: true,
      image:
        "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=400&q=80",
      bannerImage:
        "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=400&q=80",
      model: require("../models/cupcake2.glb"),
      modelIOS: require("../models/cupcake2.usdz"),
    },
    {
      id: "sea-salt-mocha",
      name: "Hot Sea Salt Mocha",
      category: "beverages",
      price: 295,
      description: "Mocha with herb-infused sea salt, topped with latte",
      nutrition: { protein: 2, carbs: 91, fat: 7 },
      quantity: "500 ml",
      bestseller: true,
      veg: true,
      image:
        "https://lh3.googleusercontent.com/Xk3v4x1cYc_9mMueBORRv70hiH2cLpwRfA9hVThk7uDDZbRE7uhnXkwq3fHttJoh5EqHLOjkkUeaOdnXPgAT8X5O-PI4t4BD_KMjq-3M",
      bannerImage:
        "https://lh3.googleusercontent.com/Xk3v4x1cYc_9mMueBORRv70hiH2cLpwRfA9hVThk7uDDZbRE7uhnXkwq3fHttJoh5EqHLOjkkUeaOdnXPgAT8X5O-PI4t4BD_KMjq-3M",
      model: require("../models/salad_plate2.glb"),
      modelIOS: require("../models/salad_plate2.usdz"),
    },
    {
      id: "dry-hazelnut-cappuccino",
      name: "Hot Dry Hazelnut Cappuccino",
      category: "beverages",
      price: 300,
      description:
        "Cappuccino enhanced with the delicate and subtle essence of hazelnut",
      nutrition: { protein: 2, carbs: 91, fat: 7 },
      quantity: "500 ml",
      bestseller: false,
      veg: true,
      image:
        "https://cdn.zeptonow.com/production/tr:w-312,ar-4523-4523,pr-true,f-auto,q-80/cms/product_variant/4141ea67-1e91-4b53-99f7-ed0dcea226e9.jpeg",
      bannerImage:
        "https://cdn.zeptonow.com/production/tr:w-312,ar-4523-4523,pr-true,f-auto,q-80/cms/product_variant/4141ea67-1e91-4b53-99f7-ed0dcea226e9.jpeg",
      model: require("../models/salad_plate2.glb"),
      modelIOS: require("../models/salad_plate2.usdz"),
    },
    {
      id: "french-vanilla-latte",
      name: "Hot French Vanilla Latte",
      category: "beverages",
      price: 295,
      description: "A light coffee with flavors of French vanilla.",
      nutrition: { protein: 13, carbs: 62, fat: 25 },
      quantity: "500 ml",
      bestseller: false,
      veg: true,
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&fit=crop",
      bannerImage:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&fit=crop",
      model: require("../models/apple_plate.glb"),
      modelIOS: require("../models/apple_plate.usdz"),
    },
    {
      id: "grilled-chicken",
      name: "Grilled Chicken",
      category: "main",
      price: 349,
      description: "Juicy grilled chicken breast with herbs.",
      nutrition: { protein: 30, carbs: 2, fat: 8 },
      quantity: "1 plate",
      bestseller: false,
      veg: false,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHE2IFqqmt6YZlOCt7DNR6_peALt9qeoctg&s",
      bannerImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHE2IFqqmt6YZlOCt7DNR6_peALt9qeoctg&s",
      model: require("../models/roasted_chicken2.glb"),
      modelIOS: require("../models/roasted_chicken2.usdz"),
    },
  ],
};

export default restaurantData;
