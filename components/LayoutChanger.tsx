"use client";
import React, { useContext } from "react";
import ColumnLayout from "../assets/sidebar/column-layout-icon.svg";
import RowLayout from "../assets/sidebar/row-layout-icon.svg";
import { LayoutContext } from "@/context/LayoutProvider";
import { IconButton } from "@mui/material";

function LayoutChanger() {
  const { state, setState } = useContext(LayoutContext);

  return (
    <div className="flex items-center justify-end space-x-[2px] mt-[33px]">
      <IconButton onClick={() => setState("block")}>
        <ColumnLayout
          className={
            "w-[22px]  hover:text-[#0288D1]" +
            (state === "block"
              ? " xl:text-[#0288D1] text-[#0000008A]"
              : " xl:text-[#0000008A] text-[#0288D1]")
          }
        />
      </IconButton>
      <IconButton onClick={() => setState("row")}>
        <RowLayout
          className={
            "w-[22px]  hover:text-[#0288D1]" +
            (state === "row"
              ? " xl:text-[#0288D1] text-[#0000008A]"
              : " xl:text-[#0000008A] text-[#0288D1]")
          }
        />
      </IconButton>
    </div>
  );
}

export default LayoutChanger;
