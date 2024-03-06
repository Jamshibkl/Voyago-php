import React from "react";
import "./DriverLogin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
function DriverLogin() {
  return (
    <>
      <div className="driver-login-page">
        <div className="driver-login-headings">
          <h1>Welcome back driver!</h1>
          <h3>Enter your credentials and login.</h3>
        </div>
        <div className="driver-login-form">
          <form action="">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Pasword" />
            <br />
            <span>forgot password?</span>
            <br />
            <Link to='/driver-verify'>
            <button>login</button>
            </Link>
            <br />
            <button>
              <FontAwesomeIcon icon={faGoogle} className="google-icon" />
              continue with google
            </button>
            <p className="driver-login-para">new driver? register here!</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default DriverLogin;
