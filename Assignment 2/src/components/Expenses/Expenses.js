import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const items = props.expenses.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));

  const expensesFilterChangeHandler = (year) => {
    console.log(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onExpensesFilterChange={expensesFilterChangeHandler} />
      {items}
    </Card>
  );
}

export default Expenses;
