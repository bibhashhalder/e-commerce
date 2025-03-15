/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../../config";
import { UserService } from "./user.service";

const JWT_SECRET = config.jwt_secret as string;
const registerUser = async (req: Request, res: Response): Promise<void> => {
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
const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await UserService.findUserByEmail(email);
    if (!user) {
      res.status(400).send({ message: "Invalid email or password" });
      return;
    }
    const isValidPassword = await UserService.validatePassword(
      password,
      user.password,
    );
    if (!isValidPassword) {
      res.status(200).send({ message: "Invalid password" });
      return;
    }
    const token = jwt.sign({ email: user.email, role: user.role }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).send({ message: "User logged in successfully", token });
  } catch (err) {
    res.status(500).json({ message: "user registration failed", err });
  }
};

export const UserController = {
  registerUser,
  loginUser,
};
