import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../admin-navbar/Navbar";
import { useParams } from "react-router-dom";
import "./DriverInfo.css";
import img3 from "../../../Assets/driver_profile.jpg";
import axios from "axios";

function DriverInfo() {
  const { driverId } = useParams();
  console.log(driverId);

  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = () => {
      fetch("http://localhost/devtest/reactjs/DriverVerifyInfo/DriverInfo.php")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getProduct();
  }, []);

  const handleReject = async () => {
    const confirmReject = window.confirm(
      "Are you sure you want to reject this driver?"
    );
    if (confirmReject) {
      try {
        await axios.delete(
          `http://localhost/devtest/reactjs/DriverVerifyInfo/delete_driver.php?id=${driverId}`
        );
        // After rejection, you may redirect the user to another page or perform any other action
        console.log("Driver rejected successfully!");
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
            <h2>Driver details</h2>
            {product.map((driver, index) => (
              <div key={index}>
                {driver.id === driverId ? (
                  <div className="driver-table">
                    <div className="driver-profile">
                      <img
                        src={`http://localhost/devtest/reactjs/DriverVerifyInfo/images/Profile/${driver.profileImg}`}
                        alt="njsnu"
                        className="driver-profile img"
                      />
                      <h5 className="driver-profile-name">{driver.driver}</h5>
                    </div>
                    <div className="driver-profile-table">
                      <table>
                        <thead>
                          <tr>
                            <th className="profile-table-th">Email</th>
                            <th className="profile-table-th">{driver.email}</th>
                          </tr>
                          <tr>
                            <th className="profile-table-th">Mobile Number</th>
                            <th className="profile-table-th">
                              {driver.mobile}
                            </th>
                          </tr>
                          <tr>
                            <th className="profile-table-th">License ID</th>
                            <th className="profile-table-th">
                              {driver.license}
                            </th>
                          </tr>
                          <tr>
                            <th className="profile-table-th">adhar ID</th>
                            <th className="profile-table-th">
                              {driver.adharId}
                            </th>
                          </tr>
                          <tr>
                            <th className="profile-table-th">adhar photo</th>
                            <th className="profile-table-th">
                              <img
                                className="driver-adhar"
                                src={`http://localhost/devtest/reactjs/DriverVerifyInfo/images/adhar/${driver.adharImg}`}
                                alt=""
                              />
                            </th>
                          </tr>
                          <tr>
                            <th className="profile-table-th">License photo</th>
                            <th className="profile-table-th">
                              <img
                                className="driver-adhar"
                                src={`http://localhost/devtest/reactjs/DriverVerifyInfo/images/license/${driver.licenseImg}`}
                                alt=""
                              />
                            </th>
                          </tr>
                        </thead>
                      </table>
                      <div className="request-btns">
                        {/* <button className="accept-btn">Accept</button> */}
                        <button
                          className="reject-btn"
                          onClick={() => handleReject(driver.id)}>
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverInfo;
