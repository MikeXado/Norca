import GeneralInfo from "@/components/GeneralInfo";
import Tabs from "@/components/Tabs";
import React from "react";

function Page() {
  return (
    <>
      <Tabs>
        <GeneralInfo />
        <div>APTITUDINI PERSONALE</div>
        <div>STARE CIVILA</div>
        <div>ACTELE DE IDENTITATE</div>
        <div>ADRESA</div>
        <div>ACTIVITATEA DESFASURATA</div>
        <div>DATE STATISTICE</div>
        <div>AML</div>
      </Tabs>
    </>
  );
}

export default Page;
