import React from "react";
import DateExpense from "./DateExpense";
import './expenseItem.css'

const ExpenseItems = ( props ) => {
  
  return (
    <div className="expense-item">
        <DateExpense date={props.date}/>
        <div className="expense-item__description">
          <h2>{ props.title }</h2>
          <div className="expense-item__price">${ props.amount }</div>
        </div>
    
    </div>
  );
};

export default ExpenseItems;
