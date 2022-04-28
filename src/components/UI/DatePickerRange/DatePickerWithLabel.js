import { useState } from "react";
import { DateRangePicker } from "@mantine/dates";
import { ReactComponent as Calendar } from "../../../assets/icon/calendar.svg";

export default function DatePickerWithLabel({ label, placeholder }) {
  const [value, setValue] = useState("");

  return (
    <DateRangePicker
      classNames={{
        root: "",
        label: "mr-2 self-center",
        dropdown: "rounded-lg",
        arrow: "w-0 h-0",
        calendarBase: "divide-x",
        selected: "!bg-red-400 !rounded-full",
        inRange: "rounded-none",
        calendarHeaderLevel: "!font-2xl",
      }}
      label={label}
      placeholder={placeholder}
      value={value}
      firstDayOfWeek="sunday"
      onChange={setValue}
      amountOfMonths={2}
      icon={<Calendar />}
    />
  );
}
