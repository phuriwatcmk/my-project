import React from "react";
import { ReactComponent as Usericon } from "../../../assets/icon/userIcon.svg";

export default function UserName({ username }) {
  return (
    <div className="flex static">
      <div className="absolute self-center">
        <Usericon />
      </div>
      <div className="ml-5 w-20 h-7 text-black text-center ">
        {username}
      </div>
    </div>
  );
}
