import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("vi-VN", { month: "long" });
  const day = props.date.toLocaleString("vi-VN", { day: "numeric" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date_year">{year}</div>
      <div className="expense-date_day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
