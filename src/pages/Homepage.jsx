import { useState, useEffect } from "react";
import { generateRandomTransactions } from "../utils/fakeData";
import Dashboard from "../components/Dashboard/Dashboard";
import Sidebar from "../components/Sidebar/Sidebar";
import Transactions from "../components/Transactions/Transactions";
import "../styles/homepage.scss";
import { faker } from "@faker-js/faker";
const Homepage = () => {
  const [transactions, setTransactions] = useState([]);
  const [refDate, setRefDate] = useState(1);
  console.log(refDate);
  useEffect(() => {
    const event = generateRandomTransactions(
      faker.datatype.number({ min: 20, max: 60 }),
      refDate
    );
    setTransactions(event.sort((a, b) => b.start - a.start));
  }, [refDate]);
  console.log(transactions);
  return (
    <div className="home-wrapper">
      <Sidebar className="sidebar-wrapper" />
      <Dashboard
        className="dashboard-wrapper"
        transactions={transactions}
        setRefDate={setRefDate}
      />
      <Transactions
        className="transactions-wrapper"
        transactions={transactions}
      />
    </div>
  );
};

export default Homepage;
