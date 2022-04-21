import React from "react";
import Button from "../UI/Button/Button";
import { Table } from "@mantine/core";
import DialogCard from "../UI/Card/DaialogCard";

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
      <div className="mt-8 ">
        {/* <Button
          className="bg-blue-500 rounded-full p-2 inline-flex items-center justify-center"
          type=""
          value=""
        >
          + เพิ่มบัญชีผู้ดูแลระบบ
        </Button> */}
        <DialogCard></DialogCard>
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
