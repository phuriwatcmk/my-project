import React from "react";
import {
  createTable,
  getCoreRowModelSync,
  useTableInstance,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { Table, Pagination, Button } from "@mantine/core";

//icon
import { ReactComponent as ArrowLeft } from "../../../assets/icon/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../../assets/icon/ArrowRight.svg";

export default function TableAdmin({ elements, defaultColumns }) {

  const table = createTable().setRowType();

  // const defaultColumns = table.createColumns([
  //   table.createDataColumn((row) => row.selected, {
  //     id: "selected",
  //     cell: (info) => info.value,
  //     header: () => <span>Selected</span>,
  //   }),
  //   table.createDataColumn((row) => row.ideaName, {
  //     id: "ideaName",
  //     cell: (info) => info.value,
  //     header: () => <span>Ideaname</span>,
  //   }),
  //   table.createDataColumn((row) => row.writter, {
  //     id: "writter",
  //     cell: (info) => info.value,
  //     header: () => <span>Writter</span>,
  //   }),
  //   table.createDataColumn((row) => row.userTag, {
  //     id: "userTag",
  //     cell: (info) => (
  //       <>
  //         <div className="flex flex-nowrap max-w-xs overflow-x-auto scrollbarTable">
  //           <div>
  //             <Button className="mr-1 w-auto h-8 text-xs text-white  bg-blue-800 hover:bg-indigo-100 rounded-full focus:shadow-outline transition-colors duration-150">
  //               {info.value}
  //             </Button>
  //           </div>
  //           <div>
  //             <Button className="mr-1 w-auto h-8 text-xs text-white  bg-blue-800 hover:bg-indigo-100 rounded-full focus:shadow-outline transition-colors duration-150">
  //               {info.value}
  //             </Button>
  //           </div>
  //           <div>
  //             <Button className="mr-1 w-auto h-8 text-xs text-white  bg-blue-800 hover:bg-indigo-100 rounded-full focus:shadow-outline transition-colors duration-150">
  //               {info.value}
  //             </Button>
  //           </div>
  //           <div>
  //             <Button className="mr-1 w-auto h-8 text-xs text-white  bg-blue-800 hover:bg-indigo-100 rounded-full focus:shadow-outline transition-colors duration-150">
  //               {info.value}
  //             </Button>
  //           </div>
  //           {/* <div>
  //             <DialogCard
  //               buttonIcon={<Pencil />}
  //               modalTitile="แก้ไขกลุ่มโรงเรียน"
  //             >
  //               <AddSchoolForm></AddSchoolForm>
  //             </DialogCard>
  //           </div> */}
  //         </div>
  //       </>
  //     ),
  //     header: () => <span>UserTag</span>,
  //   }),
  //   table.createDataColumn((row) => row.hiddenTagByAdmin, {
  //     id: "hiddenTagByAdmin",
  //     cell: (info) => (
  //       <>
  //         <div className="flex flex-nowrap max-w-xs overflow-x-auto scrollbarTable">
  //           <div>
  //             <Button className="mr-1 w-auto h-8 text-xs text-white  bg-red-400 hover:bg-indigo-100 rounded-full focus:shadow-outline transition-colors duration-150">
  //               {info.value}
  //             </Button>
  //           </div>
  //           <div>
  //             <Button className="mr-1 w-auto h-8 text-xs text-white  bg-red-400  hover:bg-indigo-100 rounded-full focus:shadow-outline transition-colors duration-150">
  //               {info.value}
  //             </Button>
  //           </div>
  //           <div>
  //             <Button className="mr-1 w-auto h-8 text-xs text-white  bg-red-400  hover:bg-indigo-100 rounded-full focus:shadow-outline transition-colors duration-150">
  //               {info.value}
  //             </Button>
  //           </div>
  //           <div>
  //             <Button className="mr-1 w-auto h-8 text-xs text-white  bg-red-400  hover:bg-indigo-100 rounded-full focus:shadow-outline transition-colors duration-150">
  //               {info.value}
  //             </Button>
  //           </div>
  //           {/* <div>
  //         <DialogCard
  //           buttonIcon={<Pencil />}
  //           modalTitile="แก้ไขกลุ่มโรงเรียน"
  //         >
  //           <AddSchoolForm></AddSchoolForm>
  //         </DialogCard>
  //       </div> */}
  //         </div>
  //       </>
  //     ),
  //     header: () => <span>HiddenTagByadmin</span>,
  //   }),
  //   table.createDataColumn((row) => row.receivedUser, {
  //     id: "receivedUser",
  //     cell: (info) => info.value,
  //     header: () => <span>ReceivedUser</span>,
  //   }),
  //   table.createDataColumn((row) => row.created, {
  //     id: "created",
  //     cell: (info) => info.value,
  //     header: () => <span>Created</span>,
  //   }),
  //   table.createDataColumn((row) => row.updated, {
  //     id: "updated",
  //     cell: (info) => info.value,
  //     header: () => <span>Updated</span>,
  //   }),
  //   table.createDataColumn((row) => row.id, {
  //     id: "id",
  //     cell: (info) => (
  //       <>
  //         <div>
  //           <DialogCard
  //             buttonIcon={<Pencil />}
  //             modalTitile="แก้ไขกลุ่มโรงเรียน"
  //           >
  //             <AddSchoolForm value={info.value}></AddSchoolForm>
  //           </DialogCard>
  //         </div>
  //       </>
  //     ),
  //     header: () => <span></span>,
  //   }),
  // ]);

  const [data, setData] = React.useState(() => [...elements]);

  const [columns] = React.useState(() => [...defaultColumns]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
    pageCount: -1, // -1 allows the table to calculate the page count for us via instance.getPageCount()
  });
  const [page, setPage] = React.useState(1);
  const instance = useTableInstance(table, {
    data,
    columns,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,

    getCoreRowModel: getCoreRowModelSync(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <>
      <div className="border rounded-2xl mt-4">
        <Table
          striped
          verticalSpacing="sm"
          fontSize="md"
          sx={{
            borderSpacing: "0",
            thead: {
              "> tr > th": {
                borderBottom: "0px solid #ffffff !important",
              },
              "> tr:nth-of-type(even) > th:first-of-type": {
                borderTopLeftRadius: 15,
              },
            },
            tbody: {
              "> tr > td": {
                borderBottom: "0px solid #ffffff !important",
              },
              "> tr:nth-of-type(even) > td:first-of-type": {
                backgroundColor: "#E5F3FA",
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
              },
              "> tr:nth-of-type(even) > td:last-child": {
                backgroundColor: "#E5F3FA",
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
              },
              "> tr:nth-of-type(even)": {
                backgroundColor: "#E5F3FA",
              },
              "> tr:nth-of-type(odd)": {
                backgroundColor: "#ffffff !important",
              },
              "> tr:nth-of-type(odd) > td:first-of-type": {
                backgroundColor: "#ffffff !important",
                borderBottomLeftRadius: 15,
              },
              "> tr:nth-of-type(odd) > td:last-child": {
                backgroundColor: "#ffffff !important",
                borderBottomRightRadius: 15,
              },
            },
          }}
          className="border-separate bg-white px-2 pb-2 mt-5"
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
        {instance.getOverallProgress() < 1 ? (
          <div className="p-2">
            <div>Loading data...</div>
            <div>
              <progress value={instance.getOverallProgress()} />
            </div>
          </div>
        ) : null}
        <div className="flex justify-end mt-4 mb-4">
          <Button
            className="mr-1 p-1 w-10 h-10 text-black hover:bg-indigo-100 rounded-full focus:shadow-outline transition-colors duration-150"
            onClick={() => {
              setPage((prev) => {
                if (prev >= 1) {
                  instance.previousPage();
                  return prev - 1;
                }
              });
              // return instance.previousPage();
            }}
            disabled={!instance.getCanPreviousPage()}
          >
            <ArrowLeft />
          </Button>
          <Pagination
            classNames={{
              item: "text-black border-0",
              active: "bg-green-500 text-black",
              root: "!text-black",
              Button: "bg-red-500",
            }}
            withControls={false}
            page={page}
            onChange={(e) => {
              // console.log(e);
              const page = e ? Number(e) - 1 : 0;
              instance.setPageIndex(page);
              setPage(e);
            }}
            total={instance.getPageCount()}
            radius="xl"
            size="lg"
          />
          <Button
            className="ml-1 p-1 w-10 h-10 text-black hover:bg-indigo-100 rounded-full focus:shadow-outline transition-colors duration-150"
            onClick={() => {
              setPage((prev) => {
                if (prev + 1 >= 1) {
                  instance.nextPage();
                  return prev + 1;
                }
              });
            }}
            disabled={!instance.getCanNextPage()}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
}
