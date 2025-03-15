import { Router } from "express";
import { ProductController } from "./product.controller";
import { varifyToken } from "../../middleware/authMiddleware";
import { isAdmin } from "../../middleware/adminMiddleware";

const router = Router();
router.post(
  "/create-product",
  varifyToken,
  isAdmin,
  ProductController.createProduct,
);
router.get("/", ProductController.getAllProduct);
router.get("/:productId", ProductController.getSingleProduct);
router.patch(
  "/:productId",
  varifyToken,
  isAdmin,
  ProductController.updateProduct,
);
router.delete(
  "/:productId",
  varifyToken,
  isAdmin,
  ProductController.deleteProduct,
);
export const ProductRoute = router;
