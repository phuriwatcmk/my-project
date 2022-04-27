import React from "react";
import { ReactComponent as Usericon } from "../../../assets/icon/userIcon.svg";

export default function UserId({ userId }) {
  return (
    <div className="flex static">
      <div className="absolute -ml-3 self-center">
        <Usericon />
      </div>
      <div className="w-20 h-7 border rounded-full text-black text-center ">
        {userId}
      </div>
    </div>
  );
}
