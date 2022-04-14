import './Expenses.css';
import ExpenseItem from './ExpenseItem';
//import Card from './Card';

function Expenses(props){

    return (
        <div className ='expenses'>

            {
              props.item.map(
               expense => (
                <ExpenseItem 
                 date= {expense.date}
                 title={expense.title} 
                 amount={expense.amount}
                />
               )
              ) 
            }

        </div>
    );

    
}

export default Expenses;
