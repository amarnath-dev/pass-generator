import { Requirements } from "../components/InputModal/InputModal";
import API from "../../api";
import { Credential } from "../pages/SignIn";

export const signIn = async (credential: string) => {
  try {
    console.log("Sign in data seding");
    const res = await API.post("/signin", { credential });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const signUp = async (credential: string) => {
  try {
    const res = await API.post("/signup", { credential });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const signUpWithEmailPassword = async (credential: Credential) => {
  try {
    const res = await API.post("/signUpWithEmailPassword", { credential });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const signInWithEmailPassword = async (credential: Credential) => {
  try {
    const res = await API.post("/signInWithEmailPassword", { credential });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const generateOwnPass = async (requirements: Requirements) => {
  try {
    const res = await API.post("/generate", requirements);
    return res.data.password;
  } catch (error) {
    console.error("Requirement Send Failed", error);
  }
};

export const savePassword = async (password: string, description: string) => {
  try {
    const res = await API.post("/save", { password, description });
    return res.status;
  } catch (error) {
    console.log(error);
  }
};

export const deletePass = async (id: string) => {
  try {
    const res = await API.delete(`/delete/${id}`);
    return res.data.status;
  } catch (error) {
    console.log(error);
  }
};
