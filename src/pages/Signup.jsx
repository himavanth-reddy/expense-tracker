import { useState, useEffect } from "react";
import { Account, ID } from "appwrite";
import client from "../config/appwrite";
import "../styles/signup.scss";
import Carousal from "./Carousal";
import { Link } from "react-router-dom";
const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState({});
  const [passwordCheck, setPasswordCheck] = useState(true);
  const [formValid, setFormValid] = useState(false);

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  const account = new Account(client);
  const handleSignup = async (e) => {
    e.preventDefault();
    if (regex.test(password)) {
      account
        .create(ID.unique(), email, password, fullName)
        .then(() => {
          account
            .createEmailSession(email, password)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              setErr({ err: true, errMessage: error.message });
            });
        })
        .catch((error) => {
          setErr({ err: true, errMessage: error.message });
        });
    } else {
      setPasswordCheck(regex.test(password));
    }
  };

  return (
    <div className="wrapper">
      <div className="welcome-container">
        <Carousal />
      </div>
      <div className="signup-container">
        <div className="header">
          <h2>Create your account</h2>
          <p>Enter the fields below to get started</p>
        </div>

        <div className="form-wrapper">
          <form action="" className="signup-form">
            <label htmlFor="username">Full Name*</label>
            <input
              type="text"
              id="username"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                setFormValid(!!e.target.value && !!email && !!password);
              }}
              placeholder="Enter Full name"
              required
            />

            <label htmlFor="email">Email*</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setFormValid(!!e.target.value && !!fullName && !!password);
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
                setFormValid(!!e.target.value && !!email && !!fullName);
              }}
              placeholder="Enter complex password"
              required
            />
            <button type="submit" onClick={handleSignup} disabled={!formValid}>
              Signup
            </button>
          </form>
        </div>
        {passwordCheck ? (
          <p className="error"></p>
        ) : (
          <p className="error">
            Uh oh! Your password needs some work. Try adding some numbers,
            symbols, or capital letters to make it stronger.
          </p>
        )}
        {err.err ? (
          <p className="error">{err.errMessage}</p>
        ) : (
          <p className="error"></p>
        )}
        {console.log(passwordCheck)}
        <p>
          Already have an account{" "}
          <Link to="/login">
            <button>Login</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
