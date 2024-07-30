import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import BACKEND_BASE_URL from "../constants";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios.get(`${BACKEND_BASE_URL}/api/items`);
      setItems(data);
    };

    fetchItems();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Items
      </Typography>
      <List>
        {items.map((item) => (
          <ListItem key={item._id}>
            <ListItemText primary={item.name} />
            <Link to={`/item/${item._id}`}>View Details</Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ItemList;
