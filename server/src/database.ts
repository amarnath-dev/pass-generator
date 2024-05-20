import mongoose from "mongoose";
import app from "./app";

async function connect() {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING as string);
    console.log("MongoDB Connected");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening to ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Connection Error", error);
  }
}

connect();
