import axios from "axios";
import BACKEND_BASE_URL from "../constants";

const login = async (email, password) => {
  const { data } = await axios.post(`${BACKEND_BASE_URL}/api/auth/login`, {
    email,
    password,
  });
  if (data) {
    localStorage.setItem("userInfo", JSON.stringify(data));
  }
  return data;
};

const logout = () => {
  localStorage.removeItem("userInfo");
};

export default {
  login,
  logout,
};
