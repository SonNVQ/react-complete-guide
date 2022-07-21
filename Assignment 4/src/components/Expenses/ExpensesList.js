import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.items.length === 0)
    return <p className="expenses-list__fallback">There is nothing here!</p>;
  return (
    <div className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
}

export default ExpensesList;
