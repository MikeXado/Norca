"use client";
import React from "react";

export default function Select({
  label,
  options,
}: {
  label: string;
  options: { id: number; value: string; name: string }[];
}) {
  return (
    <div className="relative w-full">
      <select className="border h-[56px] border-gray-300 rounded-md focus:border-indigo-500 outline-none py-2 px-4 block w-full">
        {options.map((el) => {
          return (
            <option key={el.id} value={el.value}>
              {el.name}
            </option>
          );
        })}
      </select>
      <label className="absolute top-0 left-3 bg-white px-2 -translate-y-1/2 text-gray-600 text-sm transition-all">
        {label}
      </label>
    </div>
  );
}
