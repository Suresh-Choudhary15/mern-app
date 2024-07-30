import axios from "axios";
import BACKEND_BASE_URL from "../constants";

const register = async (name, email, password) => {
  const { data } = await axios.post(`${BACKEND_BASE_URL}/api/users`, {
    name,
    email,
    password,
  });
  if (data) {
    localStorage.setItem("userInfo", JSON.stringify(data));
  }
  return data;
};

export default {
  register,
};
