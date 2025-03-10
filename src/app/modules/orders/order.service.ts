import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIntoDB = async (payload: TOrder) => {
  const result = await OrderModel.create(payload);
  return result;
};

export const OrcerService = {
  createOrderIntoDB,
};
