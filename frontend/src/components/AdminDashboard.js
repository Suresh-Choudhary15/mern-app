import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios.get("/api/items");
      setItems(data);
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
