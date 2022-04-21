import React from "react";
import { Select } from "@mantine/core";

export default function SelectMenu({label,data,placeholder}) {
  return (
    <Select
      label={label || ""}
      placeholder={placeholder}
      nothingFound="No options"
      data={data}
    />
  );
}
