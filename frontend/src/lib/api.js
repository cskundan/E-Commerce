import axios from "axios";
import "dotenv/config";
// Create an Axios instance with custom configurations
const axiosInstance = axios.create({
  baseURL: `${process.env.BASE_URL}`,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer <YourAuthToken>",
  },
});
export default axiosInstance;
