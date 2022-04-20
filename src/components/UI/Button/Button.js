import React from "react";

export default function Button(props) {
  return (
    <button
      type={props.type || "button"}
      className={
        "bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
      }
      value="Login"
    >
      {props.children}
    </button>
  );
}
