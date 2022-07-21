import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [showExpenseForm, setShowExpenseForm] = useState(0);

  const saveEnteredExpenseHandler = (enteredExpense) => {
    const expense = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expense);
    setShowExpenseForm(0);
  };

  const showExpenseFormHandler = () => setShowExpenseForm(1);
  const closeExpenseFormHandler = () => setShowExpenseForm(0);

  let contents = (
    <button onClick={showExpenseFormHandler}>Add new expense</button>
  );

  if (showExpenseForm === 1)
    contents = (
      <ExpenseForm
        onSaveEnteredExpense={saveEnteredExpenseHandler}
        onCloseForm={closeExpenseFormHandler}
      />
    );

  return <div className="new-expense">{contents}</div>;
}

export default NewExpense;
