import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listItems } from "../../actions/itemActions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.itemList);

  useEffect(() => {
    dispatch(listItems());
  }, [dispatch]);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Items List</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
