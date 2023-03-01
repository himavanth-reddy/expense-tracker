import userImg from "../../../assets/avataaars.png";
const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="userinfo">
        <img src={userImg} alt="user profile pic" />
        <p className="name">Georgina Clay</p>
        <p className="email">georgina@gmail.com</p>
      </div>
      <div className="menu-items">
        <p>Dashboard</p>
        <p>Calendar</p>
        <p>Support</p>
      </div>
      <div className="logout-button">Log out</div>
    </div>
  );
};

export default Sidebar;
