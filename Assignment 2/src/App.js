import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "1",
      title: "Car Insurance",
      amount: 102,
      date: new Date(2022, 1, 2),
    },
    {
      id: "2",
      title: "Bike Insurance",
      amount: 112,
      date: new Date(2022, 12, 20),
    },
    {
      id: "3",
      title: "Motobike Insurance",
      amount: 123,
      date: new Date(2022, 6, 2),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
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
