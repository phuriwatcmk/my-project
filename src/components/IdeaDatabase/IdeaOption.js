import React from "react";
import Select from "../UI/Selector/Select";
import DateRange from "../UI/DatePickerRange/DatePickerRange";

export default function IdeaOption() {
  return (
    <div className="mt-8">
      <div className="flex flex-row justify-between gap-8 pb-4">
        <div className="basis-1/6">
          <Select placeholder="เรียงลำดับโดย" data={[]}></Select>
        </div>
        <div className="basis-1/6">
          <Select placeholder="กรองไอเดีย" data={[]}></Select>
        </div>
        <div className="basis-1/4">
          <DateRange label="" placeholder="เลือกช่วงวันที่"></DateRange>
        </div>
        <div className="basis-1/4">
          <DateRange label="" placeholder="เลือกช่วงวันที่"></DateRange>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-8">
        <div className="basis-1/2">
          <Select placeholder="เรียงลำดับโดย" data={[]}></Select>
        </div>
        <div className="basis-1/2">
          <Select placeholder="กรองไอเดีย" data={[]}></Select>
        </div>
      </div>

    </div>
  );
}
