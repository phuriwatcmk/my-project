import { useState } from "react";
import { DateRangePicker } from "@mantine/dates";

export default function DateRange({ label, placeholder }) {
  const [value, setValue] = useState("");

  return (
    <DateRangePicker
      classNames={{label: ""}}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={setValue}
      amountOfMonths={2}
    />
  );
}
