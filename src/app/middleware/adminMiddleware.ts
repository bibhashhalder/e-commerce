/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";

export const isAdmin = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const userRole = (req as any).decoded.role;
  if (userRole !== "admin") {
    res.status(403).json({
      success: false,
      message: "you are not authoriged to perform the action",
    });
    return;
  }
  next();
};
