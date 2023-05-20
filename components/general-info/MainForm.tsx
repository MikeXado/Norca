import React from "react";
import PlusIcon from "../../assets/sidebar/plus-icon.svg";
import { TextField } from "@mui/material";
import BasicSelect from "../ui/Select";

function MainForm() {
  return (
    <>
      <div className="bg-white p-[25px] shadow-md rounded-md  space-y-[16px]">
        <div className="flex items-center ">
          <BasicSelect
            width="20%"
            label="Cod"
            options={[{ name: "+373", id: 1, value: 373 }]}
          />

          <div className="space-x-[33px] flex items-center ml-[16px] w-full">
            <TextField
              id="outlined-number"
              fullWidth
              type="number"
              placeholder="Număr"
            />
            <button>
              <PlusIcon />
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-[33px]">
          <TextField
            id="outlined-number"
            fullWidth
            label="Email"
            type="text"
            placeholder="mail@gmail.com"
          />

          <button>
            <PlusIcon />
          </button>
        </div>

        <TextField
          id="outlined-number"
          fullWidth
          type="text"
          placeholder="Rezidență fiscală"
        />
        <TextField
          id="outlined-number"
          fullWidth
          type="text"
          placeholder="Rezidență valutară"
        />
        <TextField
          id="outlined-number"
          fullWidth
          type="text"
          placeholder="Sex"
        />
      </div>
    </>
  );
}

export default MainForm;
