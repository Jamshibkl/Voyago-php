import React from 'react'
import "./TotalAdmins.css"
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../admin-navbar/Navbar";

function TotalAdmins() {
  return (
    <div className="admin-Dashboard">
      <div className="admin-SideBar">
        <Sidebar />
      </div>

      <div className="admin-Content">
        <Navbar />
        <div className="dashboard-admin-info">
          <div className="dashboard-admin">
            <h2>Total Drivers</h2>
            <div className="admin-table">
              <table>
                <tr>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>email</th>
                  <th>Password</th>
                </tr>
                <tr className="table-data">
                  <td>john</td>
                  <td>7894561230</td>
                  <td>abc@gmail.com</td>
                  <td>12334rewq</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TotalAdmins
