import { Types } from "mongoose";

export type TUsers = {
  _id: Types.ObjectId;
  email: string;
  password: string;
  role: string;
};
