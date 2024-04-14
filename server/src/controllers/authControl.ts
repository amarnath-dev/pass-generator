import { Request, Response } from "express";
import { jwtDecode } from "jwt-decode";
import User from "../models/userModel";
import { IUser } from "../models/userModel";
import jwt from "jsonwebtoken";

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
    if (isExits && isExits.password === "") {
      const token = generateJwtToken(
        isExits._id.toString(),
        isExits.email,
        process.env.JWT_SECRETE as string
      );
      res.status(200).send({ status: true, token, userId: isExits._id });
    } else {
      res.send({ status: false, message: "User Not Found" });
    }
  } catch (error) {
    console.log(error);
  }
}

async function signInWithEmailPassword(req: Request, res: Response) {
  try {
    const { email, password } = req.body.credential;
    if (!email || !password) {
      res.status(400).json({ status: false, message: "Credentials not found" });
    }
    const isExits = await User.findOne({ email: email });
    if (!isExits) {
      res.send({ status: false, message: "User Not Found" });
    } else {
      if (isExits.password === password) {
        const token = generateJwtToken(
          isExits._id.toString(),
          isExits.email,
          process.env.JWT_SECRETE as string
        );
        res.status(200).json({ status: true, token });
      } else {
        res.status(400).json({ status: false, message: "Wrong Password" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Server Error" });
  }
}

async function signUpWithEmailPassword(req: Request, res: Response) {
  try {
    const { email, password } = req.body.credential;
    if (!email || !password) {
      res.status(400).json({ status: false, message: "Credentials not found" });
    }
    const isExits = await User.findOne({ email: email });
    if (isExits) {
      res.send({ status: false, message: "User Alredy Exists" });
    } else {
      const newUser = new User({
        email: email,
        password: password,
        picture: "",
      });
      const user = await newUser.save();
      const token = generateJwtToken(
        user._id.toString(),
        user.email,
        process.env.JWT_SECRETE as string
      );
      res.status(201).json({ status: true, token });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Server Error" });
  }
}

export default { signIn, signInWithEmailPassword, signUpWithEmailPassword };
