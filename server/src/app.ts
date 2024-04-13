import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import useRoutes from "../src/routes/userRoutes";
import cookieParser from "cookie-parser";

const app = express();
const corsConfig = {
  // origin: "http://localhost:5173",
  origin: "https://pass-generator-z55c.onrender.com",
  credentials: true,
};
dotenv.config();

app.use(cors(corsConfig));
app.use(express.json());
app.use(cookieParser());

app.use("/", useRoutes);

export default app;
