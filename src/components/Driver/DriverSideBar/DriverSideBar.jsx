import React, { useState } from "react";
import "./DriverSideBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBell,
  faCar,
  faRightFromBracket,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";

function DriverSideBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function logoutSubmit() {
    localStorage.setItem("driver-login", "");
    localStorage.setItem("loginStatus", "Logged out successfully!");
    navigate("/driver-login");
  }
  const driveremail = localStorage.getItem("email");

  return (
    <div className={`Driver-SideBar ${isOpen ? "open" : ""}`}>
      <div className="Driver-brand">
        <h3>VOYAGO</h3>
        <div className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="Driver-dashboard-section">
        <div className="Driver-dashboard-options">
          <h4 style={{ fontSize: "15px" }}>{driveremail}</h4>
          <NavLink to="/driver-dashbord" style={{ textDecoration: "none" }}>
            <div className="Driver-dashboard-items">
              <h5>
                {" "}
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faHouse} />
                </span>
                Dashboard
              </h5>
            </div>
          </NavLink>
          <NavLink to="/driver-profile" style={{ textDecoration: "none" }}>
            <div className="Driver-dashboard-items">
              <h5>
                {" "}
                <span>
                  <FontAwesomeIcon icon={faUser} />
                </span>
                driver info
              </h5>
            </div>
          </NavLink>
          <NavLink to="/driver-notify" style={{ textDecoration: "none" }}>
            <div className="Driver-dashboard-items">
              <h5>
                {" "}
                <span>
                  <FontAwesomeIcon icon={faBell} />
                </span>
                Notifications
              </h5>
            </div>
          </NavLink>
          <NavLink to="/driver-ride" style={{ textDecoration: "none" }}>
            <div className="Driver-dashboard-items">
              <h5>
                {" "}
                <span>
                  <FontAwesomeIcon icon={faCar} />
                </span>
                Rides
              </h5>
            </div>
          </NavLink>
          <hr style={{ color: "white", width: "100%", margin: "0" }} />
          <button onClick={logoutSubmit}>
            {" "}
            <span style={{ margin: "0px 8px" }}>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </span>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default DriverSideBar;
