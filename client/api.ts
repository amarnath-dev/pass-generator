import axios from "axios";

const URL = "http://localhost:8000";

const url = axios.create({
  url: URL,
});

export default url;
