import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const navigate = useNavigate();
  function logoutSubmit() {
    localStorage.setItem("admin-login", "");
    localStorage.setItem("loginStatus", "Logged out successfully!");
    navigate("/admin-login");
  }

  return (
    <div>
      <div className="admin-nav">
        <div className="admin-logo">
          <div className="social-logo"></div>
          <div className="social-logo"></div>
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

export default Navbar;