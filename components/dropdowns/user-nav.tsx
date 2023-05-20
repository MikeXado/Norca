import React, { useState } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box } from "@mui/material";
import Image from "next/image";

interface User {
  name: string;
  position: string;
  avatar: string;
}

const user: User = {
  name: "Tania-Otilia Oltean",
  position: "Notar",
  avatar: "/Avatar.png",
};

export default function UserNav() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex justify-end w-full relative text-[#0000008A]">
      <Button
        aria-controls="user-menu"
        aria-haspopup="true"
        color="inherit"
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon className="hidden sm:block" />}
        startIcon={<Avatar src={user.avatar} alt={user.name} />}
      >
        <div className="sm:block hidden">
          <Typography
            color="#000000DE"
            fontSize={14}
            letterSpacing={0}
            textTransform="none"
            lineHeight="160%"
            variant="subtitle1"
            textAlign="left"
          >
            {user.name}
          </Typography>
          <Typography
            textAlign="left"
            textTransform="none"
            letterSpacing="none"
            variant="body2"
            color="#00000099"
          >
            {user.position}
          </Typography>
        </div>
      </Button>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          style: {
            width: anchorEl ? anchorEl.offsetWidth : undefined,
          },
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
