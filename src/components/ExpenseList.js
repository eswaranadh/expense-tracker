import React from "react"
import { DataGrid } from "@mui/x-data-grid"
import { IconButton } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
const columns = [
  { field: "name", headerName: "Name", resizable: true, width: 200 },
  { field: "descp", headerName: "Description", resizable: true, width: 600 },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    resizable: true,
    width: 100,
  },
  {
    field: "",
    headerName: "Actions",
    type: "number",
    resizable: true,
    width: 100,
    renderCell: () => {
      return (
        <div>
          <IconButton size={"small"}>
            <EditIcon style={{ color: "orange" }} fontSize="small" />
          </IconButton>
          <IconButton size={"small"}>
            <DeleteIcon style={{ color: "red" }} fontSize="small" />
          </IconButton>
        </div>
      )
    },
  },
]

const rows = [
  { id: 1, descp: "Snow", name: "Jon", price: 35 },
  { id: 2, descp: "Lannister", name: "Cersei", price: 42 },
  { id: 3, descp: "Lannister", name: "Jaime", price: 45 },
  { id: 4, descp: "Stark", name: "Arya", price: 16 },
  { id: 5, descp: "Targaryen", name: "Daenerys", price: null },
  { id: 6, descp: "Melisandre", name: null, price: 150 },
  { id: 7, descp: "Clifford", name: "Ferrara", price: 44 },
  { id: 8, descp: "Frances", name: "Rossini", price: 36 },
  { id: 9, descp: "Roxie", name: "Harvey", price: 65 },
]

export default function ExpenseList() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}
