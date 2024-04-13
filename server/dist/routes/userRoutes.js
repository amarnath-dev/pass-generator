"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authControl_1 = __importDefault(require("../controllers/authControl"));
const passwordControl_1 = __importDefault(require("../controllers/passwordControl"));
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const router = (0, express_1.Router)();
router.post("/signin", authControl_1.default.signIn);
router.post("/generate", authMiddleware_1.default, passwordControl_1.default.generateOwnPass);
router.post("/save", authMiddleware_1.default, passwordControl_1.default.savePassword);
router.get("/passwords", authMiddleware_1.default, passwordControl_1.default.getPasswords);
router.delete("/delete/:id", authMiddleware_1.default, passwordControl_1.default.deletePassword);
exports.default = router;
