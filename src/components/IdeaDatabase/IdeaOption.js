import React from "react";
import Select from "../UI/Selector/Select";
import DateRange from "../UI/DatePickerRange/DatePickerRange";
import Search from "../UI/Search/Search";
import HiddenTag from "../UI/HiddenTag/HiddenTag";

export default function IdeaOption() {
  const data = [
    { value: "react", label: "React" },
    { value: "ng", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "vue", label: "Vue" },
    { value: "riot", label: "Riot" },
    { value: "next", label: "Next.js" },
    { value: "blitz", label: "Blitz.js" },
  ];
  return (
    <div className="mt-8">
      <div className="flex flex-row justify-between gap-8 pb-4">
        <div className="basis-1/6">
          <Select
            placeholder="เรียงลำดับโดย"
            data={["ล่าสุด", "ยอดนิยม"]}
          ></Select>
        </div>
        <div className="basis-1/6">
          <Select
            placeholder="กรองไอเดีย"
            data={["ไอเดียปักหมุด", "insKru Selected"]}
          ></Select>
        </div>
        <div className="basis-1/4">
          <DateRange label="Created:" placeholder="เลือกช่วงวันที่"></DateRange>
        </div>
        <div className="basis-1/4">
          <DateRange label="Updated:" placeholder="เลือกช่วงวันที่"></DateRange>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-8">
        <div className="basis-1/2">
          <HiddenTag hiddenTagData={data} />
        </div>
        <div className="basis-1/2">
          <Search placeholder="ค้นหาผ่านชื่อไอเดีย นามปากกาคนเขียน "></Search>
        </div>
      </div>
    </div>
  );
}
