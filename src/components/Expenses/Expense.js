import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expense.css";
import ExpenseList from "./ExpenseList";
import ExpnesesChart from "./ExpesnsesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpnesesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}></ExpenseList>
      </Card>
    </div>
  );
};

export default Expenses;
