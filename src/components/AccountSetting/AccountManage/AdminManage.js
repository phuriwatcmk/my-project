import React from "react";
// import Button from "../UI/Button/Button";
import { Table } from "@mantine/core";

import DialogCard from "../../UI/Card/DaialogCard";
import AddAdminForm from "./AdminUI/FormUI/AddAdminForm";
import DelAdminForm from "./AdminUI/FormUI/DelAdminForm";
export default function AccountnManage() {
  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));
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
        <DialogCard
          buttonIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          }
          modalTitile="ลบบัญชี"
        >
          <DelAdminForm></DelAdminForm>
        </DialogCard>
        <DialogCard
          buttonIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          }
          modalTitile="แก้ไขบัญชีผู้ดูแลระบบ"
        >
          <AddAdminForm></AddAdminForm>
        </DialogCard>
      </div>
      <div className="mt-8 ">
        <Table striped highlightOnHover>
          <thead>
            <tr>
              <th>Element position</th>
              <th>Element name</th>
              <th>Symbol</th>
              <th>Atomic mass</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    </div>
  );
}
