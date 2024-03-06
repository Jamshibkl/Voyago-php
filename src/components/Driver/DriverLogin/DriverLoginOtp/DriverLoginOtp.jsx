import React from "react";
import "./DriverLoginOtp.css";
import { Link } from "react-router-dom";
function DriverLoginOtp() {
  return (
    <div>
      <div className="driver-otp">
        <div className="driver-otp-headings">
          <h1>Enter the OTP sent to your registered mail.</h1>
        </div>
        <div className="driver-otp-form">
          <h5>Enter The OTP</h5>
          <div className="otp-container">
            <div className="otp-input">
              <input type="text" />
            </div>
            <div className="otp-input">
              <input type="text" />
            </div>
            <div className="otp-input">
              <input type="text" />
            </div>
            <div className="otp-input">
              <input type="text" />
            </div>
          </div>
          <Link to="/driver-verify">
            <button>verify</button>
          </Link>
          <br />
          <Link to="/driver-login-otp">
            <button>not received the OTP?</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DriverLoginOtp;
