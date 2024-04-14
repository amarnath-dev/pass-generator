import mongoose, { Schema } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  picture: string;
  blocked: boolean;
  password: string;
}

const userSchema: Schema<IUser> = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    picture: {
      type: String,
    },
    blocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", userSchema);
