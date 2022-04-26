import React from "react";
import { Group, TextInput } from "@mantine/core";
import { ReactComponent as SearchIco } from "../../../assets/icon/search.svg";

export default function Search({ placeholder }) {
  return (
    <TextInput
      placeholder={placeholder}
      radius="xl"
      label=""
      rightSection={<SearchIco />}
    />
  );
}
