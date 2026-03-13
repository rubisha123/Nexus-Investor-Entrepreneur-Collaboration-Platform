import React, { useState } from "react";
import "../styles/Payments.css";

function PaymentsPage() {
  const [transactions, setTransactions] = useState([
    { id: 1, type: "Deposit", amount: 500, status: "Completed" },
    { id: 2, type: "Transfer", amount: 200, status: "Pending" }
  ]);

  const [balance, setBalance] = useState(1000);

  return (
    <div className="payments-container">
      <h2>Wallet Balance: ${balance}</h2>
      <h3>Transactions</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(tx => (
            <tr key={tx.id}>
              <td>{tx.id}</td>
              <td>{tx.type}</td>
              <td>${tx.amount}</td>
              <td>{tx.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentsPage;