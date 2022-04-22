import { useState } from "react";
import { DateRangePicker } from "@mantine/dates";

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
      styles={{ cell: {} }}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={setValue}
      amountOfMonths={2}
      icon={
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </>
      }
    />
  );
}
