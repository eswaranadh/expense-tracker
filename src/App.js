import { Grid } from "@mui/material"
import React from "react"
import AddExpense from "./components/ExpenseManagement/AddExpense"
import ExpenseList from "./components/ExpenseManagement/ExpenseList"
import { ExpenseManagementContextProvider } from "./components/ExpenseManagement/context"

function App() {
  return (
    <div>
      <ExpenseManagementContextProvider>
        <Grid container>
          <Grid item xs={12} sm={3}></Grid>
          <Grid item xs={12} sm={6}>
            <AddExpense />
          </Grid>
          <Grid item xs={12} sm={3}></Grid>
        </Grid>

        <div style={{ padding: "10px" }}>
          <ExpenseList />
        </div>
      </ExpenseManagementContextProvider>
    </div>
  )
}

export default App
