import { Box, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #6a11cb, #2575fc, #00c6ff)", // 3-shade gradient
      }}
    >
      <Paper
        elevation={10}
        sx={{
          p: 6,
          width: 400,
          borderRadius: 3,
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.85)", // semi-transparent
          backdropFilter: "blur(8px)",
        }}
      >
        <Typography variant="h4" mb={2} fontWeight={600} color="primary">
          Welcome!
        </Typography>
        <Typography variant="body1" mb={4}>
          You are logged in successfully 🎉
        </Typography>
        <Button
          variant="contained"
          color="error"
          onClick={logout}
          sx={{
            px: 4,
            py: 1.5,
            fontWeight: 600,
            fontSize: "16px",
            borderRadius: 2,
            background: "linear-gradient(90deg, #ff4b2b, #ff416c)",
            "&:hover": {
              background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
            },
          }}
        >
          Logout
        </Button>
      </Paper>
    </Box>
  );
};

export default Dashboard;
