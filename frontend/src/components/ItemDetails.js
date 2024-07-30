import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Card, CardContent } from "@mui/material";
import BACKEND_BASE_URL from "../constants";

const ItemDetails = ({ match }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      const { data } = await axios.get(
        `${BACKEND_BASE_URL}/api/items/${match.params.id}`
      );
      setItem(data);
    };

    fetchItem();
  }, [match.params.id]);

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h5">{item.name}</Typography>
          <Typography variant="body1">{item.description}</Typography>
          <Typography variant="body2">{item.price}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ItemDetails;
