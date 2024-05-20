import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const corsConfig = {
  origin: "https://pass-generator-api-x27n.onrender.com",
  // origin: "http://localhost:5173",
  credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsConfig));

app.use("/", userRoutes);

export default app;
