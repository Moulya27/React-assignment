import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  styled,
  Typography,
} from "@mui/material";
import { grey} from "@mui/material/colors";


function ConfirmDialog({ confirmDialog, setConfirmDialog }) {
  //Customized button
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[400],
    "&:hover": {
      backgroundColor: grey[500],
    },
  }));
  return (
    <Dialog
      sx={{ position: "absolute", top: "-200px" }}
      open={confirmDialog.isOpen}
    >
      <DialogTitle></DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        <Typography variant="h6">{confirmDialog.title}</Typography>
        <Typography variant="subtitle2">{confirmDialog.subTitle}</Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button variant="contained" onClick={confirmDialog.onConfirm}>
          Yes
        </Button>
        <ColorButton
          variant="contained"
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        >
          No
        </ColorButton>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;
