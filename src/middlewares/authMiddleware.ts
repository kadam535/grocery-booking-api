import { Request, Response, NextFunction } from "express";

// Dummy authentication middleware (replace with actual logic)
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Logic for verifying admin/authenticated user goes here.
  // For now, assume all requests are authorized.
  next();
};
