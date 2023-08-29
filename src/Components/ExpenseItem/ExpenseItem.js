import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div>
      <div className="expense-item-descriptions">
        <div className="expense-item-id">{props.id}</div>
        <h2>{props.title}</h2>
        <div className="expense-item-price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
