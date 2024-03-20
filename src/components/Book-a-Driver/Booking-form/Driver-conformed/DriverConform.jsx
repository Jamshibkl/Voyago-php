import React, { useState } from "react";
import "./DriverConform.css";
import NavBar from "../../../NavBar/NavBar";
import DriverImage from "../../../../Assets/comvecteezy420553.jpg";
import { useNavigate } from "react-router-dom";
function DriverConform() {

  const navigate = useNavigate();

  const pickup = localStorage.getItem("pickup");
  const userName = localStorage.getItem("username");
  const pickupTime = localStorage.getItem("pickupTime");
  const pickupDate = localStorage.getItem("pickupDate");
  const cabType = localStorage.getItem("cabType");
  const mobile = localStorage.getItem("mobile");

  const drid = localStorage.getItem("drId");
  const drName = localStorage.getItem("drName");
  const drEmail = localStorage.getItem("drEmail");
  const drMobile = localStorage.getItem("drMobile");

  const RandomOTP = localStorage.getItem("RandomOTP");

  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const [otp, setOtp] = useState("");

  const handleInputChange = (e, type) => {
    switch (type) {
      case "OTP":
        setError("");
        setOtp(e.target.value);
        if (e.target.value === "") {
          setError("OTP has left blank!");
        }
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (RandomOTP === otp) {
      navigate("/ride-started");
    }
    else {
      setError("You Entred OTP is Wrong!");
    }
    
  };

  return (
    <>
      <NavBar />
      <div className="confirme-section">
        <div className="driver-conform-headings">
          <h3>Your Booking Details</h3>
          <table className="booking-details">
            <tr>
              <th>PickUp Location :</th>
              <th>Name</th>
              <th>Mobile No:</th>
              <th>PickUp Date:</th>
              <th>PickUp Time</th>
              <th>Cab Type</th>
            </tr>
            <tr>
              <td>{pickup}</td>
              <td>{userName}</td>
              <td>{mobile}</td>
              <td>{pickupDate}</td>
              <td>{pickupTime}</td>
              <td>{cabType}</td>
            </tr>
          </table>

          <h3>Hourly Charges</h3>

          <table>
            <tr>
              <th>Per Hour</th>
              <th>Charges</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Rs.150₹</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Rs.250₹</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Rs.500₹</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Rs.750₹</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Rs.1000₹</td>
            </tr>
          </table>
        </div>

        <div className="dirver-info">
          <h3>Driver Details</h3>
          <div className="driver-info-section">
            <div>
              <img src={DriverImage} alt="" />
            </div>
            <div>
              <table className="driver-info">
                <tr></tr>
                <tr>
                  <th>Driver ID:</th>
                  <td>{drid}</td>
                </tr>
                <tr>
                  <th>Name:</th>
                  <td>{drName}</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td>{drEmail}</td>
                </tr>
                <tr>
                  <th>Mobile:</th>
                  <td>{drMobile}</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="otp-section">
          
            <h3>Enter the OTP to confirm the driver.</h3>
            
            <p className="valid-msg">
              <span className="otp-heading">The driver will reach you within 10 minutes!</span>
           <br/>
            {msg !== "" ? (
              <span className="success">{msg}</span>
            ) : (
              <span className="error">{error}</span>
            )}
          </p>
            <input
              type="text"
              placeholder="Enter Your OTP"
              name="OTP"
              value={otp}
              onChange={(e) => handleInputChange(e, "OTP")}
            />
            {/* <Link to="/ride-started"> */}
            <button onClick={handleSubmit}>Confirm Driver</button>
            {/* </Link> */}
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default DriverConform;