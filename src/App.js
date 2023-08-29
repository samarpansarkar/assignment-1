import React from "react";
import NewExpense from "./Components/NewComponentExpense/NewExpense.js";

function App() {
  const expense = [
    {
      id: "01",
      title: "Car Insurance",
      amount: "$1000",
      date: new Date(2021, 1, 1),
    },
    {
      id: "02",
      title: "Rent",
      amount: "$1000",
      date: new Date(2021, 12, 3),
    },
    {
      id: "03",
      title: "Gas",
      amount: "$1000",
      date: new Date(2021, 4, 6),
    },
    {
      id: "04",
      title: "House",
      amount: "$1000",
      date: new Date(2021, 11, 9),
    },
  ];

  return (
    <div>
      <NewExpense id={expense[0].id} title={expense[0].title} amount={expense[0].amount} date={expense[0].date} />
    </div>
  );
}

export default App;
