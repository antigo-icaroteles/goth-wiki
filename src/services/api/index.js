import axios from "axios";

const instance = axios.create({
  baseURL: "https://thronesapi.com",
});

export default instance;
