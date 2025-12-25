import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
function LogIn() {
  return (
    <>
      <div className="Extra_height"></div>
    
      <div className="container">
          <form className="login-box">
          <h2>LOGIN</h2>
          <p className="paraupper">Please enter your e-mail and password</p>
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          <input type="button" value="LOGIN" />
          <p className="parabott">Forgot your password?</p>
          <p className="parabott">New Customer? Sign up</p>
        </form>
      </div>
    </>
  );
}

export default LogIn;
