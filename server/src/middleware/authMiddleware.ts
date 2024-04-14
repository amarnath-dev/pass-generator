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
    const authorizationHeader =
      req.headers.Authorization || req.headers.authorization;
    if (!authorizationHeader || typeof authorizationHeader !== "string") {
      return res
        .status(401)
        .json({ status: false, message: "User Unauthorized" });
    }
    const token = authorizationHeader.replace("Bearer ", "");
    console.log("This is token -> ", token);

    const user: User = jwtDecode(token);
    const exists = await User.findById(user.userId);
    if (!exists) {
      res
        .status(404)
        .json({ status: false, message: "User not Authenticated" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    next(new Error("Error occured"));
  }
};

export default verifyUser;
