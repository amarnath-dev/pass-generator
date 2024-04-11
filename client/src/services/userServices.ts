import { Requirements } from "../components/InputModal/InputModal";
// import API from "../../api";
import axios from "axios";

export const signIn = async (credential: string) => {
  console.log("Send credential", credential);
};

export const generateOwnPass = async (requirements: Requirements) => {
  try {
    const res = await axios.post(
      "http://localhost:8000/generate",
      requirements
    );
    return res.data.password;
  } catch (error) {
    console.error("Requirement Send Failed", error);
  }
};
