import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const corsConfig = {
  origin: process.env.CORS_ORIGIN,
  credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsConfig));

app.use("/", userRoutes);

export default app;
