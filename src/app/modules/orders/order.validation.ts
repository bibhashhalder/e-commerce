import { z } from "zod";

const orderValidationSchema = z.object({
  email: z.string({
    required_error: "Email is required",
    invalid_type_error: "Email should be string",
  }),
  productId: z.string({
    required_error: "Product id is required",
    invalid_type_error: "Product id should be string",
  }),
  quantity: z.number({
    required_error: "Quantity is required",
    invalid_type_error: "Quantity should be number",
  }),
  price: z.number({
    required_error: "Price is required",
    invalid_type_error: "Price should be number",
  }),
});

export const OrderValidation = {
  orderValidationSchema,
};
