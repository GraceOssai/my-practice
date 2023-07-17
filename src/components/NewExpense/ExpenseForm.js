import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }

  const SubmitHandler = (event) => {
    event.preventDefault();
    // This will help us gather our user input since we are not using one state to manage our inputs.
    const expenseData = {
      title : enteredTitle,
      amount : enteredAmount,
      date : new Date(enteredDate)
    }

    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }
  // Now that we have gathered the users input, we do not need it here in our ExpenseForm, rather we need it inside the App.js where we have the list of expenses so that when a user adds expenses, it will be updated in the expenses array inside our App.js. So what we need to do is to now lift state...This means that we'll pass this user input to the NewExpense.js then from there, we'll now pass it to the App.js
  // This is called LIFTING STATE UP. This is a condition where we pass props from child to parent components.
  // What we'll do is to create a function inside our NewExpense.js and pass it here. 
  // Then again, we'll create another function inside the App.js as well and pass it inside the NewExpense.js file as well.
  return (
    <form onSubmit={SubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input 
          type="text" 
          onChange={titleChangeHandler}
          value={enteredTitle}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input 
          type="number" 
          min='0.01' 
          step='0.01' 
          onChange={amountChangeHandler}
          value={enteredAmount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input 
          type="date" 
          min='2019-01-01' 
          max='2023-12-31' 
          onChange={dateChangeHandler}
          value={enteredDate}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm