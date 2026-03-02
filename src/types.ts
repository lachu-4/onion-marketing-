export enum Category {
  FOOD = "Food",
  COSMETIC = "Cosmetic",
  HERBAL = "Herbal",
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: number; // in grams
  category: Category;
  image: string;
  stock: number;
  benefits: {
    food?: string;
    hair?: string;
    skin?: string;
  };
  rating: number;
  reviews: Review[];
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem extends Product {
  quantity: number;
}
