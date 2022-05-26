import { Button, Grid, Paper, TextField } from "@mui/material"
import React from "react"

function AddExpense() {
  return (
    <div>
      <Paper style={{ padding: "10px" }}>
        <Grid spacing={2} container>
          <Grid item xs={12}>
            <TextField
              label={"Name"}
              variant={"outlined"}
              size={"small"}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={"Price"}
              variant={"outlined"}
              size={"small"}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              multiline
              rows={4}
              label={"Description"}
              variant={"outlined"}
              size={"small"}
              fullWidth
            />
          </Grid>
          <Grid display={"flex"} justifyContent={"space-between"} item xs={12}>
            <div />
            <Button variant={"contained"} size={"small"}>
              Add Expense
            </Button>
            <div />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default AddExpense
