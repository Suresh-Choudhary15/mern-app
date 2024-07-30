import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentSection = ({ itemId }) => {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await axios.get(`/api/items/${itemId}/comments`);
      setComments(data);
    };

    fetchComments();
  }, [itemId]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/items/${itemId}/comments`, {
        content,
      });
      setComments([...comments, data]);
      setContent("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>{comment.content}</li>
        ))}
      </ul>
      <form onSubmit={submitHandler}>
        <div>
          <label>Add a comment</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentSection;
