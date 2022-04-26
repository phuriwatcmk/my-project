import React from "react";
import { Select, Textarea } from "@mantine/core";

export default function AddMsgForm() {
  return (
    <div>
      {" "}
      <Select
        required
        className="mt-1"
        label="เลือก Logic"
        placeholder="เลือก Logic ที่เคยสร้างไว้"
        data={[]}
      ></Select>
      <Textarea
        placeholder="Your comment"
        label="พิมพ์ข้อความที่ต้องการได้เลย"
        required
      />
    </div>
  );
}
