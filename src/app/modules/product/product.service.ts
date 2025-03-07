import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async (payload: TProduct) => {
  const result = await ProductModel.create(payload);
  return result;
};
const getAllProductFromDB = async (payload: Record<string, unknown>) => {
  const result = await ProductModel.find(payload);
  return result;
};
const getSingleProductFromDB = async (_id: string) => {
  const result = await ProductModel.findById({ _id });
  return result;
};
const updateProductFromDB = async (_id: string, payload: Partial<TProduct>) => {
  const result = await ProductModel.findByIdAndUpdate({ _id }, payload, {
    new: true,
  });
  return result;
};
const deleteProductIntoDb = async (_id: string) => {
  const result = await ProductModel.findByIdAndDelete({ _id });
  return result;
};
export const ProductService = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductIntoDb,
};
