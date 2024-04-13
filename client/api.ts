import axios from "axios";

// const URL = "http://localhost:8000";
const URL = "https://pass-generator-api-x27n.onrender.com";

const url = axios.create({
  withCredentials: true,
  baseURL: URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export default url;
