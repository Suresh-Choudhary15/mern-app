import axios from "axios";

const login = async (email, password) => {
  const { data } = await axios.post("/api/auth/login", { email, password });
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
