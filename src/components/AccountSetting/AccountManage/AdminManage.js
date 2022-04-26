import React from "react";
import { Box } from "@mantine/core";

import { ReactComponent as Trash } from "../../../assets/icon/trash.svg";
import { ReactComponent as Pencil } from "../../../assets/icon/pencil.svg";

import DialogCard from "../../UI/Card/DaialogCard";
import AddAdminForm from "./AdminUI/FormUI/AddAdminForm";
import DelAdminForm from "./AdminUI/FormUI/DelAdminForm";
import Table from "./Table";

export default function AccountnManage() {
  return (
    <div>
      <div className="text-2xl md:text-xl lg:text-4xl font-bold tracking-wide">
        จัดการบัญชีผู้ดูแลระบบ
      </div>
      {/* <AdminTagSearch></AdminTagSearch> */}
      <div className="mt-8 ">
        <DialogCard
          buttonTitle="+ เพิ่มบัญชีผู้ดูแลระบบ"
          modalTitile="เพิ่มบัญชีผู้ดูแลระบบ"
        >
          <AddAdminForm></AddAdminForm>
        </DialogCard>
        <DialogCard buttonIcon={<Trash />} modalTitile="ลบบัญชี">
          <DelAdminForm></DelAdminForm>
        </DialogCard>
        <DialogCard buttonIcon={<Pencil />} modalTitile="แก้ไขบัญชีผู้ดูแลระบบ">
          <AddAdminForm></AddAdminForm>
        </DialogCard>
      </div>
        <Box className="mt-8">
          <Table/>
        </Box>
    </div>
  );
}
