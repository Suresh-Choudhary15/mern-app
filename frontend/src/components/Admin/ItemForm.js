import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createItem } from "../../actions/itemActions";

const ItemForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const dispatch = useDispatch();
  const { success, error } = useSelector((state) => state.itemCreate);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createItem({ name, description, price, imageUrl }));
  };

  return (
    <div>
      <h1>Create Item</h1>
      {success && <p>Item created successfully!</p>}
      {error && <p>{error}</p>}
      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button type="submit">Create Item</button>
      </form>
    </div>
  );
};

export default ItemForm;
