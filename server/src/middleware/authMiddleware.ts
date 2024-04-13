import { Request, Response, NextFunction } from "express";
import { jwtDecode } from "jwt-decode";
import User from "../models/userModel";

interface User {
  userId: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const token = req.cookies.token;
    // console.log("Token -> ", token);
    const token = req.headers.Authorization;
    if (!token) {
      res.status(401).json({ status: false, message: "User Unauthorized" });
    }
    if (token) {
      const user: User = jwtDecode(token as string);
      const exists = await User.findById(user.userId);
      if (!exists) {
        res
          .status(404)
          .json({ status: false, message: "User not Authenticated" });
      }
      req.user = user;
      next();
    }
  } catch (error) {
    console.log(error);
    next(Error("Error occured"));
  }
};

export default verifyUser;
