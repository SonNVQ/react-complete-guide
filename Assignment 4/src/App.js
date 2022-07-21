import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSE = [
  {
    id: "1",
    title: "Car Insurance",
    amount: 102,
    date: new Date(2021, 1, 2),
  },
  {
    id: "2",
    title: "Bike Insurance",
    amount: 112,
    date: new Date(2022, 11, 20),
  },
  {
    id: "3",
    title: "Motobike Insurance",
    amount: 123,
    date: new Date(2022, 6, 2),
  },
  {
    id: "4",
    title: "Motob Insurance",
    amount: 123,
    date: new Date(2019, 6, 2),
  },
  {
    id: "5",
    title: "Motobike Insu",
    amount: 123,
    date: new Date(2018, 6, 2),
  },
  {
    id: "6",
    title: "Mot",
    amount: 123,
    date: new Date(2020, 7, 22),
  },
  {
    id: "7",
    title: "Motoance",
    amount: 123,
    date: new Date(2020, 6, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSE);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
