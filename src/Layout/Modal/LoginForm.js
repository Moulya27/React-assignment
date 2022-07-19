import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

function LoginForm({ handleLoginModalClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    handleLoginModalClose();
  };

  return (
    <div style={{ padding: "0 50px 50px 50px" }}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: { xs: "230px", sm: "400px" },
            display: "flex",
            flexDirection: "column",
          },
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Box
          sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
        >
          <Button
            sx={{ marginRight: "20px" }}
            variant="outlined"
            onClick={handleLoginModalClose}
          >
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default LoginForm;
