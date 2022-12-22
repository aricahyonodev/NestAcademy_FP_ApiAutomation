import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "*/*",
};

const BaseApi = (headers = {}) => {
  const api = axios.create({
    baseURL: process.env.BASE_URL,
    headers: { ...defaultHeaders, ...headers },
    validateStatus: function () {
      return true;
    },
  });

  return api;
};

export default BaseApi;
