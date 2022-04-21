import React from "react";

export default function Button(props) {
  return (
    <button
      type={props.type || "button"}
      className={props.className}
      value={props.value}
    >
      {props.children}
    </button>
  );
}
