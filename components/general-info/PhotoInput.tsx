"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import UploadIcon from "../../assets/sidebar/upload-icon.svg";
function PhotoInput() {
  const [photoError, setPhotoError] = useState(false);
  const photoInput = useRef<HTMLInputElement>(null);
  const handlePhotoInput = (e: ChangeEvent<HTMLInputElement> | null) => {
    const file = e?.target?.files?.[0];
    const maxSize = 2097152;
    if (file && file.size > maxSize) {
      setPhotoError(true);
      if (photoInput.current) {
        photoInput.current.value = "";
      }
    }

    //Handle file upload
  };

  return (
    <div className="flex items-center justify-center w-full ">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-[152px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white "
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <div className="bg-[#1976D21F] py-[10px] px-[12px] rounded-full">
            <UploadIcon />
          </div>
          <p className="mb-2 mt-2 text-[16px] text-[#000000DE] ">
            <span className="text-[#1976D2] border-b border-[#1976D2]">
              Incarca fotografie
            </span>{" "}
            sau drag and drop
          </p>
          <p className="text-sm text-[#0000008A] ">
            PNG, JPG or GIF (max. 2MB)
          </p>
        </div>
        <input
          id="dropzone-file"
          onChange={handlePhotoInput}
          type="file"
          ref={photoInput}
          accept=".png, .jpg, .jpeg, .gif"
          className="hidden"
        />
      </label>
    </div>
  );
}

export default PhotoInput;
