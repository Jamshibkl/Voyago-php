import React, { useState, useEffect } from "react";
import "./LoadingPage.css";

function LoadingPage() {
  const [loading, setLoading] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);

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
            <div>
              {product.map((driver, index) => (
                <div key={index}>
                  {index !== 2 ? (
                    <div className="driver-table-info">
                      <h2>Driver details</h2>
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
                              </th>
                            </tr>
                            <tr>
                              <th className="profile-tableth">Email</th>
                              <th className="profile-table-th-info">
                                {driver.email}
                              </th>
                            </tr>
                            <tr>
                              <th className="profile-tableth">Mobile Number</th>
                              <th className="profile-table-th-info">
                                {driver.mobile}
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
    </div>
  );
}

export default LoadingPage;
