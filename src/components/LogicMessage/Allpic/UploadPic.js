import React from "react";
import { Select, Button } from "@mantine/core";

export default function UploadPic() {
  return (
    <form className="">
      <Select
        required
        label="เลือก Logic"
        data={[]}
        placeholder="เลือก Logic ที่เคยสร้างไว้"
      />
      <Button
        classNames={{
          root: "z-40 mt-1 border rounded-full bg-transparent  hover:bg-transparent border-black text-black border-blue",
          label: "",
        }}
        type="button"
      >
        + อัพโหลดรูปภาพ
      </Button>
    </form>
  );
}
