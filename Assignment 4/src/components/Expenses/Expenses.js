import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2019");

  const expensesFilterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredList = props.expenses.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onExpensesFilterChange={expensesFilterChangeHandler}
        selectedYear={filteredYear}
      />
      <ExpensesList items={filteredList} />
    </Card>
  );
}

export default Expenses;
