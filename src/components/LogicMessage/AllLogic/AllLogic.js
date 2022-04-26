import React from "react";
import { Table } from "@mantine/core";

import DialogCard from "../../UI/Card/DaialogCard";
import AddLogicForm from "./AddLogicForm";

export default function AllLogic() {
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
      <div className="mt-16 text-xl md:text-xl lg:text-2xl tracking-wide">
        Logic ทั้งหมด
      </div>
      <div className="mt-8 ">
        <DialogCard
          buttonTitle="+ เพิ่ม Logic"
          modalTitile="เพิ่ม Logic"
        >
          {/* child add logic */}
          <AddLogicForm></AddLogicForm>
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
