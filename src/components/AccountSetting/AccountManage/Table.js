import React from "react";
import {
  createTable,
  getCoreRowModelSync,
  useTableInstance,
} from "@tanstack/react-table";

import { Table } from "@mantine/core";

export default function TableAdmin() {
  // id: 1,
  // Selected: "Growth mindset",
  // Ideaname: "ชื่อไอเดียชื่อไอเดีย",
  // Writter: "C",
  // UserTag: "วิทยาศาสตร์",
  // HiddenTagByadmin: "วิทยาศาสตร์",
  // ReceivedUser: "123456",
  // Created: "01/01/22",
  // Updated: "01/01/22",
  const elements = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: 24,
      visits: 100,
      status: "In Relationship",
      progress: 50,
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: 40,
      visits: 40,
      status: "Single",
      progress: 80,
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: 45,
      visits: 20,
      status: "Complicated",
      progress: 10,
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: 45,
      visits: 20,
      status: "Complicated",
      progress: 10,
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: 45,
      visits: 20,
      status: "Complicated",
      progress: 10,
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: 45,
      visits: 20,
      status: "Complicated",
      progress: 10,
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: 45,
      visits: 20,
      status: "Complicated",
      progress: 10,
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: 45,
      visits: 20,
      status: "Complicated",
      progress: 10,
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: 45,
      visits: 20,
      status: "Complicated",
      progress: 10,
    },
  ];

  const table = createTable().setRowType();

  const defaultColumns = table.createColumns([
    table.createDataColumn((row) => row.firstName, {
      id: "firstName",
      cell: (info) => info.value,
      header: () => <span>Selected</span>,
    }),
    table.createDataColumn((row) => row.lastName, {
      id: "lastName",
      cell: (info) => info.value,
      header: () => <span>Ideaname</span>,
    }),
    table.createDataColumn((row) => row.firstName, {
      id: "firstName",
      cell: (info) => info.value,
      header: () => <span>Writter</span>,
    }),
    table.createDataColumn((row) => row.lastName, {
      id: "lastName",
      cell: (info) => info.value,
      header: () => <span>UserTag</span>,
    }),
    table.createDataColumn((row) => row.firstName, {
      id: "firstName",
      cell: (info) => info.value,
      header: () => <span>HiddenTagByadmin</span>,
    }),
    table.createDataColumn((row) => row.lastName, {
      id: "lastName",
      cell: (info) => info.value,
      header: () => <span>ReceivedUser</span>,
    }),
    table.createDataColumn((row) => row.firstName, {
      id: "firstName",
      cell: (info) => info.value,
      header: () => <span>Created</span>,
    }),
    table.createDataColumn((row) => row.lastName, {
      id: "lastName",
      cell: (info) => info.value,
      header: () => <span>Updated</span>,
    }),
  ]);

  const [data, setData] = React.useState(() => [...elements]);
  const [columns] = React.useState(() => [...defaultColumns]);

  const instance = useTableInstance(table, {
    data,
    columns,
    getCoreRowModel: getCoreRowModelSync(),
  });

  return (
    <Table
      striped
      verticalSpacing="lg" fontSize="lg"
      sx={{
        "border-spacing": 0,
        tbody: {
            "> tr > td": {
                borderBottom: "0px solid #ffffff !important",
            },
          "> tr:nth-child(even) > td:first-child": {
            backgroundColor: "#E5F3FA",
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
          },
          "> tr:nth-child(even) > td:last-child": {
            backgroundColor: "#E5F3FA",
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
          },
          "> tr:nth-child(even)": {
            backgroundColor: "#E5F3FA",
          },
          "> tr:nth-of-type(odd)": {
            backgroundColor: "#ffffff !important",
          },
          "> tr:nth-of-type(odd) > td:first-child": {
            backgroundColor: "#ffffff !important",
            borderBottomLeftRadius: 15,
          },
          "> tr:nth-of-type(odd) > td:last-child": {
            backgroundColor: "#ffffff !important",
            borderBottomRightRadius: 15,
          },
        },
      }}
      className="border-separate border rounded-2xl bg-white"
      {...instance.getTableProps()}
    >
      <thead>
        {instance.getHeaderGroups().map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((header) => (
              <th {...header.getHeaderProps()}>
                {header.isPlaceholder ? null : header.renderHeader()}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...instance.getTableBodyProps()}>
        {instance.getRowModel().rows.map((row) => (
          <tr {...row.getRowProps()}>
            {row.getVisibleCells().map((cell) => (
              <td {...cell.getCellProps()}>{cell.renderCell()}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
