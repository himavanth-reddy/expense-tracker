const date = new Date();
import { useState, useEffect } from "react";
import DashboardChart from "./DashboardChart";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";
const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const formatedDate = date.toLocaleString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="dashboard-wrapper">
      <div className="header">
        <div>
          <h1>Dashboard</h1>
          <p>{formatedDate}</p>
        </div>
        <button>Log finances</button>
      </div>
      <div className="balance-overview" id="balance">
        <p>Your balance:</p>
        <p>$28,200</p>
      </div>
      <div className="transactions-overview">
        <div className="time-period-container">
          <select name="time-period" id="time-period" className="time-period">
            <option value="Today">Today</option>
            <option value="This week">This week</option>
            <option value="Last week">Last Week</option>
            <option value="This month">This month</option>
            <option value="Last month">Last month</option>
          </select>
          <div className="total-transactions">
            <p>Transactions</p>
            <p>48</p>
          </div>
          <div>
            <p>Total spends</p>
            <p>$1245.30</p>
          </div>
        </div>

        <div className="category-container">
          <div className="category">
            <p>Food</p>
            <p>$138.56</p>
          </div>
          <div className="category">
            <p>Health and Care</p>
            <p>$118.56</p>
          </div>
          <div className="category">
            <p>Shopping</p>
            <p>$118.56</p>
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
                  <p>Revenue</p>
                  <p>$10,567</p>
                </div>
              </div>

              <div className="Expense-info">
                <div>
                  <ArrowCircleDownRoundedIcon className="Expense-Arrow" />
                </div>

                <div>
                  <p>Expense</p>
                  <p>$11,567</p>
                </div>
              </div>
            </div>
            <div className="chart">
              <DashboardChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
