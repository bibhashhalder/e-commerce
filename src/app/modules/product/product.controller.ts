import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { ProductValidation } from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: ProcuctData } = req.body;
    const zodParseData =
      ProductValidation.productValidationSchema.parse(ProcuctData);
    const result = await ProductService.createProductIntoDB(zodParseData);
    res.status(200).json({
      success: true,
      message: "Product is created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductFromDB(req.query);
    res.status(200).json({
      success: true,
      message: "Product faced successful",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};
const getSingleProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const result = await ProductService.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Product faced successful",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};
const updateProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const product = req.body;
  try {
    const result = await ProductService.updateProductFromDB(productId, product);
    res.status(200).json({
      success: true,
      message: "Product update successful",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const result = await ProductService.deleteProductIntoDb(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successful",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};
export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
