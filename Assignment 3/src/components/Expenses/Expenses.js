import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";

function Expenses(props) {
  const [expenseList, setExpenseList] = useState(props.expenses);

  const showExpenseList = () =>
    expenseList.map((item) => (
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
    const filteredList = props.expenses.filter((item) => {
      // console.log(typeof year);
      // console.log(typeof item.date.getFullYear());
      // console.log(item.date.getFullYear().toString() === year);
      return item.date.getFullYear().toString() === year;
    });
    console.log(filteredList);
    setExpenseList(filteredList);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onExpensesFilterChange={expensesFilterChangeHandler}
        selectedYear={filteredYear}
      />
      {showExpenseList()}
    </Card>
  );
}

export default Expenses;
