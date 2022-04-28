import React from "react";
import { ReactComponent as Link } from "../../../assets/icon/link.svg";

export default function LinkUI({href, name}) {
  return (
    <a href={href} className="flex text-blue-800 underline">
        {name || "link"}
      <Link className="mx-2 self-center" />
    </a>
  );
}
