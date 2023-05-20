import React, { useContext } from "react";

import { LayoutContext } from "@/context/LayoutProvider";
import BasicSelect from "../ui/Select";
import TextField from "@mui/material/TextField/TextField";
function SubForm() {
  const { state } = useContext(LayoutContext);
  return (
    <>
      <div className="bg-white p-[25px] mt-[24px] shadow-md rounded-md  space-y-[16px]">
        <div
          className={
            state === "block"
              ? "xl:flex xl:items-center xl:space-x-[24px] xl:space-y-0  space-y-[24px]"
              : "  space-y-[24px]"
          }
        >
          <div className="w-full">
            <BasicSelect
              width="100%"
              label="Selectează cetățenia"
              options={[{ id: 1, name: "Romana", value: "Romana" }]}
            />
          </div>
          <div className="w-full">
            <TextField
              id="outlined-number"
              fullWidth
              label="IDNP 13 cifre"
              type="number"
              placeholder="2002333888223"
            />
          </div>
        </div>

        <div
          className={
            state === "block"
              ? "xl:flex xl:items-center xl:space-x-[24px] xl:space-y-0  space-y-[24px]"
              : "  space-y-[24px]"
          }
        >
          <div className="w-full">
            <TextField
              id="outlined-number"
              fullWidth
              label="Cod fiscal"
              type="text"
              placeholder="12312wwwdsk"
            />
          </div>
          <div className="w-full">
            <TextField
              id="outlined-number"
              fullWidth
              label="Numele"
              type="text"
              placeholder="Ion"
            />
          </div>
        </div>

        <div
          className={
            state === "block"
              ? "xl:flex xl:items-center xl:space-x-[24px] xl:space-y-0  space-y-[24px]"
              : "  space-y-[24px]"
          }
        >
          <div className="w-full">
            <TextField
              id="outlined-number"
              fullWidth
              label="Prenumele"
              type="text"
              placeholder="Ungureanu"
            />
          </div>
          <div className="w-full">
            <TextField
              id="outlined-number"
              fullWidth
              label="Prenumele Tatălui"
              type="text"
              placeholder="Vasile"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SubForm;
