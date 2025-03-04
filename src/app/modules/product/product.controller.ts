import { Request, Response } from "express";
import { ProductService } from "./product.service";

const creaeProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await ProductService.createProductIntoDB(productData);
  res.status(200).json({
    success: true,
    message: "Product is created successfully",
    data: result,
  });
};

export const ProductController = {
  creaeProduct,
};
