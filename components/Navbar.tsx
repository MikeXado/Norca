"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Image from "next/image";
import UserNav from "./dropdowns/user-nav";
import { SidebarContext } from "@/context/SidebarProvider";

export default function Navbar() {
  const [auth, setAuth] = React.useState(true);
  const { setState } = React.useContext(SidebarContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="bg-white"
        sx={{
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar className="sm:max-w-[1832px]">
          <div className="lg:hidden">
            <IconButton
              onClick={() => {
                setState((prev) => !prev);
              }}
              size="large"
              edge="start"
              color="default"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Image src="/logo-norca.png" alt="norca" width={93} height={34} />
          {auth && <UserNav />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
