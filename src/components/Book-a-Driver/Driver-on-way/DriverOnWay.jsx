import React from "react";
import "./DriverOnWay.css";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import DriverOnWayImg from "../../../Assets/Simple-Location-Picker (1).webp";
import PhoneImg from "../../../Assets/phone-call.png";
function DriverOnWay() {
  return (
    <>
      <NavBar />
      <div className="driver-on-way">
        <div className="driver-on-page">
          <div className="driver-on-headings">
            <h1>Sit back and relax!</h1>
            <h1>Your driver is on the way!</h1>
          </div>
          <img src={DriverOnWayImg} alt="" />
        </div>
        <div className="facing-diff">
          <h3>Facing any difficulties? Feel free to contact!</h3>
          <Link to="/driver-confirm">
            <span>
              <img src={PhoneImg} alt="" />
              +919895033329
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default DriverOnWay;
