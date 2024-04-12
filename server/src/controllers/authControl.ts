import { Request, Response } from "express";
import { jwtDecode } from "jwt-decode";
import User from "../models/userModel";
import { IUser } from "../models/userModel";
const jwt = require("jsonwebtoken");

function generateJwtToken(userId: string, email: string, secretKey: string) {
  const payload = { userId: userId, email: email };
  const token = jwt.sign(payload, secretKey, { expiresIn: "1d" });
  return token;
}

async function signIn(req: Request, res: Response) {
  try {
    const { credential } = req.body;
    const user: IUser = jwtDecode(credential);
    const isExits = await User.findOne({ email: user?.email });
    console.log(isExits);
    if (isExits) {
      const token = generateJwtToken(
        isExits._id.toString(),
        isExits.email,
        process.env.JWT_SECRETE as string
      );
      res.status(200).send({ status: true, token, userId: isExits._id });
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
