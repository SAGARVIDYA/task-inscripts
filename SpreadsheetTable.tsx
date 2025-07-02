import React from "react";
import {
  useTable,
  useResizeColumns,
  useFlexLayout,
} from "react-table";

interface Data {
  col1: string;
  col2: string;
  col3:string;
  col4:string;
  col5:string;
}

const defaultData: Data[] = [
  { col1: " Vidya Sagar", col2: "02-07-25" ,col3:" ",col4:"male ",col5: "05-07-25"},
  { col1: "Roshan", col2: "25-06-25", col3:" " ,col4:"male ",col5:"02-07-25 "},
];

// Use 'any' to bypass type issues temporarily
type ColumnType = any;

const defaultColumns: ColumnType[] = [
  {
    Header: "name",
    accessor: "col1",
  },
  {
    Header: " date ",
    accessor: "col2",
  },
    {
    Header: "due date",
    accessor: "col3",
    Cell:({row}:any)=>(
      <button
      style={{ backgroundColor: row.index === 0 ? "#dc3545": "#28a745",  }}
onClick={()=> alert(`clicked ${row.oeginal.col3}`)}>status</button>
    )

    },
      
  {
    Header: "gender",
    accessor: "col4",

  },
    {
    Header: "due date",
    accessor: "col5",
  },
 
];

export const SpreadsheetTable: React.FC = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<Data>(
    {
      columns: defaultColumns,
      data: defaultData,
    },
    useFlexLayout,
    useResizeColumns
  );

  return (
    <div className="overflow-x-auto w-full">
      <table
        {...getTableProps()}
        className="min-w-full border border-gray-300 text-sm"
      >
        <thead className="bg-gray-100">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  key={column.id}
                  className="relative border p-2 font-semibold text-left"
                >
                  {column.render("Header")}
                  <div
                    {...(column as any).getResizerProps?.()}
                    className="absolute right-0 top-0 h-full w-1 bg-blue-400 opacity-0 hover:opacity-100 cursor-col-resize select-none"
                  />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id} className="hover:bg-gray-50">
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    key={cell.column.id}
                    className="border p-2"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default SpreadsheetTable
