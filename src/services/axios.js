import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dinnur.portfolio-adilzhexenov.kz/"
});

export default axiosInstance;
