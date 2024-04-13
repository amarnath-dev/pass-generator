import axios from "axios";
import Cookies from "js-cookie";

// const URL = "http://localhost:8000";
const URL = "https://pass-generator-api-x27n.onrender.com";
const token = Cookies.get("token");

const url = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  withCredentials: true,
});

export default url;
