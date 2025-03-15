import { UserModel } from "./user.model";
import bcrypt from "bcrypt";
import { TUsers } from "./users.interface";
const findUserByEmail = async (email: string) => {
  const result = await UserModel.findOne({ email: email });
  return result;
};
const createUser = async (
  email: string,
  password: string,
  role: string,
): Promise<TUsers> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await new UserModel({ email, password: hashedPassword, role });
  return await user.save();
};
const validatePassword = async (
  inputPassword: string,
  userPassword: string,
) => {
  return bcrypt.compare(inputPassword, userPassword);
};
export const UserService = {
  findUserByEmail,
  createUser,
  validatePassword,
};
