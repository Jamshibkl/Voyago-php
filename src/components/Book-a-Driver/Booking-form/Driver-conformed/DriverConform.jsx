import React, { useState, useEffect } from "react";
import "./DriverConform.css";
import NavBar from "../../../NavBar/NavBar";
import DriverImage from "../../../../Assets/comvecteezy420553.jpg";
import {  useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function DriverConform() {
  const { driverId } = useParams();

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

  const [driverInfo, setDriverInfo] = useState([]);

  const RandomOTP = localStorage.getItem("RandomOTP");

  const [otp, setOtp] = useState("");

  useEffect(() => {
    const getDriver = () => {
      fetch("http://localhost/devtest/reactjs/DriverVerifyInfo/DriverInfo.php")
        .then((res) => res.json())
        .then((data) => {
          setDriverInfo(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getDriver();
  }, []);

  const handleInputChange = (e, type) => {
    switch (type) {
      case "OTP":
        setOtp(e.target.value);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (RandomOTP === otp) {
      navigate("/ride-started");
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
              {driverInfo.map((driver, index) => (
                <table className="driver-info" key={index}>
                  {driver.id === driverId && (
                    <div>
                      <tr></tr>
                      <tr>
                        <th>Driver ID:</th>
                        <td>
                          {driver.id}
                          {localStorage.setItem("driverid", driver.id)}
                        </td>
                      </tr>
                      <tr>
                        <th>Name:</th>
                        <td>
                          {driver.driver}
                          {localStorage.setItem("drivername", driver.driver)}
                        </td>
                      </tr>
                      <tr>
                        <th>Email:</th>
                        <td>
                          {driver.email}
                          {localStorage.setItem("driveremail", driver.email)}
                        </td>
                      </tr>
                      <tr>
                        <th>Mobile:</th>
                        <td>
                          {driver.mobile}
                          {localStorage.setItem("drivermobile", driver.mobile)}
                        </td>
                      </tr>
                    </div>
                  )}
                </table>
              ))}
            </div>
          </div>
          <div className="otp-section">
            <h3>Given Otp To Confirm The Driver</h3>
            <input
              type="text"
              placeholder="67688"
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
