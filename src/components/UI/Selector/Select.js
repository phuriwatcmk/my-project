import React from "react";
import { Select } from "@mantine/core";

export default function SelectMenu({ label, data, placeholder, className }) {
  return (
    <Select
      className={className}
      label={label || ""}
      placeholder={placeholder}
      nothingFound="No options"
      data={data}
    />
  );
}
