
import { Link } from "react-router-dom";
import "../styles/main.scss";
const Index = () => {
  return (
    <div className="index">
      <h1>This is Index please click on the below pages to navigate</h1>
      <Link to="signup">
        <button>Signup</button>
      </Link>
      <Link to="login">
        <button>Login</button>
      </Link>
      <Link to="home">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Index