import React from "react";
import { ReactComponent as Usericon } from "../../../assets/icon/userIcon.svg";

export default function UserId({ userId }) {
  return (
    <div className="flex static">
      <div className="absolute -ml-3 self-center">
        <Usericon />
      </div>
      <div className="pt-0.5 px-5 max-w-fit h-7 border rounded-full text-black text-center">
        {userId}
      </div>
    </div>
  );
}
