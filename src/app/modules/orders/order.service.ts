import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIntoDB = async (payload: TOrder) => {
  const result = await OrderModel.create(payload);
  return result;
};
const getAllOrdersFromDB = async (query: string | undefined) => {
  const filter = query ? { email: query } : {};
  return await OrderModel.find(filter);
};

export const OrcerService = {
  createOrderIntoDB,
  getAllOrdersFromDB,
};
