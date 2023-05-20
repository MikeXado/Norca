/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { usePathname, useSearchParams } from "next/navigation";
import { tabs } from "@/constants/Tabs";

interface PathMappingType {
  [key: string]: string;
}

export default function BreadcrumbsLinks() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "1";
  const pathMappings: PathMappingType = {
    individuals: "Persoane Fizice",
  };

  const path = pathname.split("/").map((el, index) => {
    if (index === 0) {
      return "Baze de Date";
    } else if (index === 1 && el in pathMappings) {
      return pathMappings[el];
    } else {
      return el;
    }
  });

  const activeTab = tabs.find((el) => el.id === Number(tab));

  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <div role="presentation" className="mt-[54.5px]" onClick={handleClick}>
      <Breadcrumbs
        maxItems={2}
        separator={<KeyboardArrowRightIcon />}
        aria-label="breadcrumb"
      >
        {path.map((li) => {
          return (
            <Link key={li} underline="hover" color="inherit" href="#">
              {li}
            </Link>
          );
        })}

        <Typography color="#00000099">{activeTab?.name}</Typography>
      </Breadcrumbs>
    </div>
  );
}
