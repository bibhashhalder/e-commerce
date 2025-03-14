import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();
router.post("/create-account", UserController.registerUser);
export const UserRoute = router;
