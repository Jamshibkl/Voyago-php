import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserNurse,
  faUser,
  faFileInvoiceDollar,
  faLock,
  faCarSide,
} from "@fortawesome/free-solid-svg-icons";
function Dashboard() {
  return (
    <div className="admin-Dashboard">
      <div className="admin-SideBar">
        <div className="admin-brand">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <h3>VOYAGO</h3>
          </NavLink>
        </div>

        <div className="dashboard-section">
          <div className="dashboard-options">
            <NavLink to="/admin-dashboard">
              <div className="dashboard-head dashboard-head1">
                {/* icons */}
                <h5>
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faHouse} />
                  </span>
                  Dashboard
                </h5>
              </div>
            </NavLink>

            <div className="dashboard-span">
              <span>Client Facing</span>
            </div>
            <NavLink to="/drivers">
              <div className="dashboard-items">
                {/* icons */}
                <h5>
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faUserNurse} />
                  </span>
                  Drivers
                </h5>
              </div>
            </NavLink>
            <NavLink to="/customers">
              <div className="dashboard-items">
                {/* icons */}
                <h5>
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                  </span>{" "}
                  Customers
                </h5>
              </div>
            </NavLink>
            <NavLink to="/transactions">
              <div className="dashboard-items">
                {/* icons */}
                <h5>
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faCarSide} />
                  </span>{" "}
                  Total Booking
                </h5>
              </div>
            </NavLink>

            <NavLink to="/transactions">
              <div className="dashboard-items">
                {/* icons */}
                <h5>
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faFileInvoiceDollar} />
                  </span>
                  Transactions
                </h5>
              </div>
            </NavLink>

            <NavLink to="/total-drivers">
              {" "}
              <div className="dashboard-items">
                {/* icons */}
                <h5>
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faUserNurse} />
                  </span>
                  Total Drivers
                </h5>
              </div>
            </NavLink>
            {/* 
            <div className="dashboard-span">
              <span>Sales</span>
            </div>

            <div className="dashboard-items">
              
              <h5>Monthly</h5>
            </div> */}

            <div className="dashboard-span">
              <span>Management</span>
            </div>
            <NavLink to="/total-admin">
              <div className="dashboard-items">
                {/* icons */}
                <h5>
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  Admins
                </h5>
              </div>
            </NavLink>
            {/* 
            <div className="profile-section">
              <div className="profile-content">
                <div className="admin-profile">
                  <img src="" alt="vrw" />
                </div>

                <div className="admin-settings">
                  <h3>❄️</h3>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
