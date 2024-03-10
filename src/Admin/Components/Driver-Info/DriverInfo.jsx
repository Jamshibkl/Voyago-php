import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../admin-navbar/Navbar";

function DriverInfo() {
  return (
    <div className="admin-Dashboard">
      <div className="admin-SideBar">
        <Sidebar />
      </div>

      <div className="admin-Content">
        <Navbar />
        <div className="dashboard-driver-info">
          <div className="dashboard-driver">
            <h2>Verification pending</h2>
            <div className="driver-table">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverInfo;
