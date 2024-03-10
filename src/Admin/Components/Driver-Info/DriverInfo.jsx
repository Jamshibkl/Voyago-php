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

  //const [data, setData] = useState({ key: "value" }); // Your data to send
  //  setData = DId;
  // const sendDataToPHP = () => {
  //   axios
  //     .get(
  //       "http://localhost/devtest/reactjs/DriverVerifyInfo/DriverInfo.php",
  //       DId
  //     )
  //     .then((response) => {
  //       console.log("Response from PHP:", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error sending data to PHP:", error);
  //     });
  // };
  // sendDataToPHP();

  const [product, setProduct] = useState([]);

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
                        <button className="accept-btn">Accept</button>
                        <button className="reject-btn">Reject</button>
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
