import axios from "axios";

const register = async (name, email, password) => {
  const { data } = await axios.post("/api/users", { name, email, password });
  if (data) {
    localStorage.setItem("userInfo", JSON.stringify(data));
  }
  return data;
};

export default {
  register,
};
