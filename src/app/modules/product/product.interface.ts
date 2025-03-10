export type TCategory =
  | "Electronics"
  | "Fashion"
  | "Home & Kitchen"
  | "Beauty & Personal Care"
  | "Automobiles"
  | "Groceries & Food";
export type TVariants = {
  type: string;
  value: string;
};
export type TInventory = {
  quantity: number;
  inStock: boolean;
};
export type TProduct = {
  id?: string;
  name: string;
  category: TCategory;
  description: string;
  variants: TVariants[];
  inventory: TInventory;
  price: number;
  images?: string;
  createdAt: Date;
  updatedAt: Date;
};
