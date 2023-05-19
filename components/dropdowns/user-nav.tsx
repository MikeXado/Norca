"use client";

import Image from "next/image";
import React, { useState } from "react";
import ArrowBottom from "../../assets/sidebar/arrow-bottom.svg";
function UserNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      <button onClick={handleOpenDropdown} className="flex items-center">
        <Image src="/Avatar.png" alt="avatar" width={40} height={40} />
        <div className="flex ml-[16px]">
          <div>
            <span className="block text-[16px] text-[#000000DE] tracking-wide  text-">
              Tania-Otilia Oltean
            </span>
            <span className="block text-left text-[14px] text-[#00000099] tracking-wide">
              Notar
            </span>
          </div>
          <ArrowBottom className="ml-[13px]  w-[10px] text-[#0000008A]" />
        </div>
      </button>

      <div
        id="dropdown"
        className={
          "z-10 bg-white divide-y absolute top-12 w-full divide-gray-100 rounded-lg shadow-lg " +
          (!isOpen && " hidden")
        }
      >
        <ul className="py-2 text-sm text-gray-700 ">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              Settings
            </a>
          </li>

          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserNav;
