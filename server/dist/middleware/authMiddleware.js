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
const jwt_decode_1 = require("jwt-decode");
const userModel_1 = __importDefault(require("../models/userModel"));
const verifyUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Inside verify User");
        const authorizationHeader = req.headers.Authorization || req.headers.authorization;
        if (!authorizationHeader || typeof authorizationHeader !== "string") {
            return res
                .status(401)
                .json({ status: false, message: "User Unauthorized" });
        }
        const token = authorizationHeader.replace("Bearer ", "");
        console.log("This is token -> ", token);
        const user = (0, jwt_decode_1.jwtDecode)(token);
        const exists = yield userModel_1.default.findById(user.userId);
        if (!exists) {
            res
                .status(404)
                .json({ status: false, message: "User not Authenticated" });
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.log(error);
        next(new Error("Error occured"));
    }
});
exports.default = verifyUser;
