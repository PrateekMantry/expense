import React,{useState,useEffect} from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

let DUMMY_EXPENSE = [
    
];

function App(){

    const [expenses,setExpenses] = useState(DUMMY_EXPENSE);
    
    useEffect( () => {
        fetch('https://api.sampleapis.com/beers/ale').then(
            response =>{ 
                return response.json()
            }
        ).then(
            
            data =>{ 
                console.log(data);
                setExpenses(data);
            }
        )
     },[]
    );

    

    const addExpenseHandler = (expense) => {
        setExpenses([expense , ...expenses])
   }

     return (
         <div>
             <NewExpense onAddExpense = {addExpenseHandler}/>
             <Expenses item ={expenses} />

         </div>
     );
}



export default App;

