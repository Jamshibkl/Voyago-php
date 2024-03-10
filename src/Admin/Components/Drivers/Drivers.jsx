import React, { useEffect, useState } from "react";
import "./Drivers.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../admin-navbar/Navbar";

function Drivers() {
  const [driver, setDriver] = useState([]);
  const [error, setError] = useState(null); // Track potential errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/devtest/reactjs/DriverVerifyInfo/get_driverinfo.php"
        ); // Modified URL
        setDriver(response.data);
      } catch (error) {
        // Handle errors gracefully, e.g., display an error message
        console.error("Error fetching driver:", error);
        setError(error); // Store error for potential display
      }
    };

    fetchData();
  }, []);

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
              {error ? (
                // Display error message if available
                <p>Error fetching customers: {error.message}</p>
              ) : (
                driver.length > 0 && (
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Joined On</th>
                      </tr>
                    </thead>
                    <tbody>
                      {driver.map((driver, index) => (
                        <tr className="user-data" key={index}>
                          <td>{driver.id}</td>
                          <td>{driver.driver}</td>
                          <td>{driver.email}</td>
                          <td>{driver.mobile}</td>

                          <td className="btn-td">
                            <div className="request-btn">
                              <Link to="/driverinfo">
                                <button className="accept-btn">More</button>
                              </Link>
                              <button className="reject-btn">Reject</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drivers;
