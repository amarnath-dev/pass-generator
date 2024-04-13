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
const jwt = require("jsonwebtoken");
function generateJwtToken(userId, email, secretKey) {
    const payload = { userId: userId, email: email };
    const token = jwt.sign(payload, secretKey, { expiresIn: "1d" });
    return token;
}
function signIn(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { credential } = req.body;
            const user = (0, jwt_decode_1.jwtDecode)(credential);
            const isExits = yield userModel_1.default.findOne({ email: user === null || user === void 0 ? void 0 : user.email });
            console.log(isExits);
            if (isExits) {
                const token = generateJwtToken(isExits._id.toString(), isExits.email, process.env.JWT_SECRETE);
                res.status(200).send({ status: true, token, userId: isExits._id });
            }
            else {
                const newUser = new userModel_1.default({
                    name: user === null || user === void 0 ? void 0 : user.name,
                    email: user === null || user === void 0 ? void 0 : user.email,
                    picture: user === null || user === void 0 ? void 0 : user.picture,
                });
                yield newUser.save();
                res.status(201).send({ status: true });
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.default = { signIn };
