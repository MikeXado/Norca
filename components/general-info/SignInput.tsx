"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import UploadIcon from "../../assets/sidebar/upload-icon.svg";
function SignInput() {
  const [signError, setSignError] = useState(false);

  const signInput = useRef<HTMLInputElement>(null);

  const handleSignInput = (e: ChangeEvent<HTMLInputElement> | null) => {
    const file = e?.target?.files?.[0];
    const maxSize = 3145728;
    if (file && file.size > maxSize) {
      setSignError(true);
      if (signInput.current) {
        signInput.current.value = "";
      }
    }

    //Handle file upload
  };
  return (
    <div className="flex items-center justify-center w-full mt-[24px]">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-[152px] border-2 px-2 text-center border-gray-300 border-dashed rounded-lg cursor-pointer bg-white "
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <div className="bg-[#1976D21F] py-[10px] px-[12px] rounded-full">
            <UploadIcon />
          </div>
          <p className="mb-2 mt-2 text-[16px] text-[#000000DE] ">
            <span className="text-[#1976D2] border-b border-[#1976D2]">
              Incarca speciment semnătură
            </span>{" "}
            sau drag and drop
          </p>
          <p className="text-sm text-[#0000008A] ">
            SVG, PNG, JPG or GIF (max. 3MB)
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          ref={signInput}
          accept=".svg, .png, .jpg, .jpeg, .gif"
          className="hidden"
          onChange={handleSignInput}
        />
      </label>
    </div>
  );
}

export default SignInput;
