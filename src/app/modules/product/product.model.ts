import { model, Schema } from "mongoose";
import { TCategory, TProduct } from "./product.interface";
const categorySchema: TCategory[] = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty & Personal Care",
  "Automobiles",
  "Groceries & Food",
];
const productSchema = new Schema<TProduct>(
  {
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
    price: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      default: false,
    },
    images: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const ProductModel = model<TProduct>("Product", productSchema);
