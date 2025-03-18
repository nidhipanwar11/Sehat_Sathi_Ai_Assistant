import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Use this for consistency
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
