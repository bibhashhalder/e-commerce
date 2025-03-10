export type TCategory =
  | "Electronics"
  | "Fashion"
  | "Home & Kitchen"
  | "Beauty & Personal Care"
  | "Automobiles"
  | "Groceries & Food";
export type TProduct = {
  id?: string;
  name: string;
  category: TCategory;
  description: string;
  price: number;
  inStock: boolean;
  images?: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
};
