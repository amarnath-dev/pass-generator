import axios from "axios";

// const URL = "http://localhost:8000";
const URL = "https://pass-generator-api-x27n.onrender.com";

const url = axios.create({
  baseURL: URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default url;
