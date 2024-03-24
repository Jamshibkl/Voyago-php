import React, { useEffect, useState } from "react";
import "./Drivers.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../admin-navbar/Navbar";

function Drivers() {
  const [drivers, setDrivers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost/devtest/reactjs/DriverVerifyInfo/get_driverinfo.php"
      );
      setDrivers(response.data);
    } catch (error) {
      console.error("Error fetching drivers:", error);
      setError(error);
    }
  };

  const handleReject = async (id) => {
    const confirmReject = window.confirm("Are you sure you want to reject this driver?");
    if (confirmReject) {
      try {
        await axios.delete(`http://localhost/devtest/reactjs/DriverVerifyInfo/delete_driver.php?id=${id}`);
        // If deletion is successful, fetch updated data
        fetchData();
      } catch (error) {
        console.error("Error rejecting driver:", error);
        setError(error);
      }
    }
  };

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
                <p>Error fetching drivers: {error.message}</p>
              ) : (
                drivers.length > 0 && (
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile number</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {drivers.map((driver, index) => (
                        <tr className="user-data" key={index}>
                          <td>{driver.id}</td>
                          <td>{driver.driver}</td>
                          <td>{driver.email}</td>
                          <td>{driver.mobile}</td>
                          <td className="btn-td">
                            <div className="request-btn">
                              <Link to={`/driverinfo/${driver.id}`}>
                                <button className="accept-btn">More</button>
                              </Link>
                              <button className="reject-btn" onClick={() => handleReject(driver.id)}>
                                Reject
                              </button>
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
