import React from 'react'
import ExpenseItems from './ExpenseItems'
import './ExpensesList.css'
const ExpensesList = props => {
  if(props.filterExpensesByYear.length === 0){
    return <h2 className='expenses-list__fallback'>Found No Expenses</h2>
  }
  return (
    <ul className='expenses-list'>
        {props.filterExpensesByYear.map((expense) => (
            <ExpenseItems
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
            )
            )
        }
    </ul>
  )
}
export default ExpensesList;
