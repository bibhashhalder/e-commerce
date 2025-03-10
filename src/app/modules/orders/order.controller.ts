// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Request, Response } from "express";
// import { OrderValidation } from "./order.validation";
// import { OrcerService } from "./order.service";
// import { ProductModel } from "../product/product.model";

// const createOrder = async (req: Request, res: Response) => {
//   try {
//     const { order: OrderData } = req.body;
//     const zodParser =
//       OrderValidation.orderValidationSchema.safeParse(OrderData);
//     if (
//       typeof zodParser.error !== "undefined" &&
//       zodParser.error.name === "ZodError"
//     ) {
//       const errorList = zodParser.error.issues.map((err) => err.message);
//       return res.status(500).json({
//         success: false,
//         message: "Validation Error",
//         data: errorList,
//       });
//     }
//     if (zodParser.success) {
//       const product = await ProductModel.findById(zodParser.data.productId);
//       if(product&&product.inve)
//     }
//     const result = await OrcerService.createOrderIntoDB(zodParser);
//     res.status(200).json({
//       success: true,
//       message: "Order is created successfully",
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message || "Some thing went wrong",
//       error: err,
//     });
//   }
// };

// export const OrderController = {
//   createOrder,
// };
