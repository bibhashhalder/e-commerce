/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../../config";
import { UserService } from "./user.service";

const JWT_SECRET = config.jwt_secret;
const registerUser = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;
  try {
    const existingUser = await UserService.findUserByEmail(email);
    if (existingUser) {
      res.status(409).send({
        message: "User email is already exists! Try using a new email address",
      });
      return;
    }
    const userRole = role || "user";
    const user = await UserService.createUser(email, password, role);

    res.status(200).send({ message: "User created successfully", user });
  } catch (err) {
    res.status(500).json({ message: "user registration failed", err });
  }
};

export const UserController = {
  registerUser,
};
