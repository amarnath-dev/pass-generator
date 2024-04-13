import { Requirements } from "../components/InputModal/InputModal";
import API from "../../api";

export const signIn = async (credential: string) => {
  try {
    const res = await API.post(
      "/signin",
      {
        credential,
      },
      { withCredentials: true }
    );
    return res.data.token;
  } catch (error) {
    console.error(error);
  }
};

export const generateOwnPass = async (requirements: Requirements) => {
  try {
    const res = await API.post("/generate", requirements, {
      withCredentials: true,
    });
    return res.data.password;
  } catch (error) {
    console.error("Requirement Send Failed", error);
  }
};

export const savePassword = async (password: string, description: string) => {
  try {
    const res = await API.post(
      "/save",
      {
        password,
        description,
      },
      { withCredentials: true }
    );
    return res.status;
  } catch (error) {
    console.log(error);
  }
};

export const deletePass = async (id: string) => {
  try {
    const res = await API.delete(`/delete/${id}`, { withCredentials: true });
    return res.data.status;
  } catch (error) {
    console.log(error);
  }
};
