import { model, Schema } from "mongoose";
import {
  TCategory,
  TInventory,
  TProduct,
  TVariants,
} from "./product.interface";
const categorySchema: TCategory[] = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty & Personal Care",
  "Automobiles",
  "Groceries & Food",
];
const variantSchema = new Schema<TVariants>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});
const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});
const productSchema = new Schema<TProduct>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: categorySchema,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    variants: {
      type: [variantSchema],
      required: true,
    },
    inventory: {
      type: inventorySchema,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const ProductModel = model<TProduct>("Product", productSchema);
