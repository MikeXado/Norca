"use client";

import Image from "next/image";
import UserNav from "./dropdowns/user-nav";
import ChevronLeft from "../assets/sidebar/chevron-left.svg";
import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarProvider";

function Navbar() {
  const { state, setState } = useContext(SidebarContext);

  return (
    <nav className="max-w-[1832px] bg-white  flex items-center py-[15px] px-[16px] justify-between">
      <div className="flex items-center">
        <Image src="/logo-norca.png" alt="norca" width={93} height={34} />

        <button
          onClick={() => setState((prev) => !prev)}
          className="ml-3 sm:hidden"
        >
          <ChevronLeft className={"w-[8px]" + (state ? " rotate-180" : " ")} />
        </button>
      </div>
      <UserNav />
    </nav>
  );
}

export default Navbar;
