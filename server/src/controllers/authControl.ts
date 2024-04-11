import { Request, Response } from "express";
import { jwtDecode } from "jwt-decode";
import User from "../models/userModel";
import { IUser } from "../models/userModel";

async function signIn(req: Request, res: Response) {
  try {
    const user: IUser = jwtDecode(req.body.credentials);
    const isExits = await User.findOne({ email: user?.email });
    if (isExits) {
      res.status(200).send({ status: true });
    } else {
      const newUser = new User({
        name: user?.name,
        email: user?.email,
        picture: user?.picture,
      });
      await newUser.save();
      res.status(201).send({ status: true });
    }
  } catch (error) {
    console.log(error);
  }
}

export default { signIn };
