import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const items = props.expenses.map((item) => (
    <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
  ));

  return <div className="expenses">{items}</div>;
}

export default Expenses;
