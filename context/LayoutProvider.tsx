"use client";
import { useState, createContext, useMemo, ReactNode } from "react";

interface ContextOpenType {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const defaultLayoutContext: ContextOpenType = {
  state: "block",
  setState: () => {},
};

export const LayoutContext =
  createContext<ContextOpenType>(defaultLayoutContext);

export default function LayoutProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState("block");

  return (
    <LayoutContext.Provider
      value={useMemo(() => ({ state, setState }), [state, setState])}
    >
      {children}
    </LayoutContext.Provider>
  );
}
