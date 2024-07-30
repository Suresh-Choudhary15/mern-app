import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Box,
} from "@mui/material";
import BACKEND_BASE_URL from "../constants";

const CommentSection = ({ itemId }) => {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await axios.get(
        `${BACKEND_BASE_URL}/api/items/${itemId}/comments`
      );
      setComments(data);
    };

    fetchComments();
  }, [itemId]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/items/${itemId}/comments`,
        {
          content,
        }
      );
      setComments([...comments, data]);
      setContent("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Comments
      </Typography>
      <List>
        {comments.map((comment) => (
          <ListItem key={comment._id}>
            <ListItemText primary={comment.content} />
          </ListItem>
        ))}
      </List>
      <Box component="form" onSubmit={submitHandler} sx={{ mt: 3 }}>
        <TextField
          label="Add a comment"
          fullWidth
          margin="normal"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default CommentSection;
