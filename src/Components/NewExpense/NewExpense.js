import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
export default function NewExpense(props) {

    const savedExpenseDataHandler = newExpenseData => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={savedExpenseDataHandler}/>
    </div>
  )
}
