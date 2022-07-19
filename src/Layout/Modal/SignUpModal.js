import { Dialog, DialogTitle } from "@mui/material";
import React from "react";
import SignUpForm from "./SignUpForm";

function SignUpModal({ open, handleModalClose }) {
  return (
    <div>
      <Dialog open={open} onClose={handleModalClose}>
        <DialogTitle sx={{ textAlign: "center" }}>Sign Up</DialogTitle>
        <SignUpForm handleModalClose={handleModalClose} />
      </Dialog>
    </div>
  );
}

export default SignUpModal;
