import axios from "axios";
import Cookies from "js-cookie";

const URL = import.meta.env.VITE_API;
const token = Cookies.get("token");

const headers = {
  "Content-Type": "application/json",
  ...(token && { Authorization: `Bearer ${token}` }),
};

const url = axios.create({
  baseURL: URL,
  headers: headers,
  withCredentials: true,
});

export default url;
