"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import SidebarProvider from "@/context/SidebarProvider";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Norca",
  description: "Test",
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider theme={theme}>
          <SidebarProvider>
            <header className="border-b fixed z-40 top-0 left-0 w-full">
              <Navbar />
            </header>
            <main className="max-w-[1788px] mx-auto md:px-10 px-5">
              <Sidebar>{children}</Sidebar>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
