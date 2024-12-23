import { createColumnHelper, getCoreRowModel, useReactTable, flexRender } from "@tanstack/react-table"
import React from "react";

// Define your row shape
type Person = {
    firstName: string
    lastName: string
    age: number
    visits: number
    status: string
    progress: number
}

const DATA: Person[] = [
    {
        firstName: "An",
        lastName: "Le",
        age: 12,
        visits: 12,
        status: "Active",
        progress: 12,
    },
    {
        firstName: "Su",
        lastName: "Bin",
        age: 12,
        visits: 12,
        status: "Active",
        progress: 12,
    }
]
  
const columnHelper = createColumnHelper<Person>()
  
  // Make some columns!
  const defaultColumns = [
    // Grouping Column
    columnHelper.group({
      header: 'Name',
      columns: [
        // Accessor Column
        columnHelper.accessor('firstName', {
          id: "firstName",
          header: "First Name",
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
      ],
    }),
    // Grouping Column
    columnHelper.group({
      header: 'Info',
      footer: props => props.column.id,
      columns: [
        // Accessor Column
        columnHelper.accessor('age', {
          header: () => 'Age',
          footer: props => props.column.id,
        }),
        // Grouping Column
        columnHelper.group({
          header: 'More Info',
          columns: [
            // Accessor Column
            columnHelper.accessor('visits', {
              header: () => <span>Visits</span>,
              footer: props => props.column.id,
            }),
            // Accessor Column
            columnHelper.accessor('status', {
              header: 'Status',
              footer: props => props.column.id,
            }),
            // Accessor Column
            columnHelper.accessor('progress', {
              header: 'Profile Progress',
              footer: props => props.column.id,
            }),
          ],
        }),
      ],
    }),
  ]


export function ReactTable(){
    const table = useReactTable({columns: defaultColumns,data: DATA, getCoreRowModel: getCoreRowModel()});
    return (
        <table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                    console.log(header, header.getLeafHeaders());
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                )})}
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
      );
}