import { useState } from "react";
import { DateRangePicker } from "@mantine/dates";
import { ReactComponent as Calendar } from "../../../assets/icon/calendar.svg";

export default function DateRange({ label, placeholder }) {
  const [value, setValue] = useState("");

  return (
    <DateRangePicker
      classNames={
        {
          // root: "flex flex-inline",
          // label: "mr-2 self-center",
          // dropdown: "rounded-lg",
          // arrow: "w-0 h-0",
          // calendarBase: "divide-x",
          // selected: "!bg-red-400 !rounded-full",
          // inRange: "rounded-none",
          // calendarHeaderLevel: "!font-2xl",
        }
      }
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
      onChange={setValue}
      firstDayOfWeek="sunday"
      initiallyOpened={false}
      amountOfMonths={2}
      icon={<Calendar />}
    />
  );
}
