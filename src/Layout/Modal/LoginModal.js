import { Dialog, DialogTitle } from "@mui/material";
import React from "react";
import LoginForm from "./LoginForm";

function LoginModal({open,handleLoginModalClose}) {
  return (
    <div>
      <Dialog open={open} onClose={handleLoginModalClose}>
        <DialogTitle sx={{ textAlign: "center" }}>Log In</DialogTitle>
        <LoginForm handleLoginModalClose={handleLoginModalClose} />
      </Dialog>
    </div>
  );
}

export default LoginModal;
