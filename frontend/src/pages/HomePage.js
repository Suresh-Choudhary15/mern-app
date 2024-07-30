import React from "react";
import ItemList from "../components/ItemList";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <ItemList />
      <Link to="/login">Login</Link>
    </div>
  );
};

export default HomePage;
