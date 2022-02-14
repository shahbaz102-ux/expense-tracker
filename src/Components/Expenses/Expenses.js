import React,{ useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {

  const [selectedYear,setSelectedYear] = useState('2021'); 
  const onFilterChangeHandler = year => {
    setSelectedYear(year);
    console.log(year);
  }

  const filterExpensesByYear = props.expenses.filter( expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  })
  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onChangeFilter={onFilterChangeHandler}/>
      <ExpensesChart expenses={filterExpensesByYear}/>
      <ExpensesList filterExpensesByYear={filterExpensesByYear}/>
    </Card>
  );
}
export default Expenses;