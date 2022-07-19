import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar,
} from "@mui/material";
import React from "react";

function TopNav({ sideBarHandler,handleModalOpen,handleLoginModalOpen}) {
  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: "lightblue",
        }}
        position="fixed"
        elevation={1}
      >
        <Toolbar
          sx={{
            marginLeft: { sm: "90px" },
            color: "black",
          }}
        >
          
          <Box sx={{ display: { sm: "none" },cursor:'pointer'}}>
            <img
              src="https://asset-apac.unileversolutions.com/content/dam/unilever/dove/global/Dove.png"
              width="60"
              height="40"
              alt="Dove logo"
              onClick={sideBarHandler}
            />
          </Box>
          <Box sx={{ marginLeft: "auto" }}>
            <Button
              sx={{ marginRight: "20px" }}
              variant="contained"
              size="small"
              onClick={handleLoginModalOpen}
            >
              Log in
            </Button>
            <Button variant="outlined" size="small"
              onClick={handleModalOpen}>
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopNav;
