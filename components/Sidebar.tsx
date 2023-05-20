import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { menuItems } from "@/constants/links";
import Image from "next/image";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { usePathname } from "next/navigation";
import { IconButton, ListSubheader } from "@mui/material";
import { SidebarContext } from "@/context/SidebarProvider";
import Link from "next/link";
import { symbolName } from "typescript";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [submenuOpen, setSubmenuOpen] = React.useState(true);
  const { state } = React.useContext(SidebarContext);
  const pathname = usePathname();

  const activeLink = pathname.split("/")[1];

  const handleClick = () => {
    setSubmenuOpen((prev) => !prev);
  };

  const drawerWidth = 283;
  return (
    <>
      <div
        className={
          "fixed bg-white top-[75px] z-30" +
          (state ? " block" : " lg:block hidden")
        }
      >
        <Drawer
          sx={{
            width: drawerWidth,

            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />

          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  mt: "26px",
                }}
                id="nested-list-subheader"
              >
                <span>STOCARE INFO</span>
                <IconButton sx={{ display: "flex", justifyContent: "center" }}>
                  {" "}
                  <KeyboardArrowLeftIcon />
                </IconButton>
              </ListSubheader>
            }
          >
            {menuItems.map((item) => (
              <div key={item.title}>
                <ListItem>
                  <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                      <Image
                        src={item.icon}
                        alt="link"
                        width={22}
                        height={16}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        style: {
                          fontSize: "16px",
                          color: "#000000DE",
                        },
                      }}
                      primary={
                        <div className="flex justify-between items-center">
                          <span>{item.title}</span>
                          <ArrowDropUpIcon color="action" />
                        </div>
                      }
                    />
                  </ListItemButton>
                </ListItem>
                <Collapse
                  in={submenuOpen}
                  timeout="auto"
                  sx={{ px: "16px" }}
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.submenu.map((submenuItem) => {
                      return (
                        <Link key={submenuItem.title} href={submenuItem.path}>
                          <ListItemButton
                            selected={
                              activeLink === submenuItem.path.split("/")[1]
                            }
                            style={{ borderRadius: "4px" }}
                          >
                            <ListItemIcon>
                              <Image
                                src={submenuItem.icon}
                                alt="link"
                                width={25}
                                height={16}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primaryTypographyProps={{
                                style: { fontSize: "14px", color: "#000000DE" },
                              }}
                              primary={submenuItem.title}
                            />
                          </ListItemButton>
                        </Link>
                      );
                    })}
                  </List>
                </Collapse>
              </div>
            ))}
          </List>
        </Drawer>
      </div>
      <Box component="div" className="lg:ml-[283px]  my-[128px]  ">
        {children}
      </Box>
    </>
  );
}
