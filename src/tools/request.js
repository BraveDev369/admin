import axios from "axios";
import { BASE_URL } from "./constans";

const request = axios.create({
  baseURL: BASE_URL,
});

request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default request;
