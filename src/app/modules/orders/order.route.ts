import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();
router.post("/create-order", OrderController.createOrder);
router.get("/order", OrderController.getAllOrder);
export const OrderRouter = router;
