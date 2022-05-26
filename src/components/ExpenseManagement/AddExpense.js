import { Button, Grid, Paper, TextField } from "@mui/material"
import React, { useState } from "react"

function AddExpense() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [descp, setDescp] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Paper style={{ padding: "10px" }}>
          <Grid spacing={2} container>
            <Grid item xs={12}>
              <TextField
                label={"Name"}
                variant={"outlined"}
                size={"small"}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={"Price"}
                variant={"outlined"}
                size={"small"}
                fullWidth
                required
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
                required
              />
            </Grid>
            <Grid
              display={"flex"}
              justifyContent={"space-between"}
              item
              xs={12}
            >
              <div />
              <Button type={"submit"} variant={"contained"} size={"small"}>
                Add Expense
              </Button>
              <div />
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  )
}

export default AddExpense
