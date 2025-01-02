import { ColumnFiltersState, createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import React from "react";
import { useEffect } from "react";

//TData
type User = {
    firstName: string
    lastName: string
    age: number
    visits: number
    progress: number
    status: string
}

const DATA:User[]= [
    {
      "firstName": "Tanner",
      "lastName": "Linsley",
      "age": 33,
      "visits": 100,
      "progress": 50,
      "status": "Married"
    },
    {
      "firstName": "Kevin",
      "lastName": "Vandy",
      "age": 27,
      "visits": 200,
      "progress": 100,
      "status": "Single"
    }
]

const columnHelper = createColumnHelper<User>();

const columns = [
    columnHelper.accessor("age", {
        header: () => <span style={{backgroundColor: "red"}}>Age</span>,
        id: "age",
        meta: {
            rowSpan:2
        },
    }),
    columnHelper.group({
        header: 'Name',
        columns: [
          // Accessor Column
          columnHelper.accessor('firstName', {
            cell: info => info.getValue(),
            footer: props => props.column.id,
          }),
          // Accessor Column
          columnHelper.accessor(row => row.lastName, {
            id: 'lastName',
            cell: info => info.getValue(),
            header: () => <span>Last Name</span>,
            footer: props => props.column.id,
          }),
          columnHelper.display({
            header: 'Action',
            cell: props => <button>Delete</button>,
        }),
        ],
    }),
];


export const TanStackTable = () => {
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])

    React.useEffect(() => {
        console.log(columnFilters);
    }, [columnFilters])
      
    const table = useReactTable({
        data: DATA,
        columns: columns,
        state: {
            columnFilters,
        },
        enableColumnFilters: true,
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(), 
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel:getPaginationRowModel()
    })

    return (
        <table>
          <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const columnRelativeDepth = header.depth - header.column.depth;
                console.log(header)
                if (
                  !header.isPlaceholder &&
                  columnRelativeDepth > 1 &&
                  header.id === header.column.id
                ) {
                  return null;
                }

                let rowSpan = 1;
                if (header.isPlaceholder) {
                  const leafs = header.getLeafHeaders();
                  rowSpan = leafs[leafs.length - 1].depth - header.depth;
                }

                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    rowSpan={rowSpan}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    <input value={header.column.getFilterValue() as string} onChange={e => {header.column.setFilterValue(e.target.value)}}/>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
            <tbody>
                {table.getRowModel().rows.map(row => (
                              <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                  <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                  </td>
                                ))}
                              </tr>
                            ))}
            </tbody>
            </table>
    ) 
};