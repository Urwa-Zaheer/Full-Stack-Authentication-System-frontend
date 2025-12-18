import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/register", form);
      navigate("/login"); // redirect after successful signup
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (

     <Box sx={{ 
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
         background: "linear-gradient(135deg, #6a11cb, #2575fc, #00c6ff)", }}
     
    >
      <Paper elevation={4} sx={{ p: 4, width: 360 ,backgroundColor: "rgba(255, 255, 255, 0.85)",}}>
        <Typography variant="h5" textAlign="center" gutterBottom>
          Create Account
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            margin="normal"
            value={form.name}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            margin="normal"
            value={form.email}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            margin="normal"
            value={form.password}
            onChange={handleChange}
            required
          />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ mt: 2 }}
          >
            Sign Up
          </Button>

          {/* 🔹 Login Anchor */}
          <Typography
            variant="body1"
            textAlign="center"
            sx={{ mt: 2, color: "text.secondary" }}
          >
            Already have an account?{" "}
            <Link
              component="button"
              onClick={() => navigate("/login")}
              sx={{
                fontWeight: 600,
                color: "primary.main",
                cursor: "pointer",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Login
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Signup;
