import { useState } from 'react'
import React from 'react';
import Header from './Header';
import './App.css';
import Table from './Table';
import Searchbar from './Searchbar';
import Transaction from './Transaction';

function App() {

  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Candy-O-Bosibori/transactions-API/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      });
  }, []);
  

function addTransaction(newTransaction) {
  setTransactions([...transactions, newTransaction]);
}

const filteredTransactions = transactions
? transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  )
: [];

function deleteTransaction(id) {
const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
setTransactions(updatedTransactions);
}

  return (
    <div className="App">
      <Header />
      <Transaction onSubmit={addTransaction} />
      <Searchbar onSearch={setSearchTerm} />
      <Table transactions={filteredTransactions} onDelete={deleteTransaction} />
      
      
    </div>
  );
}

export default App;