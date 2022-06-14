import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';
import AddItem from './components/addItems';
import DisplayTransation from './components/displayTransaction';

function App() {

const [transaction, settransaction] = useState ([]);


const addTransaction = ((amount, item,transactionType)=>{



  settransaction((items)=>[...item,{
    amount:amount,
    items:item,
    transactionType,transactionType
  }])
  console.log(transaction)

})
  return (
    <div className="container">
      <DisplayTransation list={transaction}/>
      <AddItem  add={addTransaction}/>
     
      
    </div>
  );
}

export default App;
