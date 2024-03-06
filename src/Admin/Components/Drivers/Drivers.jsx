import React from "react";
import "./Drivers.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../admin-navbar/Navbar";

function Drivers() {
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
              <table>
                <tr>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>email</th>
                  <th>joined on</th>
                </tr>
                <tr className="table-data">
                  <td>john</td>
                  <td>7894561230</td>
                  <td>abc@gmail.com</td>
                  <td>12-1-2024</td>
                  <td className="btn-td">
                    <div className="request-btn">
                      <button className="accept-btn">Accept</button>
                      <button className="reject-btn">Reject</button>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drivers;
