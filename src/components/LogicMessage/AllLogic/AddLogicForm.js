import React from "react";
import { Text, MultiSelect, Select, TextInput, Button } from "@mantine/core";
import DialogCard from "../../UI/Card/DaialogCard";
import { ReactComponent as Trash } from "../../../assets/icon/trash.svg";

export default function AddLogicForm() {
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
    <form className="">
      <TextInput label="ชื่อ Logic" placeholder="ตั้งชื่อ logic" />
      <TextInput
        label="Link Paperform"
        placeholder="แนบลิงก์ paperform ที่ผูกกับ Logic นี้"
      />
      <MultiSelect
        data={data}
        label="Hidden Tag"
        placeholder="เลือก Hidden Tag ที่ใช้ผูกกับ Logic นี้"
      />
      <Text>Condition</Text>
      <div className="flex flex-row">
        <div class="flex-1">
          <TextInput label="" placeholder="กรอก Key จาก Paperform   " />
        </div>
        <div className="flex-1">
          <Select className="" label="" placeholder="is" data={[]}></Select>
        </div>
        <div className="flex-1">
          <TextInput label="" placeholder="Answer ..." />
        </div>
        <div className="flex-1">
          <DialogCard
            buttonIcon={
              <Trash/>
            }
            modalTitile="ลบ Logic"
          ></DialogCard>
        </div>
      </div>
      <Button
        classNames={{
          root: "z-40 mt-1 border rounded-full bg-transparent  hover:bg-transparent border-black text-black border-blue",
          label: "",
        }}
        type="button"
      >
        + เพิ่ม Condition
      </Button>
    </form>
  );
}
