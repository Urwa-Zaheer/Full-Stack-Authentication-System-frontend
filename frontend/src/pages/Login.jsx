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

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await api.post("/login", form);
    localStorage.setItem("token", res.data.token); // save token
    navigate("/dashboard"); 
  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
  }
};


  return (
    <Box sx={{ minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
         background: "linear-gradient(135deg, #6a11cb, #2575fc, #00c6ff)" }}
     
      
    >
      <Paper elevation={6} sx={{ p: 4, width: 360 ,backgroundColor: "rgba(300, 255, 259, 1.85)",}}>
        <Typography variant="h5" mb={2} textAlign="center">
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            margin="normal"
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            margin="normal"
            onChange={handleChange}
            required
          />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ mt: 2 }}
          >
            Login
          </Button>

          {/* ✅ Signup Anchor */}
          <Typography
            variant="body2"
            textAlign="center"
            sx={{ mt: 2 }}
          >
            Don’t have an account?{" "}
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate("/signup")}
              sx={{ fontWeight: 600 }}
            >
              Sign up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
