import { Request, Response } from "express";
import Password from "../models/passwordModel";
import { ObjectId } from "mongodb";

async function generateOwnPass(req: Request, res: Response) {
  try {
    const { uppercase, lowercase, numbers, specialCharacters } = req.body;
    const length =
      parseInt(uppercase) +
      parseInt(lowercase) +
      parseInt(numbers) +
      parseInt(specialCharacters);

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()-_=+";

    let password = "";

    for (let i = 0; i < uppercase; i++) {
      password += uppercaseChars.charAt(
        Math.floor(Math.random() * uppercaseChars.length)
      );
    }
    for (let i = 0; i < lowercase; i++) {
      password += lowercaseChars.charAt(
        Math.floor(Math.random() * lowercaseChars.length)
      );
    }
    for (let i = 0; i < numbers; i++) {
      password += numberChars.charAt(
        Math.floor(Math.random() * numberChars.length)
      );
    }
    for (let i = 0; i < specialCharacters; i++) {
      password += specialChars.charAt(
        Math.floor(Math.random() * specialChars.length)
      );
    }

    password = password
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    password = password.substring(0, length);

    res.json({ password });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false });
  }
}

async function savePassword(req: Request, res: Response) {
  try {
    const { password, description } = req.body;
    const user = req.user;
    const newPass = new Password({
      userID: user?.userId,
      password,
      description,
    });
    await newPass.save();
    res.status(200).json({ status: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false });
  }
}

async function getPasswords(req: Request, res: Response) {
  try {
    const user = req.user;
    const passwords = await Password.find({
      userID: new ObjectId(user?.userId),
    });
    res.status(200).json({ status: true, passwords });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "false" });
  }
}

async function deletePassword(req: Request, res: Response) {
  try {
    const id = req.params.id;
    await Password.findByIdAndDelete(id);
    res.status(200).json({ status: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Password Delete Failed" });
  }
}

export default { generateOwnPass, savePassword, getPasswords, deletePassword };
