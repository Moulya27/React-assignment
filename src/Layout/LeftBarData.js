import React from "react";
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import PaymentIcon from "@mui/icons-material/Payment";
import LogoutIcon from "@mui/icons-material/Logout";
import { useHistory } from "react-router-dom";
import "./LeftBarData.css";


function LeftBarData() {
  const history = useHistory();
  return (
    <div className="container">
      <Box sx={{ padding: "25px" }}>
        <img
          src="https://asset-apac.unileversolutions.com/content/dam/unilever/dove/global/Dove.png"
          width="70"
          height="50"
          alt="Dove logo"
        />
      </Box>
      <ListItem onClick={() => history.push("/")}>
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>

          <ListItemText>Home</ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem onClick={() => history.push("/products")}>
        <ListItemButton>
          <ListItemIcon>
            <InventoryIcon />
          </ListItemIcon>
          <ListItemText>Products</ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem onClick={() => history.push("/payment")}>
        <ListItemButton>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText>Payment</ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem onClick={() => history.push("/signout")}>
        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText>Signout</ListItemText>
        </ListItemButton>
      </ListItem>
    </div>
  );
}

export default LeftBarData;
