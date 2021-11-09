import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expense.css'
import ExpensesFilter from "./ExpenseFilter";

function Expense(prop){

  const[filteredYear, setFilteredYear]=useState('2020');
  const filterChangeHandler=(selectedYear)=>{
    console.log('Expense.js');
    setFilteredYear(selectedYear);
  }

    return( 
      <div>
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
    <ExpenseItem
    title={prop.expense[0].title}
    amount={prop.expense[0].amount}
    date={prop.expense[0].date}
  ></ExpenseItem>
  <ExpenseItem
    title={prop.expense[1].title}
    amount={prop.expense[1].amount}
    date={prop.expense[1].date}
  ></ExpenseItem>
  <ExpenseItem
    title={prop.expense[2].title}
    amount={prop.expense[2].amount}
    date={prop.expense[2].date}
  ></ExpenseItem>
  <ExpenseItem
    title={prop.expense[3].title}
    amount={prop.expense[3].amount}
    date={prop.expense[3].date}
  ></ExpenseItem>
  </Card>
  </div>
  )
  
}

 export default Expense;