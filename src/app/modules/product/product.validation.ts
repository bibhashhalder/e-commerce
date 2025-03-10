import { z } from "zod";
const variantValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});
export const inventoryValidationSchema = z.object({
  quantity: z.number({ required_error: "Quantity is required" }).min(0),
  inStock: z.boolean(),
});
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
  variants: z.array(variantValidationSchema),
  inventory: inventoryValidationSchema,
  images: z.string(),
  createdAt: z.string().transform((val) => new Date(val)),
  updatedAt: z.string().transform((val) => new Date(val)),
});

export const ProductValidation = {
  productValidationSchema,
};
