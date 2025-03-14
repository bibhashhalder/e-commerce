import { model, Schema } from "mongoose";
import { TUsers } from "./users.interface";

const userSchema = new Schema<TUsers>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

export const UserModel = model<TUsers>("User", userSchema);
