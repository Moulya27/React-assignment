import { Drawer, Hidden, Paper } from "@mui/material/";
import "./LeftBar.css";
import React from "react";
import LeftBarData from "./LeftBarData";

function LeftBar({ isMobile, sideBarHandler }) {
  return (
    <div>
      <nav>
        <Paper sx={{ display: { xs: "none", sm: "block" } }}>
          <Drawer
            PaperProps={{
              sx: {
                backgroundColor: "lightBlue",
              },
            }}
            variant="permanent"
            open
            anchor="left"
            sx={{
              width: "250px",
            }}
          >
            <LeftBarData />
          </Drawer>
        </Paper>
        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "lightBlue",
            },
          }}
          variant="temporary"
          open={isMobile}
          anchor="left"
          sx={{
            width: "200px",
          }}
          onClick={sideBarHandler}
        >
          <LeftBarData />
        </Drawer>
      </nav>
    </div>
  );
}

export default LeftBar;
