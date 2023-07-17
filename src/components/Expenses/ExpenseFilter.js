import React from 'react'
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {

  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value)
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label style={{color: 'red'}}>Filter by year</label>
        {/* <div style={{color: 'red'}}>{props.selectedYear}</div> */}
        <select onChange={dropDownChangeHandler} value={props.selectedYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter