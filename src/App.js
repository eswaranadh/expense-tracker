import { Grid } from "@mui/material"
import React from "react"
import AddExpense from "./components/AddExpense"
import ExpenseList from "./components/ExpenseList"

function App() {
  return (
    <div>
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
    </div>
  )
}

export default App
