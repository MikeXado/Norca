"use client";
import { useState, createContext, useMemo, ReactNode } from "react";

interface ContextOpenType {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultSidebarContext: ContextOpenType = {
  state: false,
  setState: () => {},
};

export const SidebarContext = createContext<ContextOpenType>(
  defaultSidebarContext
);

export default function SidebarProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(false);

  return (
    <SidebarContext.Provider
      value={useMemo(() => ({ state, setState }), [state, setState])}
    >
      {children}
    </SidebarContext.Provider>
  );
}
