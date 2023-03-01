import { useState, useEffect } from "react";
import { Account, ID } from "appwrite";
import client from "../config/appwrite";
import "../styles/login.scss";
import Carousal from "./Carousal";
import { Link } from "react-router-dom";
const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState({ err: false });
  const [formValid, setFormValid] = useState(false);

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  const account = new Account(client);
  const handleSignup = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="wrapper">
      <div className="welcome-container">
        <Carousal />
      </div>
      <div className="signup-container">
        <div className="header">
          <h2>Welcome to Expense Tracker</h2>
          <p>Sign In to continue</p>
        </div>

        <div className="form-wrapper">
          <form action="" className="signup-form">
            <label htmlFor="email">Email*</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setFormValid(!!e.target.value && !!password);
              }}
              placeholder="Enter email"
              required
            />
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setFormValid(!!e.target.value && !!email);
              }}
              placeholder="Enter password"
              required
            />
            <button type="submit" onClick={handleSignup} disabled={!formValid}>
              Signup
            </button>
          </form>
        </div>

        {err.err ? (
          <p className="error">{err.errMessage}</p>
        ) : (
          <p className="error"></p>
        )}
        <p>
          Join us.
          <Link to="/signup">
            <button>Signup</button>
          </Link>
          .
        </p>
      </div>
      
    </div>
  );
};

export default Login;
