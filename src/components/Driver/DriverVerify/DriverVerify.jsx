import React from "react";
import "./DriverVerify.css";
import { Link } from "react-router-dom";
function DriverVerify() {
  return (
    <div>
      <div className="driver-verify-page">
        <div className="driver-verify-headings">
          <h1>please verify your identification details!</h1>
        </div>
        <div className="driver-verify-form">
          <form action="">
            <div className="verify-input-filed">
              <input type="text" placeholder="Enter Your Adhar Card Id" />
              <label htmlFor="adharId">Upload the Adhar Card Image</label>
            </div>
            <input type="file" id="adharId" />
            <input type="text" placeholder="Enter your License ID" />
            <label htmlFor="licenseId">Upload the License ID Image</label>
            <input type="file" id="licenseId" />
            <label htmlFor="selfie">Upload a clear photo of yourself</label>
            <input type="file" id="selfie" />
            <input type="text" placeholder="Choose your location" />
            <Link to="/driver-relax">
              <button>verify</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DriverVerify;
