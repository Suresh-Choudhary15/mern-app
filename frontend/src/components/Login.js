import React, { useState } from "react";
import axios from "axios";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import BACKEND_BASE_URL from "../constants";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${BACKEND_BASE_URL}/api/auth/login`, {
        email,
        password,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      window.location.href = "/admin";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Box component="form" onSubmit={submitHandler} sx={{ mt: 3 }}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
