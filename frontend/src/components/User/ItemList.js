import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listItems } from "../../actions/itemActions";
import { Link } from "react-router-dom";

const ItemList = () => {
  const dispatch = useDispatch();
  const { items, error } = useSelector((state) => state.itemList);

  useEffect(() => {
    dispatch(listItems());
  }, [dispatch]);

  return (
    <div>
      <h1>Item List</h1>
      {error && <p>{error}</p>}
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <Link to={`/items/${item._id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
