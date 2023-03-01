import { useState} from "react";

import TransactionList from "./TransactionList";

const Transactions = ({ transactions }) => {
  const [transactionType, setTransactionType] = useState("all");

  return (
    <div className="transactions-wrapper">
      <div className="header">
        <h2>Transactions</h2>
      </div>
      <div className="transactions-selector">
        <button
          onClick={() => {
            setTransactionType("all");
          }}
          className={transactionType == "all" ? "active" : null}
        >
          All
        </button>
        <button
          onClick={() => {
            setTransactionType("revenue");
          }}
          className={transactionType == "revenue" ? "active" : null}
        >
          Revenue
        </button>
        <button
          onClick={() => {
            setTransactionType("expense");
          }}
          className={transactionType == "expense" ? "active" : null}
        >
          Expenses
        </button>
      </div>
      <div className="transactions-list">
        <TransactionList
          transactions={transactions}
          transactionType={transactionType}
        />
      </div>
    </div>
  );
};

export default Transactions;
