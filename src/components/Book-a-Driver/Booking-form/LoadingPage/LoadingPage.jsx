import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LoadingPage.css";

function LoadingPage() {
  const [loading, setLoading] = useState(null);
  const [driverId, setDriverId] = useState("");  
  const [driverName, setDriverName] = useState("");
  const [driverEmail, setDriverEmail] = useState("");
  const [driverMobile, setDriverMobile] = useState("");

  //   const [randomNumber, setRandomNumber] = useState(null);
  const pickup = localStorage.getItem("pickup");
  //   console.log(pickup);

  const findingADriver = (e) => {
    if (loading != e) {
      return setLoading(true);
    }
  };

  useEffect(() => {
    setTimeout(function () {
      findingADriver(true);
      //   generateRandomNumber();
    }, 2000);
  }, []);

  const [product, setProduct] = useState([]);
  //   const [driver, setDriver] = useState([]);

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

  //   let newRandomNumber=0;
  //   const generateRandomNumber = () => {
  //     newRandomNumber = Math.floor(Math.random() * 1); // Generates a random number between 1 and 100
  //     setRandomNumber(newRandomNumber);
  //     // console.log(newRandomNumber);
  //   };

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
                          {/* <h2>{driver.location}</h2> */}
                          {/* {console.log(index)} */}
                          <div className="driver-profile-sec">
                            <img
                              src={`http://localhost/devtest/reactjs/DriverVerifyInfo/images/Profile/${driver.profileImg}`}
                              alt="njsnu"
                              className="driver-profile img"
                            />
                            <h5 className="driver-name">{driver.driver}</h5>
                          </div>
                          <div className="driver-profile-tables">
                            <table>
                              <thead>
                                <tr>
                                  <th className="profile-tableth">Name</th>
                                  <th className="profile-table-th-info">
                                    {driver.driver}
                                    {setDriverName(driver.driver)}
                                  </th>
                                </tr>
                                <tr>
                                  <th className="profile-tableth">Email</th>
                                  <th className="profile-table-th-info">
                                    {driver.email}
                                    {setDriverEmail(driver.email)}
                                  </th>
                                </tr>
                                <tr>
                                  <th className="profile-tableth">
                                    Mobile Number
                                  </th>
                                  <th className="profile-table-th-info">
                                    {driver.mobile}
                                    {setDriverMobile(driver.mobile)}
                                  </th>
                                </tr>
                                <tr>
                                  <th className="profile-tableth">
                                    Driver Id
                                  </th>
                                  <th className="profile-table-th-info">
                                    <input
                                      type="text"
                                      name="username"
                                      className=""
                                      placeholder="Enter Your User Name "
                                      value={driver.id}
                                      onChange={() => setDriverId(driver.id)}
                                    />
                                  </th>
                                </tr>
                              </thead>
                            </table>
                            <div className="request-btns">
                              <Link to={`/ride-started/${driverId}`}>
                                <button className="accept-btn">Accept</button>
                              </Link>
                              <button className="reject-btn">Reject</button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                      {/* <hr /> */}
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