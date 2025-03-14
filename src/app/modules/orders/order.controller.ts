/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { OrderValidation } from "./order.validation";
import { OrcerService } from "./order.service";
import { ProductModel } from "../product/product.model";

const createOrder = async (req: Request, res: Response) => {
  try {
    const { order: OrderData } = req.body;
    const zodParser =
      OrderValidation.orderValidationSchema.safeParse(OrderData);
    if (
      typeof zodParser.error !== "undefined" &&
      zodParser.error.name === "ZodError"
    ) {
      const errorList = zodParser.error.issues.map((err) => err.message);
      return res.status(500).json({
        success: false,
        message: "Validation Error",
        data: errorList,
      });
    }
    if (zodParser.success) {
      const product = await ProductModel.findById(zodParser.data.productId);
      if (product && product.inventory.quantity < zodParser.data.quantity) {
        return res.status(400).json({
          success: false,
          message: "Insufficient quantity available in the inventory",
        });
      }
      if (product) {
        product.inventory.quantity =
          product.inventory.quantity - zodParser.data.quantity;
        product.inventory.inStock =
          product.inventory.quantity === 0 ? false : true;
      }
      const result = await OrcerService.createOrderIntoDB(zodParser.data);
      await product?.save();
      res.status(200).json({
        success: true,
        message: "Order is created successfully",
        data: result,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Some thing went wrong",
      error: err,
    });
  }
};
const getAllOrder = async (req: Request, res: Response) => {
  const email = req.query.email;
  try {
    const orders = await OrcerService.getAllOrdersFromDB(
      email as string | undefined,
    );
    if (orders.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No orders found for this email",
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "Orders fetched successfully",
      data: orders,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err,
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrder,
};
