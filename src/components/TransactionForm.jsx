/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function TransactionForm({ addTansaction }) {
  const [transaction, setTransaction] = useState({
    amount: "",
    category: "",
    type: "expense",
    date: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    addTansaction({ ...transaction, amount: parseFloat(transaction.amount) });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Amount
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus: outline-none focus:shadow-outline "
            id="number"
            type="number"
            placeholder="Amount"
            value={transaction.amount}
            onChange={(e) => {
              setTransaction({ ...transaction, amount: e.target.value });
            }}
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Category
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus: outline-none focus:shadow-outline "
            type="text"
            placeholder="Category"
            value={transaction.category}
            onChange={(e) =>
              setTransaction({ ...transaction, category: e.target.value })
            }
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Type
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus: outline-none focus:shadow-outline "
            value={transaction.type}
            onChange={(e) =>
              setTransaction({ ...transaction, type: e.target.value })
            }
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Date
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus: outline-none focus:shadow-outline "
            type="date"
            value={transaction.date}
            onChange={(e) => {
              setTransaction({ ...transaction, date: e.target.value });
            }}
          />
        </label>
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Transaction
          </button>
        </div>{" "}
      </div>
    </form>
  );
}
