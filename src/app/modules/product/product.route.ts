import { Router } from "express";
import { ProductController } from "./product.controller";

const router = Router();
router.post("/create-product", ProductController.creaeProduct);
export const ProductRoute = router;
