"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const mongoose_1 = __importDefault(require("mongoose"));
const passwordModal = new mongoose_1.default.Schema({
    userID: {
        type: mongodb_1.ObjectId,
    },
    password: {
        type: String,
    },
    description: {
        type: String,
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Password", passwordModal);
