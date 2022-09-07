import React from "react";
import './expenseItem.css'

const ExpenseItems = () => {
  const expenseDate = new Date(2022, 2, 28);
  return (
    <div className="expense-item">
      
        <div>{ expenseDate.toISOString() }</div>
        <div className="expense-item__description">
          <h2>Title</h2>
          <div>Amount</div>
        </div>
    
    </div>
  );
};

export default ExpenseItems;
