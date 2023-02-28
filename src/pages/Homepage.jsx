import Dashboard from "../components/Dashboard/Dashboard";
import Sidebar from "../components/Sidebar/Sidebar";
import Transactions from "../components/Transactions/Transactions";
import "../styles/homepage.scss";

const Homepage = () => {
  return (
    <div className="home-wrapper">
      <Sidebar className="sidebar-wrapper" />
      <Dashboard className="dashboard-wrapper" />
      <Transactions className="transactions-wrapper" />
    </div>
  );
};

export default Homepage;
