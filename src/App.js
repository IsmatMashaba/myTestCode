

// Customers should contain each customer sorted by ID with their first and last name as well as the total number of purchased items and the total price. At the end, the total number of sold items and the total price should be recorded (totalCustomerValue, totalItemsvalue). 



import './App.css';
import { useEffect, useState } from 'react';
import Customer from './Components/Customer/Customer';

function App() {


const [user,setUser]= useState([])
//console.log(user);
//data load
useEffect(()=>{
fetch ('TestDaten (2).json')
.then(res =>res.json())
.then(data=>setUser(data.customers))
},[])


//data sort
let newCustomer = user.sort ((function(a, b) { 
  return a.ID - b.ID  
}))
//console.log(newCustomer,'ss')
//reduce
const  totalSoldItems = newCustomer.reduce  (function (acc, obj) { return acc + obj.orders.reduce(function (acc, obj) { return acc + obj.items.reduce(function (acc, obj) { return acc + obj.quantity; }, 0); }, 0); }, 0);


const  totalItemValue = newCustomer.reduce  (function (acc, obj) { return acc + obj.orders.reduce(function (acc, obj) { return acc + obj.items.reduce(function (acc, obj) { return acc + obj.price; }, 0); }, 0); }, 0);

console.log(totalItemValue,"price");
console.log(totalSoldItems);
  return (
    <div className="App">
      <h1>total-Item-Value :{totalItemValue.toFixed(2)}</h1>
      <h1>total sold items :{totalSoldItems}</h1>
    <h1>user : {user.length}</h1>
    {
      newCustomer.map(customer =><Customer
        key ={customer.ID}
        send={customer}></Customer>)
    }
    </div>
  );
}

export default App;
