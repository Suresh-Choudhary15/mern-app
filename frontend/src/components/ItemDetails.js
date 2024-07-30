import React, { useEffect, useState } from "react";
import axios from "axios";

const ItemDetails = ({ match }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      const { data } = await axios.get(`/api/items/${match.params.id}`);
      setItem(data);
    };

    fetchItem();
  }, [match.params.id]);

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  );
};

export default ItemDetails;
