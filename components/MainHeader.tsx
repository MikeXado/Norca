"use client";

import { useSearchParams } from "next/navigation";
import ChevronLeft from "../assets/sidebar/chevron-left.svg";
import { tabs } from "@/constants/Tabs";
import DotsIcon from "../assets/sidebar/dots-icon.svg";
function MainHeader() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab");

  const tab = tabs.find((tab) => tab.id === Number(activeTab)) || tabs[0];

  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div>
        <h1 className="text-[34px]">BD Persoane fizice</h1>

        <div className="flex items-center space-x-[14.91px] mt-[54.5px] text-[16px] text-[#00000099]">
          <span>Baze de date</span>
          <ChevronLeft className="rotate-180 w-2" />
          <button className="p-[6.67px] bg-[#F5F5F5] rounded-[2px]">
            <DotsIcon />
          </button>
          <ChevronLeft className="rotate-180 w-2" />
          <span>{tab?.name}</span>
        </div>
      </div>

      <div className="lg:mt-0 mt-[24px] font-medium text-[14px] text-[#00000099] space-y-[2] uppercase">
        <span className="block text-[#1976D2] text-[20px]">
          ID: <span>123456789</span>
        </span>
        <span className="block ">
          #: <span>NO123456</span>
        </span>
        <span className="block">Ungureanu Ion</span>
        <span className="block">
          IDNP: <span>2002348245512</span>
        </span>
      </div>
    </div>
  );
}

export default MainHeader;
