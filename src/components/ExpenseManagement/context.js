import React, { createContext, useContext, useState } from "react"

const ExpenseManagementContext = createContext()
const useExpenseManagementContext = () => useContext(ExpenseManagementContext)

const expenseManagementInitialState = {
  expenseList: [],
  loading: true,
}

function ExpenseManagementContextProvider(props) {
  const [expenseList, setExpenseList] = useState(
    expenseManagementInitialState.expenseList
  )
  const [loading, setLoading] = useState(expenseManagementInitialState.loading)

  const getExpenseList = async () => {
    try {
      setLoading(true)
      const data = [
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
      setExpenseList(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }

  const state = {
    expenseList,
    loading,
  }

  const stateSetters = {
    setExpenseList,
    setLoading,
  }

  const services = {
    getExpenseList,
  }

  return (
    <ExpenseManagementContext.Provider
      value={{ state, stateSetters, services }}
    >
      {props.children}
    </ExpenseManagementContext.Provider>
  )
}

export { ExpenseManagementContextProvider, useExpenseManagementContext }
