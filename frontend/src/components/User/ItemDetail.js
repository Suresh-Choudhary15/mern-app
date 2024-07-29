import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemDetails } from "../../actions/itemActions";

const ItemDetail = ({ match }) => {
  const dispatch = useDispatch();
  const { item, error } = useSelector((state) => state.itemDetails);

  useEffect(() => {
    dispatch(getItemDetails(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <div>
      <h1>Item Details</h1>
      {error && <p>{error}</p>}
      {item && (
        <div>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <img src={item.imageUrl} alt={item.name} />
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
