"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { tabs } from "@/constants/Tabs";
import GeneralInfo from "./GeneralInfo";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import LayoutChanger from "./LayoutChanger";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    const newSearchparams = new URLSearchParams(searchParams.toString());
    newSearchparams.set("tab", (newValue + 1).toString());
    router.push(`${pathname}?${newSearchparams.toString()}`);
  };

  const value = searchParams.get("tab") || "1";

  return (
    <Box sx={{ width: "100%", mt: "33px" }}>
      <Box>
        <Tabs
          value={Number(value) - 1}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons={false}
          allowScrollButtonsMobile
        >
          {tabs.map((tab, index) => {
            return (
              <Tab
                key={tab.id}
                label={tab.name}
                color="#00000099"
                sx={{ fontSize: "14px", fontWeight: 500 }}
                {...a11yProps(index)}
                wrapped
              />
            );
          })}
          <Tab
            label={
              <div className="flex items-center space-x-[6px]">
                <AutoAwesomeMosaicIcon />
                <span>Șabloane</span>
              </div>
            }
            wrapped
            color="#00000099"
            sx={{ fontSize: "14px", fontWeight: 500 }}
            {...a11yProps(10)}
          ></Tab>
        </Tabs>
      </Box>
      <LayoutChanger />

      <div className="mt-[24px]">
        <TabPanel value={Number(value)} index={1}>
          <GeneralInfo />
        </TabPanel>

        <TabPanel value={Number(value)} index={2}>
          Aptitudini Personale
        </TabPanel>
        <TabPanel value={Number(value)} index={3}>
          Stare Civila
        </TabPanel>
        <TabPanel value={Number(value)} index={4}>
          Actele de Identitate
        </TabPanel>
        <TabPanel value={Number(value)} index={5}>
          Adresa
        </TabPanel>
        <TabPanel value={Number(value)} index={6}>
          Activitatea Desfasurata
        </TabPanel>
        <TabPanel value={Number(value)} index={7}>
          Date Statistice
        </TabPanel>
        <TabPanel value={Number(value)} index={8}>
          AML
        </TabPanel>
        <TabPanel value={Number(value)} index={9}>
          Șabloane
        </TabPanel>
      </div>

      <button className=" py-[8px] px-[37px] rounded-md bg-[#1976D2] text-white mt-[24px] uppercase font-medium text-[13px] ">
        Salveaza modificarile
      </button>
    </Box>
  );
}
