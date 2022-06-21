import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react'
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signup';
import DisplayTransaction from './components/displayTransaction';




import {BrowserRouter as Router,Routes,
  Route} from 'react-router-dom'

function App() {

const [transaction, settransaction] = useState ([]);


const addTransaction = ((amount, item,transactionType)=>{



  settransaction((items)=>[...item,{
    amount:amount,
    items:item,
    transactionType:transactionType
  }])

})
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
       
    
      </Routes>
  
    </Router>

  )
}

export default App;
