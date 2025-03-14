import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoute } from "./app/modules/product/product.route";
import { OrderRouter } from "./app/modules/orders/order.route";
import { UserRoute } from "./app/modules/users/user.route";
const app: Application = express();
app.use(cors());

app.use(express.json());
app.use("/api/v1", OrderRouter);
app.use("/api/v1", ProductRoute);
app.use("/api/v1/user", UserRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("e-commerce server is running ");
});
export default app;
