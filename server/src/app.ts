import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import useRoutes from "../src/routes/userRoutes";

const app = express();
const corsConfig = {
  origin: "http://localhost:5173",
  credentials: true,
};
dotenv.config();

app.use(cors(corsConfig));
app.use(express.json());

app.use("/", useRoutes);

export default app;
