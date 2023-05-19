import React, { useContext } from "react";
import InputWithLabelOnTop from "../ui/Input";
import Select from "../ui/Select";
import { LayoutContext } from "@/context/LayoutProvider";

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
            <Select
              label="Selectează cetățenia"
              options={[{ id: 1, name: "Romana", value: "Romana" }]}
            />
          </div>
          <div className="w-full">
            <InputWithLabelOnTop
              label="IDNP 13 cifre"
              placeholder="2002348245512"
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
            <InputWithLabelOnTop label="Cod fiscal" placeholder="123456789" />
          </div>
          <div className="w-full">
            <InputWithLabelOnTop label="Numele" placeholder="Ion" />
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
            <InputWithLabelOnTop label="Prenumele" placeholder="Ungureanu" />
          </div>
          <div className="w-full">
            <InputWithLabelOnTop
              label="Prenumele Tatălui"
              placeholder="Vasile"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SubForm;
