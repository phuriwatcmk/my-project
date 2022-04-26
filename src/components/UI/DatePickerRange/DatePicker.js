import React from "react";
import { ReactComponent as Calendar } from "../../../assets/icon/calendar.svg";
import { DatePicker } from "@mantine/dates";

export default function DatePickerUI({label, placeholder}) {
  return (
    <DatePicker
      label={label}
      placeholder={placeholder}
      icon={<Calendar />}
    ></DatePicker>
  );
}
