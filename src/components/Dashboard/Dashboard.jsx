import { useState } from "react";
import DashboardChart from "./DashboardChart";

import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";

const Dashboard = ({ transactions, setRefDate }) => {
  let totalSpends = transactions.reduce((a, transaction) => {
    if (transaction.type == "expense") {
      return a + transaction.amount;
    } else {
      return a + 0;
    }
  }, 0);
  return (
    <div className="dashboard-wrapper">
      <div className="header">
        <div>
          <h2>Dashboard</h2>
        </div>
        {/* <button>Log finances</button> */}
      </div>
      <div className="balance-overview" id="balance">
        <p>Your balance:</p>
        <p>$28,200</p>
      </div>
      <div className="transactions-overview">
        <div className="time-period-container">
          <select
            name="time-period"
            id="time-period"
            className="time-period"
            onChange={(event) => {
              setRefDate(event.target.value);
            }}
          >
            <option value={1}>Today</option>
            <option value={7}>This week</option>
            <option value={30}>This month</option>
          </select>
          <div className="total-transactions">
            <p>Transactions</p>
            <p>{transactions.length}</p>
          </div>
          <div>
            <p>Total spends</p>
            <p>${totalSpends}</p>
          </div>
        </div>

        <div className="category-container">
          <div className="category">
            <p>Food</p>
            <p>
              $
              {transactions.reduce((a, transaction) => {
                if (transaction.category == "Food") {
                  return a + transaction.amount;
                } else {
                  return a + 0;
                }
              }, 0)}
            </p>
          </div>
          <div className="category">
            <p>Housing</p>
            <p>
              $
              {transactions.reduce((a, transaction) => {
                if (transaction.category == "Housing") {
                  return a + transaction.amount;
                } else {
                  return a + 0;
                }
              }, 0)}
            </p>
          </div>
          <div className="category">
            <p>Housing</p>
            <p>
              $
              {transactions.reduce((a, transaction) => {
                if (transaction.category == "Housing") {
                  return a + transaction.amount;
                } else {
                  return a + 0;
                }
              }, 0)}
            </p>
          </div>
          <div className="category">
            <p>Transportation</p>
            <p>
              $
              {transactions.reduce((a, transaction) => {
                if (transaction.category == "Transportation") {
                  return a + transaction.amount;
                } else {
                  return a + 0;
                }
              }, 0)}
            </p>
          </div>
          <div className="category">
            <p>Entertainment</p>
            <p>
              $
              {transactions.reduce((a, transaction) => {
                if (transaction.category == "Entertainment") {
                  return a + transaction.amount;
                } else {
                  return a + 0;
                }
              }, 0)}
            </p>
          </div>
          <div className="category">
            <p>Utilities</p>
            <p>
              $
              {transactions.reduce((a, transaction) => {
                if (transaction.category == "Utilities") {
                  return a + transaction.amount;
                } else {
                  return a + 0;
                }
              }, 0)}
            </p>
          </div>
        </div>
        <div className="chart-overview">
          <div>
            <p>Schedule of costs</p>
          </div>
          <div className="chart-container">
            <div className="info-overview">
              <div className="Revenue-info">
                <div>
                  <ArrowCircleUpRoundedIcon className="Revenue-Arrow" />
                </div>

                <div>
                  <p>Expense</p>
                  <p>
                    $
                    {transactions.reduce((a, transaction) => {
                      if (transaction.type == "expense") {
                        return a + transaction.amount;
                      } else {
                        return a + 0;
                      }
                    }, 0)}
                  </p>
                </div>
              </div>

              <div className="Expense-info">
                <div>
                  <ArrowCircleDownRoundedIcon className="Expense-Arrow" />
                </div>

                <div>
                  <p>Revenue</p>
                  <p>
                    $
                    {transactions.reduce((a, transaction) => {
                      if (transaction.type == "revenue") {
                        return a + transaction.amount;
                      } else {
                        return a + 0;
                      }
                    }, 0)}
                  </p>
                </div>
              </div>
            </div>
            <div className="chart">
              <DashboardChart transactions={transactions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
