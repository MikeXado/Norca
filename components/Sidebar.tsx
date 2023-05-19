"use client";
import React, { useContext, useState } from "react";
import BdIcon from "../assets/sidebar/bd-link-icon.svg";
import IndividualIcon from "../assets/sidebar/individual-link-icon.svg";
import LegalPersonIcon from "../assets/sidebar/legal-person-link-icon.svg";
import MovePropertyIcon from "../assets/sidebar/move-property-link-icon.svg";
import ImmovePropertyIcon from "../assets/sidebar/immove-property-link-icon.svg";
import DocumentTypeIcon from "../assets/sidebar/document-type-link-icon.svg";
import IndexListIcon from "../assets/sidebar/index-list-link-icon.svg";
import BlankIcon from "../assets/sidebar/blank.svg";
import ListCardIcon from "../assets/sidebar/list-cards-link-icon.svg";
import ArrowUp from "../assets/sidebar/arrow-up.svg";
import ChevronLeft from "../assets/sidebar/chevron-left.svg";
import { SidebarContext } from "@/context/SidebarProvider";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Sidebar({ children }: { children: React.ReactNode }) {
  const { state } = useContext(SidebarContext);
  const pathname = usePathname();
  const [isOpenSubmenu, setIsOpenSubmenu] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleOpenSubmenu = () => {
    setIsOpenSubmenu((prev) => !prev);
  };

  const handleSidebarOpen = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const activeLink = pathname.split("/")[1];

  return (
    <>
      <aside
        className={
          "fixed top-[77px] left-0 z-40 bg-white  h-full transition-transform " +
          (state ? "  translate-x-0" : " sm:translate-x-0 -translate-x-full") +
          (isSidebarOpen ? " w-[283px]" : " w-[100px]")
        }
      >
        <div className="h-full px-3 py-4 overflow-y-auto border-r">
          <div
            className={
              "flex items-center w-full px-[16px] mt-[26px]" +
              (isSidebarOpen ? " justify-between" : " justify-center")
            }
          >
            {isSidebarOpen && (
              <span className="text-[13px] text-[#00000099] uppercase">
                Stocare Info
              </span>
            )}
            <button
              className={!isSidebarOpen ? "w-full flex justify-center" : ""}
              onClick={handleSidebarOpen}
            >
              <ChevronLeft
                className={
                  "" + (isSidebarOpen ? " w-[10px]" : " rotate-180 w-3")
                }
              />
            </button>
          </div>
          <ul className="space-y-2 font-normal text-[16px] mt-[36px]">
            <li>
              <button
                onClick={handleOpenSubmenu}
                type="button"
                className={
                  "flex items-center w-full p-2 text-[#000000DE] py-[6px] pl-[16px]  group hover:bg-[#1976D214] transition duration-75 rounded-lg group " +
                  (!isSidebarOpen && " justify-between")
                }
              >
                <BdIcon className={isSidebarOpen ? " w-[22px]" : "w-[28px]"} />
                {isSidebarOpen && (
                  <span className="flex-1 ml-8 text-left ">Baze de date</span>
                )}
                <ArrowUp
                  className={"w-6" + (!isOpenSubmenu && " rotate-180")}
                />
              </button>
              <ul
                className={
                  "py-2" +
                  (!isSidebarOpen && " space-y-5 mt-5") +
                  (!isOpenSubmenu && " hidden")
                }
              >
                <li className="">
                  <Link
                    href="/individuals/123456789"
                    className={
                      "flex items-center p-2 text-[#000000DE] transition duration-75 rounded-lg  py-[6px]  group hover:bg-[#1976D214] " +
                      (!isSidebarOpen ? " justify-center pl-0" : " pl-[16px]") +
                      (activeLink === "individuals" && " bg-[#1976D214]")
                    }
                  >
                    <IndividualIcon
                      className={isSidebarOpen ? " w-[22px]" : "w-[28px]"}
                    />
                    {isSidebarOpen && (
                      <span className="flex-1 ml-8 text-left ">
                        {" "}
                        Persoane Fizice
                      </span>
                    )}
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className={
                      "flex items-center p-2 text-[#000000DE] transition duration-75 rounded-lg  py-[6px]  group hover:bg-[#1976D214] " +
                      (!isSidebarOpen ? " justify-center pl-0" : " pl-[16px]") +
                      (activeLink === "legal-persons" && " bg-[#1976D214]")
                    }
                  >
                    <LegalPersonIcon
                      className={isSidebarOpen ? " w-[22px]" : "w-[28px]"}
                    />
                    {isSidebarOpen && (
                      <span className="flex-1 ml-8 text-left ">
                        Persoane Juridice
                      </span>
                    )}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={
                      "flex items-center p-2 text-[#000000DE] transition duration-75 rounded-lg  py-[6px]  group hover:bg-[#1976D214] " +
                      (!isSidebarOpen ? " justify-center pl-0" : " pl-[16px]") +
                      (activeLink === "move-propetry" && " bg-[#1976D214]")
                    }
                  >
                    <MovePropertyIcon
                      className={isSidebarOpen ? " w-[22px]" : "w-[28px]"}
                    />
                    {isSidebarOpen && (
                      <span className="flex-1 ml-8 text-left">
                        Bunuri Mobile
                      </span>
                    )}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={
                      "flex items-center p-2 text-[#000000DE] transition duration-75 rounded-lg  py-[6px]  group hover:bg-[#1976D214] " +
                      (!isSidebarOpen ? " justify-center pl-0" : " pl-[16px]") +
                      (activeLink === "imovable-propetry" && " bg-[#1976D214]")
                    }
                  >
                    <ImmovePropertyIcon
                      className={isSidebarOpen ? " w-[22px]" : "w-[28px]"}
                    />
                    {isSidebarOpen && (
                      <span className="flex-1 ml-8 text-left ">
                        Bunuri Imobile
                      </span>
                    )}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={
                      "flex items-center p-2 text-[#000000DE] transition duration-75 rounded-lg  py-[6px]  group hover:bg-[#1976D214] " +
                      (!isSidebarOpen ? " justify-center pl-0" : " pl-[16px]") +
                      (activeLink === "document-types" && " bg-[#1976D214]")
                    }
                  >
                    <DocumentTypeIcon
                      className={isSidebarOpen ? " w-[22px]" : "w-[28px]"}
                    />
                    {isSidebarOpen && (
                      <span className="flex-1 ml-8 text-left ">
                        Tipurile actelor și acțiunilor notariale
                      </span>
                    )}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={
                      "flex items-center p-2 text-[#000000DE] transition duration-75 rounded-lg  py-[6px]  group hover:bg-[#1976D214] " +
                      (!isSidebarOpen ? " justify-center pl-0" : " pl-[16px]") +
                      (activeLink === "index-list" && " bg-[#1976D214]")
                    }
                  >
                    <IndexListIcon
                      className={isSidebarOpen ? " w-[22px]" : "w-[28px]"}
                    />
                    {isSidebarOpen && (
                      <span className="flex-1 ml-8 text-left ">
                        Lista indicilor de suspiciune în domeniul PC SB/FT
                      </span>
                    )}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={
                      "flex items-center p-2 text-[#000000DE] transition duration-75 rounded-lg  py-[6px]  group hover:bg-[#1976D214] " +
                      (!isSidebarOpen ? " justify-center pl-0" : " pl-[16px]") +
                      (activeLink === "country-list" && " bg-[#1976D214]")
                    }
                  >
                    <BlankIcon
                      className={isSidebarOpen ? " w-[22px]" : "w-[28px]"}
                    />
                    {isSidebarOpen && (
                      <span className="flex-1 ml-8 text-left ">
                        Lista țărilor lumii Secondary
                      </span>
                    )}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={
                      "flex items-center p-2 text-[#000000DE] transition duration-75 rounded-lg  py-[6px]  group hover:bg-[#1976D214] " +
                      (!isSidebarOpen ? " justify-center pl-0" : " pl-[16px]") +
                      (activeLink === "card-list" && " bg-[#1976D214]")
                    }
                  >
                    <ListCardIcon
                      className={isSidebarOpen ? " w-[22px]" : "w-[28px]"}
                    />
                    {isSidebarOpen && (
                      <span className="flex-1 ml-8 text-left ">
                        Lista codurilor valutelor Secondary
                      </span>
                    )}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={
                      "flex items-center p-2 text-[#000000DE] transition duration-75 rounded-lg  py-[6px]  group hover:bg-[#1976D214] " +
                      (!isSidebarOpen ? " justify-center pl-0" : " pl-[16px]") +
                      (activeLink === "register" && " bg-[#1976D214]")
                    }
                  >
                    <BdIcon
                      className={isSidebarOpen ? " w-[22px]" : "w-[28px]"}
                    />
                    {isSidebarOpen && (
                      <span className="flex-1 ml-8 text-left ">Registrare</span>
                    )}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={
                      "flex items-center p-2 text-[#000000DE] transition duration-75 rounded-lg  py-[6px]  group hover:bg-[#1976D214] " +
                      (!isSidebarOpen ? " justify-center pl-0" : " pl-[16px]") +
                      (activeLink === "reports" && " bg-[#1976D214]")
                    }
                  >
                    <BlankIcon
                      className={isSidebarOpen ? " w-[22px]" : "w-[26px]"}
                    />
                    {isSidebarOpen && (
                      <span className="flex-1 ml-8 text-left ">Rapoarte</span>
                    )}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
      <div
        className={
          "p-4  mt-[200px] mb-[141px]" +
          (isSidebarOpen ? " sm:ml-[283px]" : " sm:ml-[100px]")
        }
      >
        {children}
      </div>
    </>
  );
}

export default Sidebar;
