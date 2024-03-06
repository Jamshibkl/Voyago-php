import React from "react";
import "./Admin.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/admin-navbar/Navbar";

function Admin() {
  return (
    <div className="admin-Dashboard">
      <div className="admin-SideBar">
        <Sidebar />
      </div>

      <div className="admin-Content">
        <Navbar />
      </div>
    </div>
  );
}

export default Admin;
