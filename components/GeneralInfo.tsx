"use client";
import MainForm from "./general-info/MainForm";
import PhotoInput from "./general-info/PhotoInput";
import SignInput from "./general-info/SignInput";
import ArrowBottom from "../assets/sidebar/arrow-bottom.svg";
import SubForm from "./general-info/SubForm";
import { useContext } from "react";
import { LayoutContext } from "@/context/LayoutProvider";
function GeneralInfo() {
  const { state } = useContext(LayoutContext);
  return (
    <div className="bg-[#1976D20A] p-[24px] w-full rounded-[8px]">
      <form>
        <div
          className={
            state === "block"
              ? " xl:flex xl:space-x-[24px] xl:items-center xl:justify-between  space-y-[24px]"
              : " space-y-[24px]"
          }
        >
          <div className=" w-full">
            <PhotoInput />
            <SignInput />
          </div>
          <div className="w-full">
            <MainForm />
            <button className="mt-[24px] bg-[#1976D2] uppercase rounded-md font-medium text-[13px] tracking-wide text-white  w-[163px] h-[30px] flex justify-between items-center px-[13.25px]">
              <span>Date anterioare</span>
              <ArrowBottom className=" w-[10px] " />
            </button>
          </div>
        </div>
        <SubForm />
        <div className="flex mt-[24px] items-center text-white space-x-[24px]">
          <button
            type="submit"
            className="w-[85px] rounded-md bg-[#1976D2] h-[30px] uppercase font-medium text-[13px] "
          >
            Salvează
          </button>
          <button className="w-[85px] rounded-md bg-[#D32F2F] h-[30px] uppercase font-medium text-[13px] ">
            Anulează
          </button>
        </div>
      </form>
    </div>
  );
}

export default GeneralInfo;
