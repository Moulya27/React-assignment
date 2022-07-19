import React, { useState } from "react";
import LeftBar from "./LeftBar";
import "./Layout.css";
import TopNav from "./TopNav";
import SignUpModal from "./Modal/SignUpModal";

function Layout({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  const sideBarHandler = () => {
    setIsMobile(!isMobile);
  };

  const [open, setOpen] = useState(false);

  // function to handle modal open
  const handleModalOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <div className="layout">
      <LeftBar isMobile={isMobile} sideBarHandler={sideBarHandler} />
      <TopNav
        sideBarHandler={sideBarHandler}
        handleModalOpen={handleModalOpen}
      />
      <SignUpModal open={open} handleModalClose={handleModalClose} />

      <main>
        <div>{children}</div>
      </main>
    </div>
  );
}

export default Layout;
