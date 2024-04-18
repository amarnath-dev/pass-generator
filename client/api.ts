import axios from "axios";
import Cookies from "js-cookie";

// const URL = "http://localhost:8000";
const URL = "https://pass-generator-api-x27n.onrender.com";
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
