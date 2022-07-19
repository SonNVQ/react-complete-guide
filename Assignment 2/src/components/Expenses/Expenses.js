import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";

function Expenses(props) {
  const items = props.expenses.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));

  const [filteredYear, setFilteredYear] = useState("2019");

  const expensesFilterChangeHandler = (year) => {
    setFilteredYear(year);
    console.log(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onExpensesFilterChange={expensesFilterChangeHandler}
        selectedYear={filteredYear}
      />
      {items}
    </Card>
  );
}

export default Expenses;
