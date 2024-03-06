import React from "react";
import "./DriverConform.css";
import NavBar from "../../NavBar/NavBar";
import { Link } from "react-router-dom";
import DriverImage from "../../../Assets/driver_profile-5.jpg";
function DriverConform() {
  return (
    <>
      <NavBar />
      <div className="confirme-section">
        <div className="driver-conform-headings">
          <h1>Your driver Arrived at Your Pickup Location!</h1>
          <h2>Use below PIN to confirm the driver.</h2>
          <span>270432</span>
          <br />
          <Link to="/on-the-way">
            <button className="confirme-driver-btn">CONFIRM DRIVER</button>
          </Link>
          <form action="">
            <input type="text" placeholder="Pick Up : Mumbai" readOnly />
            <input type="text" placeholder="Drop : delhi" readOnly />
            <br />
            <input type="text" placeholder="Date : 12/08/24" readOnly />
            <input type="text" placeholder="Time : 12:00" readOnly />
            <input type="text" placeholder="Amount : 450" readOnly />
          </form>
        </div>
        <div className="driver-info-section">
          <img src={DriverImage} alt="" />
          <h3>Driver Name</h3>
          <p>3 Years of Experience</p>
          <p>Drivers ID : AS36GDD45</p>
        </div>
      </div>

      <div className="cancel_section">
        <p>
          Please note that repeated cancellations can disrupt our operations and
          inconvenience other passengers who rely on our services. To maintain
          the highest level of efficiency and fairness for all users, we kindly
          request you to avoid frequent cancellations.
        </p>
        <br />
        <button className="cancle-ride-btn">CANCEL THE RIDE</button>
      </div>
    </>
  );
}

export default DriverConform;
