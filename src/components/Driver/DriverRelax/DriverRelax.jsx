import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
function DriverRelax() {
  return (
    <>
      <div className="driver-login-page">
        <div className="driver-login-headings">
          <h1>Sit back and relax!</h1>
          <h3>we will inform you once the verifications are completed.</h3>
        </div>
        <div className="driver-login-form">
          <form action="">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Pasword" />
            <br />
            <span>forgot password?</span>
            <br />
            <Link to="/driver-dashbord">
              <button>login</button>
            </Link>
            <br />
            <button>
              <FontAwesomeIcon icon={faGoogle} className="google-icon" />
              continue with google
            </button>
            <p>new driver? register here!</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default DriverRelax;
