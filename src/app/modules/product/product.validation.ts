import { z } from "zod";
const productValidationSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.enum([
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Beauty & Personal Care",
    "Automobiles",
    "Groceries & Food",
  ]),
  description: z.string(),
  price: z.number(),
  inStock: z.boolean(),
  images: z.string(),
  quantity: z.number(),
  createdAt: z.string().transform((val) => new Date(val)),
  updatedAt: z.string().transform((val) => new Date(val)),
});

export const ProductValidation = {
  productValidationSchema,
};
