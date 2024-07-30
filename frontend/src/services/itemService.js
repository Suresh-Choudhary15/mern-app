import axios from "axios";
import BACKEND_BASE_URL from "../constants";

const getItems = async () => {
  const { data } = await axios.get(`${BACKEND_BASE_URL}/api/items`);
  return data;
};

const getItemById = async (id) => {
  const { data } = await axios.get(`${BACKEND_BASE_URL}/api/items/${id}`);
  return data;
};

export default {
  getItems,
  getItemById,
};
