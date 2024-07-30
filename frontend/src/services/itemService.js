import axios from "axios";

const getItems = async () => {
  const { data } = await axios.get("/api/items");
  return data;
};

const getItemById = async (id) => {
  const { data } = await axios.get(`/api/items/${id}`);
  return data;
};

export default {
  getItems,
  getItemById,
};
