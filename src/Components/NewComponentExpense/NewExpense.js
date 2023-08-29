import './NewExpense.css';
import ExpenseItem from '../../Components/ExpenseItem/ExpenseItem.js';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

function NewExpense(props) {
  return (
    <div className='NewExpense-container'>
        <ExpenseDate date={props.date}/>
        <ExpenseItem id={props.id} title={props.title} amount={props.amount} date={props.date} />
    </div>
  )
}

export default NewExpense;