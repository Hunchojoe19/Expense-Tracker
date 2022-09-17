import './App.css';
import ExpenseItems from './components/ExpenseItems';

function App() {
  const expenses = [
    {id: 1, 
     title: 'Car Insurance', 
     amount: 294, date: 
     new Date(2022, 2, 28)
    },
    {id: 2, 
     title: 'House Insurance', 
     amount: 500, 
     date: new Date(2022, 5, 22)
    },
    {id: 3, 
     title: 'Health Insurance', 
     amount: 459, 
     date: new Date(2022, 6, 12)
    },
    {id: 4, 
     title: 'Shop Insurance', 
     amount: 321, 
     date: new Date(2022, 8, 30)
    },
  ]
  return (
    <div className="App">
      <ExpenseItems title={ expenses[0].title } 
                    amount = { expenses[0].amount } 
                    date={ expenses[0].date }/>
      <ExpenseItems 
                    title={ expenses[1].title } 
                    amount = { expenses[1].amount } 
                    date={ expenses[1].date }/>
      <ExpenseItems title={ expenses[2].title } 
                    amount = { expenses[2].amount } 
                    date={ expenses[2].date }/>
      <ExpenseItems title={ expenses[3].title } 
                    amount = { expenses[3].amount } 
                    date={ expenses[3].date }/>
    </div>
  );
}

export default App;
