import React, { useContext, useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import { IconButton } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { useExpenseManagementContext } from "./context"

export default function ExpenseList() {
  const { services, state } = useExpenseManagementContext()

  useEffect(() => {
    services.getExpenseList()
  }, [])

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

  const rows = state.expenseList.map((expense) => {
    const { id, descp, name, price } = expense
    return {
      id,
      descp,
      name,
      price,
    }
  })

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
