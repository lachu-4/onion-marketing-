import { Category, Product } from "../types";

export const products: Product[] = [
  {
    id: "onion-powder-100",
    name: "Premium Onion Powder (100g)",
    description: "Finely ground dehydrated onions, perfect for seasoning and instant flavor.",
    price: 150,
    weight: 100,
    category: Category.FOOD,
    image: "https://images.unsplash.com/photo-1618376168161-66d8c35ad2c9?auto=format&fit=crop&q=80&w=800",
    stock: 50,
    benefits: {
      food: "Adds rich savory flavor to any dish without the moisture of fresh onions.",
    },
    rating: 4.5,
    reviews: [
      { id: "r1", userName: "Anjali R.", rating: 5, comment: "Very fresh and aromatic!", date: "2024-02-15" }
    ]
  },
  {
    id: "onion-powder-250",
    name: "Premium Onion Powder (250g)",
    description: "Finely ground dehydrated onions, perfect for seasoning and instant flavor.",
    price: 350,
    weight: 250,
    category: Category.FOOD,
    image: "https://images.unsplash.com/photo-1618376168161-66d8c35ad2c9?auto=format&fit=crop&q=80&w=800",
    stock: 30,
    benefits: {
      food: "Great value pack for home cooks.",
    },
    rating: 4.8,
    reviews: []
  },
  {
    id: "onion-powder-500",
    name: "Premium Onion Powder (500g)",
    description: "Finely ground dehydrated onions, perfect for seasoning and instant flavor.",
    price: 650,
    weight: 500,
    category: Category.FOOD,
    image: "https://images.unsplash.com/photo-1618376168161-66d8c35ad2c9?auto=format&fit=crop&q=80&w=800",
    stock: 20,
    benefits: {
      food: "Bulk pack for restaurants and heavy users.",
    },
    rating: 4.7,
    reviews: []
  },
  {
    id: "onion-paste-250",
    name: "Fresh Onion Paste (250g)",
    description: "Ready-to-use onion paste, saves time in the kitchen.",
    price: 120,
    weight: 250,
    category: Category.FOOD,
    image: "https://images.unsplash.com/photo-1615485242231-da0346863539?auto=format&fit=crop&q=80&w=800",
    stock: 40,
    benefits: {
      food: "Consistent texture for gravies and curries.",
    },
    rating: 4.2,
    reviews: []
  },
  {
    id: "onion-oil-100",
    name: "Pure Onion Seed Oil (100ml)",
    description: "Cold-pressed oil for hair and scalp health.",
    price: 450,
    weight: 100,
    category: Category.COSMETIC,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800",
    stock: 25,
    benefits: {
      hair: "Promotes hair growth and reduces hair fall.",
      skin: "Antimicrobial properties help with scalp health."
    },
    rating: 4.9,
    reviews: [
      { id: "r2", userName: "Suresh K.", rating: 5, comment: "Amazing results for my hair!", date: "2024-01-20" }
    ]
  },
  {
    id: "onion-seed-tea-100",
    name: "Onion Seed Wellness Tea (100g)",
    description: "Antioxidant-rich herbal tea made from roasted onion seeds.",
    price: 280,
    weight: 100,
    category: Category.HERBAL,
    image: "https://images.unsplash.com/photo-1594631252845-29fc45865157?auto=format&fit=crop&q=80&w=800",
    stock: 15,
    benefits: {
      food: "Unique earthy flavor.",
      hair: "Supports overall wellness from within."
    },
    rating: 4.6,
    reviews: []
  }
];
