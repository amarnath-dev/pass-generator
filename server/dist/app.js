"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("../src/routes/userRoutes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
const corsConfig = {
    origin: "http://localhost:5173",
    credentials: true,
};
dotenv_1.default.config();
app.use((0, cors_1.default)(corsConfig));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/", userRoutes_1.default);
exports.default = app;
