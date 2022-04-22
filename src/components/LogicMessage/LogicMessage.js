import React from "react";
import AllLogic from "./AllLogic/AllLogic";
import AllLMsg from "./AllMessage/AllMsg";

export default function LogicMessage() {
  return (
    <div>
      <div className="text-2xl md:text-xl lg:text-4xl font-bold tracking-wide">
        Logic และ Message
      </div>
      <AllLogic></AllLogic>
      <AllLMsg></AllLMsg>
    </div>
  );
}
