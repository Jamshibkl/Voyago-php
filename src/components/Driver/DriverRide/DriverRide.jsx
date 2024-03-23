import React, { useState, useEffect } from "react";
import DriverSideBar from "../DriverSideBar/DriverSideBar";
import "./DriverRide.css";
import axios from "axios";

function DriverRide() {
  const [driver, setDriver] = useState([]);
  const driverEmail = localStorage.getItem("driveremail");
  // console.log(driverEmail)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/devtest/reactjs/RideInformation/get_rideinfo.php"
        );
        setDriver(response.data);
      } catch (error) {
        console.error("Error fetching driver information:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Driver-ride-section">
      <DriverSideBar />
      <div className="ride-information">
        <div className="current-ride">
          <h2>Ride History</h2>
          <table>
            <thead>
              <tr>
                <th>from</th>
                <th>UserName</th>
                <th>UserMobile</th>
                <th>tolatHour</th>
                <th>totalCharge</th>
              </tr>
            </thead>
            <tbody>
              {driver.map((driver, index) => (
                <tr key={index}>
                  {driver.driverEmail === driverEmail ? (
                    <>
                      <td>{driver.location}</td>
                      <td>{driver.UserName}</td>
                      <td>{driver.UserMobile}</td>
                      <td>{driver.tolatHour}</td>
                      <td>{driver.totalCharge}</td>
                    </>
                  ) : null }
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DriverRide;
