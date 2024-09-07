/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">Money Master</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Dashboard
          </Link>
          <Link to="/transactions" className="hover:text-gray-300">
            Transactions
          </Link>
          <Link to="/analytics" className="hover:text-gray-300">
            Analytics
          </Link>
          <Link to="/settings" className="hover:text-gray-300">
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
};


const initialTransaction = [
  {
    amount: 2000,
    category: "Income",
    type: "income",
    date: "2024-09-07T00:00:00.000+00:00",
  },
  {
    amount: 500,
    category: "groceries",
    type: "expense",
    date: "2024-09-07T00:00:00.000+00:00",
  },
  {
    amount: 200,
    category: "hair cut",
    type: "expense",
    date: "2024-09-07T00:00:00.000+00:00",
  },
  {
    amount: 3000,
    category: "salary",
    type: "income",
    date: "2024-09-06T00:00:00.000+00:00",
  },
];
export default function App() {
  const [transactions, setTransactions] = useState(initialTransaction);
  const addTransaction = (newTransaction) => {
  
    console.log(newTransaction);
    setTransactions([...transactions, newTransaction]);    console.log(transactions);
  };
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Dashboard transactions={transactions} />
                <TransactionForm addTansaction={addTransaction} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
