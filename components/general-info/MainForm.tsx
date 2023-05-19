import React from "react";
import InputWithLabelOnTop from "../ui/Input";
import PlusIcon from "../../assets/sidebar/plus-icon.svg";
import Select from "../ui/Select";

function MainForm() {
  return (
    <>
      <div className="bg-white p-[25px] shadow-md rounded-md  space-y-[16px]">
        <div className="flex items-center ">
          <div className="w-[20%]">
            <Select
              label="Cod"
              options={[{ value: "+373", name: "+373", id: 1 }]}
            />
          </div>
          <div className="space-x-[33px] flex items-center ml-[16px] w-full">
            <input
              type="number"
              placeholder="Număr"
              className="border h-[56px] border-gray-300 rounded-md focus:border-indigo-500 outline-none py-2 px-4 block w-full appearance-none"
            />
            <button>
              <PlusIcon />
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-[33px]">
          <InputWithLabelOnTop label="Email" placeholder="mail@gmail.com" />
          <button>
            <PlusIcon />
          </button>
        </div>

        <input
          placeholder="Rezidență fiscală"
          className="border h-[56px] border-gray-300 rounded-md focus:border-indigo-500 outline-none py-2 px-4 block w-full appearance-none"
        />

        <input
          placeholder="Rezidență valutară"
          className="border h-[56px] border-gray-300 rounded-md focus:border-indigo-500 outline-none py-2 px-4 block w-full appearance-none"
        />
        <input
          placeholder="Sex"
          className="border h-[56px] border-gray-300 rounded-md focus:border-indigo-500 outline-none py-2 px-4 block w-full appearance-none"
        />
      </div>
    </>
  );
}

export default MainForm;
