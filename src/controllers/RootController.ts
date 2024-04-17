import { type Request, type Response } from "express";
export const rootController = (req: Request, res: Response) => {
  res.send("bugaga!");
};
