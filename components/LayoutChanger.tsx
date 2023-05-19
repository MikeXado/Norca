"use client";
import React, { useContext } from "react";
import ColumnLayout from "../assets/sidebar/column-layout-icon.svg";
import RowLayout from "../assets/sidebar/row-layout-icon.svg";
import { LayoutContext } from "@/context/LayoutProvider";

function LayoutChanger() {
  const { state, setState } = useContext(LayoutContext);

  return (
    <div className="flex items-center justify-end space-x-3 mt-[33px]">
      <button onClick={() => setState("block")}>
        <ColumnLayout
          className={
            "w-[22px]  hover:text-[#0288D1]" +
            (state === "block"
              ? " xl:text-[#0288D1] text-[#0000008A]"
              : " xl:text-[#0000008A] text-[#0288D1]")
          }
        />
      </button>
      <button onClick={() => setState("row")}>
        <RowLayout
          className={
            "w-[22px]  hover:text-[#0288D1]" +
            (state === "row"
              ? " xl:text-[#0288D1] text-[#0000008A]"
              : " xl:text-[#0000008A] text-[#0288D1]")
          }
        />
      </button>
    </div>
  );
}

export default LayoutChanger;
