import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./LoadingPage.css";

function LoadingPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(null);
  const [driverId, setDriverId] = useState("");
  const [driverName, setDriverName] = useState("");
  const [driverEmail, setDriverEmail] = useState("");
  const [driverMobile, setDriverMobile] = useState("");
  const [randomNum, setRandomNum] = useState("");

  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");

  const pickup = localStorage.getItem("pickup");
  // console.log(pickup);

  const generateRandomNumber = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  // Generate a random 6-digit number
  // console.log(randomNum);

  const findingADriver = (e) => {
    if (loading !== e) {
      setLoading(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      findingADriver(true);
    }, 2000);
  }, []);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = () => {
      fetch("http://localhost/devtest/reactjs/DriverVerifyInfo/DriverInfo.php")
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          if (data.length > 0) {
            const driver = data[0];
            setDriverName(driver.driver);
            setDriverEmail(driver.email);
            setDriverMobile(driver.mobile);
            setDriverId(driver.id);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getProduct();
  }, []);

  //post the all data

  const DriverVerifyInfo = async () => {
    const formData = new FormData();
    formData.append("driverId", driverId);
    formData.append("driverName", driverName);
    formData.append("driverEmail", driverEmail);
    formData.append("driverMobile", driverMobile);
    formData.append("randomNum", randomNum);

    const responce = await axios.post(
      "http://localhost/devtest/reactjs/bookinginformation/booking_info.php",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    if (responce.data.success) {
      setMessage(responce.data.success);
      setTimeout(() => {
        navigate("/ride-started");
      }, 500);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRandomNum(generateRandomNumber());

    localStorage.setItem("randomNum", randomNum);

    if (
      driverId !== "" &&
      driverName !== "" &&
      driverEmail !== "" &&
      driverMobile !== "" &&
      randomNum !== ""
    ) {
      await DriverVerifyInfo();
    } else {
      setMsg("All fields are required!");
    }
  };

  return (
    <div className="main-loading">
      <div className="fixed-section">
        <div className="finding-page">
          <div className={loading == true ? "loading-false" : "loading-text"}>
            <h1>Sit back and relax!</h1>
            <h1>Your driver is arriving soon.</h1>
          </div>
          <div className={loading == true ? "loading-text" : "loading-false"}>
            <div className="driver-container">
              {product.map(
                (driver, index) =>
                  index <= 1 && (
                    <div key={index}>
                      {driver.location === pickup ? (
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
                                    {driverName}
                                  </th>
                                </tr>
                                <tr>
                                  <th className="profile-tableth">Email</th>
                                  <th className="profile-table-th-info">
                                    {driverEmail}
                                  </th>
                                </tr>
                                <tr>
                                  <th className="profile-tableth">
                                    Mobile Number
                                  </th>
                                  <th className="profile-table-th-info">
                                    {driverMobile}
                                  </th>
                                </tr>
                                <tr>
                                  <th className="profile-tableth">Driver Id</th>
                                  <th className="profile-table-th-info">
                                    <input
                                      type="text"
                                      name="username"
                                      className=""
                                      placeholder="Enter Your User Name "
                                      value={driverId}
                                      onChange={(e) =>
                                        setDriverId(e.target.value)
                                      }
                                    />
                                  </th>
                                </tr>
                              </thead>
                            </table>
                            <div className="request-btns">
                              {/* <Link to={`/ride-started/${driverId}`}>
                                <button className="accept-btn">Accept</button>
                              </Link> */}
                              {/* <Link to='/ride-started'> */}
                              <button
                                className="accept-btn"
                                onClick={handleSubmit}
                              >
                                Accept
                              </button>
                              {/* </Link> */}
                              <button className="reject-btn">Reject</button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
