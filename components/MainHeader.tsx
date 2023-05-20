"use client";
import { Typography } from "@mui/material";
import BreadcrumbsLinks from "./breadcrumbs-links";
function MainHeader() {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div>
        <Typography variant="h4">BD Persoane fizice</Typography>
        <BreadcrumbsLinks />
      </div>

      <div className="lg:mt-0 mt-[24px]  space-y-[2] uppercase">
        <Typography
          variant="h6"
          className="block text-[#1976D2] font-mediun text-[20px]"
        >
          ID:<span>123456789</span>
        </Typography>
        <Typography className="text-[14px] text-[#00000099] font-medium">
          #: <span>NO123456</span>
        </Typography>
        <Typography className="text-[14px] text-[#00000099] font-medium">
          Ungureanu Ion
        </Typography>
        <Typography className="text-[14px] text-[#00000099] font-medium">
          IDNP: <span>2002348245512</span>
        </Typography>
      </div>
    </div>
  );
}

export default MainHeader;
