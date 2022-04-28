import { useState } from "react";
import { DateRangePicker } from "@mantine/dates";
import { ReactComponent as Calendar } from "../../../assets/icon/calendar.svg";

export default function DatePickerWithLabel({ label, placeholder }) {
  const [value, setValue] = useState("");

  return (
    <DateRangePicker
      styles={{
        calendarBase: { color: "red" },
        calendarHeader: { color: "black" },
        calendarHeaderControl: { color: "gray" },
        calendarHeaderLevel: {
          color: "black",
          fontSize: "large",
        },
        yearPickerControlActive: { color: "black" },
        monthPickerControlActive: { color: "black" },
        calendarHeaderLevelIcon: { color: "white !important" },
        weekday: { color: "gray" },
        cell: { color: "green !important" },
        weekend: { color: "black !important" },
        inRange: { backgroundColor: "#FFEEB9 !important" },
        firstInRange: {
          color: "black !important",
          backgroundColor: "#FFCF25 !important",
          borderRadius: "24px !important",
        },
        lastInRange: {
          color: "black !important",
          backgroundColor: "#FFCF25 !important",
          borderRadius: "24px !important",
        },
        selected: {
          color: "black !important",
          backgroundColor: "#FFCF25 !important",
          borderRadius: 24,
        },
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
