import React from "react";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../admin-navbar/Navbar";

function Dashboard() {
  return (
    <div className="admin-Dashboard">
      <div className="admin-SideBar">
        <Sidebar />
      </div>

      <div className="admin-Content">
        <Navbar />
        <div className="dashboard-content">
          <div className="dashboard-info">
            <h2>DASHBOARD</h2>
            <p>Welcome to your dashboard</p>
            <div className="all-dash-info">
              <div className="dash-info-container1">
                <div className="dash-information">
                  <h5>Total Customers</h5>
                  <br />
                  <h4>1765</h4>
                  <br />
                  <h6>Since last month</h6>
                </div>
                <div className="dash-information">
                  <h5>Total Drivers</h5>
                  <br />
                  <h4>106</h4>
                  <br />
                  <h6>Since last month</h6>
                </div>
              </div>

              <div className="dash-info-container2">
                <div className="dash-information">
                  <h5>Monthly Sales</h5>
                  <br />
                  <h4>55476</h4>
                  <br />
                  <h6>Since last month</h6>
                </div>
                <div className="dash-information">
                  <h5>Active Drivers</h5>
                  <br />
                  <h4>78</h4>
                  <br />
                  <h6>Since last month</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
