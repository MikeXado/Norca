"use client";
import React from "react";

export default function InputWithLabelOnTop({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="relative w-full">
      <input
        placeholder={placeholder}
        className="border border-gray-300 h-[56px] rounded-md focus:border-indigo-500 outline-none py-2 px-4 block w-full appearance-none"
      />
      <label className="absolute top-0 left-3 bg-white px-2 -translate-y-1/2 text-gray-600 text-sm transition-all">
        {label}
      </label>
    </div>
  );
}
