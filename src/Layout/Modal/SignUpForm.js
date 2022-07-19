import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

function SignUpForm({ handleModalClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    handleModalClose();
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
          label="First Name"
          variant="outlined"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
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
            onClick={handleModalClose}
          >
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Signup
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default SignUpForm;
