import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

interface IPassword {
  userID: ObjectId | undefined;
  password: string;
  description: string;
}

const passwordModal: Schema<IPassword> = new mongoose.Schema<IPassword>(
  {
    userID: {
      type: ObjectId,
    },
    password: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IPassword>("Password", passwordModal);
