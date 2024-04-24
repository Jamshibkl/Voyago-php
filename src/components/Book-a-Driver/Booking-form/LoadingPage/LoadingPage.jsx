import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoadingPage.css";

function LoadingPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(null);
  const [product, setProduct] = useState([]);

  const pickup = localStorage.getItem("pickup");

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  useEffect(() => {
    const getProduct = () => {
      fetch("http://localhost/devtest/reactjs/DriverVerifyInfo/DriverInfo.php")
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getProduct();
  }, []);

  const DriverVerifyInfo = async (driver) => {
    const formData = new FormData();
    formData.append("driverId", driver.id);
    formData.append("driverName", driver.driver);
    formData.append("driverEmail", driver.email);
    formData.append("driverMobile", driver.mobile);
    formData.append("randomNum", randomNum);

    const response = await axios.post(
      "http://localhost/devtest/reactjs/bookinginformation/booking_info.php",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    if (response.data.success) {
      navigate(`/driver-confirm/${driver.id}`); // navigate to next page with driver id as parameter
    }
  };

  const generateRandomNumber = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };
  const randomNum = generateRandomNumber();

  const handleSubmit = async (driver) => {
    DriverVerifyInfo(driver);
    localStorage.setItem("randomNum", randomNum);
  };

  return (
    <div className="main-loading">
      <div className="fixed-section">
        <div className="finding-page">
          <div className={loading == true ? "loading-false" : "loading-text"}>
            <h1>Sit back and relax!</h1>
            <h1>Your driver is arriving soon.</h1>
          </div>
          <div className={loading == true ? "loading-text2" : "loading-false"}>
            <div className="driver-container">
              {product.map(
                (driver, index) =>
                  index <= 100 && (
                    <div key={index} setDriverId={driver.id}>
                      {driver.location === pickup &&
                        driver.rideStatus === "online" && (
                          <div className="driver-table-info">
                            <h2>Driver details</h2>
                            <div className="driver-profile-sec">
                              <img
                                src={`http://localhost/devtest/reactjs/DriverVerifyInfo/images/Profile/${driver.profileImg}`}
                                alt="njsnu"
                                className="driver-profile img"
                              />
                              <h5 className="driver-name">{driver.driver} </h5>
                            </div>
                            <div className="driver-profile-tables">
                              <table>
                                <thead>
                                  <tr>
                                    <th className="profile-tableth">Name</th>
                                    <th className="profile-table-th-info">
                                      {driver.driver}
                                    </th>
                                  </tr>
                                  <tr>
                                    <th className="profile-tableth">Email</th>
                                    <th className="profile-table-th-info">
                                      {driver.email}
                                    </th>
                                  </tr>
                                  <tr>
                                    <th className="profile-tableth">
                                      Mobile Number
                                    </th>
                                    <th className="profile-table-th-info">
                                      {driver.mobile}
                                    </th>
                                  </tr>
                                  <tr>
                                    <th className="profile-tableth">
                                      Driver Id
                                    </th>
                                    <th className="profile-table-th-info">
                                      {driver.id}
                                    </th>
                                  </tr>
                                </thead>
                              </table>
                              <div className="request-btns">
                                <button
                                  className="accept-btn"
                                  onClick={() => handleSubmit(driver)}
                                >
                                  Accept
                                </button>
                                <button className="reject-btn">Reject</button>
                              </div>
                              <div className="profile-hr-line"></div>
                            </div>
                          </div>
                        )}
                    </div>
                  )
              )}
            </div>
            {/* <div className="not-fount">
              <h3>Driver not found</h3>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoadingPage;
