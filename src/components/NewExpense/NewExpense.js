import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

// Новая затрата компонент - функция: сохранение данных вводимых в форму (title, amount, date)
// для последующего добавления в список затрат

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
