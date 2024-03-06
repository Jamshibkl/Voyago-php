import React from "react";
import "./OnTheWay.css";
import NavBar from "../../NavBar/NavBar";
import { Link } from "react-router-dom";
import DriverOnWayImg from "../../../Assets/Simple-Location-Picker (1).webp";
import PhoneImg from "../../../Assets/phone-call.png";
function OnTheWay() {
  return (
    <>
      <NavBar />
      <div className="driver-on-way">
        <div className="driver-on-page">
          <div className="driver-on-headings">
            <h1>Sit back and relax!</h1>
            <h1>Your destination is arriving soon.</h1>
          </div>
          <img src={DriverOnWayImg} alt="" />
        </div>
        <div className="facing-diff">
          <h3>Facing any difficulties? Feel free to contact!</h3>
          <Link to="/destination">
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

export default OnTheWay;
