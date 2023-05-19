"use client";

import React, { ReactNode } from "react";
import { tabs } from "@/constants/Tabs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import LayoutChanger from "./LayoutChanger";
function Tabs({ children }: { children: ReactNode[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleTabs = (id: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("tab", id.toString());
    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  const activeTab = searchParams.get("tab") || "1";

  return (
    <>
      <ul className="flex items-center  mt-[24px] gap-x-12 gap-y-4 flex-wrap">
        {tabs.map((tab) => {
          return (
            <li
              className={
                " uppercase col-span-1 text-[14px] font-medium  pb-[5px] cursor-pointer hover:text-[#1976D2] hover:border-b-2 hover:border-[#1976D2] " +
                (Number(activeTab) === tab.id
                  ? " text-[#1976D2] border-b-2 border-[#1976D2]"
                  : " text-[#00000099]")
              }
              onClick={() => handleTabs(tab.id)}
              key={tab.id}
            >
              {tab.name}
            </li>
          );
        })}
      </ul>

      <LayoutChanger />
      <div className="mt-[24px]">{children[+activeTab - 1]}</div>

      <button className=" py-[8px] px-[37px] rounded-md bg-[#1976D2] text-white mt-[24px] uppercase font-medium text-[13px] ">
        Salveaza modificarile
      </button>
    </>
  );
}

export default Tabs;
