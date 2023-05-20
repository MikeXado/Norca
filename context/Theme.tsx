"use client";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#fff", // Set the background color to transparent
          boxShadow: "none", // Remove the box shadow
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            background: "none", // Set the hover background color to transparent
          },
        },
      },
    },
  },
});

function Theme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
