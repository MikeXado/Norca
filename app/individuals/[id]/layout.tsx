import MainHeader from "@/components/MainHeader";
import LayoutProvider from "@/context/LayoutProvider";
import React from "react";

function IndividualLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider>
      <MainHeader />
      {children}
    </LayoutProvider>
  );
}

export default IndividualLayout;
