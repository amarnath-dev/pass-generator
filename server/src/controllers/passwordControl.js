"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passwordModel_1 = __importDefault(require("../models/passwordModel"));
const mongodb_1 = require("mongodb");
function generateOwnPass(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { uppercase, lowercase, numbers, specialCharacters } = req.body;
            const length = parseInt(uppercase) +
                parseInt(lowercase) +
                parseInt(numbers) +
                parseInt(specialCharacters);
            const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
            const numberChars = "0123456789";
            const specialChars = "!@#$%^&*()-_=+";
            let password = "";
            for (let i = 0; i < uppercase; i++) {
                password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
            }
            for (let i = 0; i < lowercase; i++) {
                password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
            }
            for (let i = 0; i < numbers; i++) {
                password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
            }
            for (let i = 0; i < specialCharacters; i++) {
                password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
            }
            password = password
                .split("")
                .sort(() => Math.random() - 0.5)
                .join("");
            password = password.substring(0, length);
            res.json({ password });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ status: false });
        }
    });
}
function savePassword(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { password, description } = req.body;
            const user = req.user;
            const newPass = new passwordModel_1.default({
                userID: user === null || user === void 0 ? void 0 : user.userId,
                password,
                description,
            });
            yield newPass.save();
            res.status(200).json({ status: true });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ status: false });
        }
    });
}
function getPasswords(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = req.user;
            const passwords = yield passwordModel_1.default.find({
                userID: new mongodb_1.ObjectId(user === null || user === void 0 ? void 0 : user.userId),
            });
            res.status(200).json({ status: true, passwords });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ status: "false" });
        }
    });
}
function deletePassword(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const deletePass = yield passwordModel_1.default.findByIdAndDelete(id);
            console.log("Deleted", deletePass);
            res.status(200).json({ status: true });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ status: false, message: "Password Delete Failed" });
        }
    });
}
exports.default = { generateOwnPass, savePassword, getPasswords, deletePassword };
