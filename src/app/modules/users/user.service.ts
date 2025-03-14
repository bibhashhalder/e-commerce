import { UserModel } from "./user.model";
import bcrypt from "bcrypt";
const findUserByEmail = async (email: string) => {
  const result = await UserModel.findOne({ email: email });
  return result;
};
const createUser = async (email: string, password: string, role: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await new UserModel({ email, password: hashedPassword, role });
  return await user.save();
};
export const UserService = {
  findUserByEmail,
  createUser,
};
