import React, { useState, useEffect } from "react";
import "./DriverConform.css";
import NavBar from "../../../NavBar/NavBar";
import DriverImage from "../../../../Assets/comvecteezy420553.jpg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function DriverConform() {
  const { driverId } = useParams();

  const navigate = useNavigate();

  const cancel = localStorage.getItem("cancel");
  const accept = localStorage.getItem("accept");
  const pickup = localStorage.getItem("pickup");
  const userName = localStorage.getItem("username");
  const pickupTime = localStorage.getItem("pickupTime");
  const pickupDate = localStorage.getItem("pickupDate");
  const cabType = localStorage.getItem("cabType");
  const mobile = localStorage.getItem("mobile");

  // const drid = localStorage.getItem("drId");
  // const drName = localStorage.getItem("drName");
  // const drEmail = localStorage.getItem("drEmail");
  // const drMobile = localStorage.getItem("drMobile");

  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const [driverInfo, setDriverInfo] = useState([]);

  const RandomOTP = localStorage.getItem("RandomOTP");

  const [otp, setOtp] = useState("");

  let loaded;

  useEffect(() => {
    if (loaded !== null) {
      const timeout = setTimeout(() => {
        window.location.reload();
      }, 15000);

      return () => clearTimeout(timeout);
    }
  }, [loaded]);

  useEffect(() => {
    const getDriver = () => {
      fetch("http://localhost/devtest/reactjs/DriverVerifyInfo/DriverInfo.php")
        .then((res) => res.json())
        .then((data) => {
          setDriverInfo(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getDriver();
  }, []);

  const handleInputChange = (e, type) => {
    switch (type) {
      case "OTP":
        setError("");
        setOtp(e.target.value);
        if (e.target.value === "") {
          setError("OTP has left blank!");
        }
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (RandomOTP === otp) {
      navigate("/ride-started");
    } else {
      setError("You Entred OTP is Wrong!");
    }
  };

  const goToHome = (e) => {
    localStorage.setItem("cancel", "")
    navigate(-2);

  }

  return (
    <>
      <NavBar />
      <div className="confirme-section">
        {accept || cancel ? (
          <>
            {accept == "Accept" ? (
              <>
                {localStorage.setItem("loaded", "loaded")}

                <div className="driver-conform-headings">
                  <h3>Your Booking Details</h3>
                  <table className="booking-details">
                    <tr>
                      <th>PickUp Location :</th>
                      <th>Name</th>
                      <th>Mobile No:</th>
                      <th>PickUp Date:</th>
                      <th>PickUp Time</th>
                      <th>Cab Type</th>
                    </tr>
                    <tr>
                      <td>{pickup}</td>
                      <td>{userName}</td>
                      <td>{mobile}</td>
                      <td>{pickupDate}</td>
                      <td>{pickupTime}</td>
                      <td>{cabType}</td>
                    </tr>
                  </table>

                  <h3>Hourly Charges</h3>

                  <table>
                    <tr>
                      <th>Per Hour</th>
                      <th>Charges</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Rs.150₹</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Rs.250₹</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Rs.500₹</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Rs.750₹</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Rs.1000₹</td>
                    </tr>
                  </table>
                </div>

                <div className="dirver-info">
                  <h3>Driver Details</h3>
                  <div className="driver-info-section">
                    <div>
                      <img src={DriverImage} alt="" />
                    </div>
                    <div>
                      {driverInfo.map((driver, index) => (
                        <table className="driver-info" key={index}>
                          {driver.id === driverId && (
                            <div>
                              <tr></tr>
                              <tr>
                                <th>Driver ID:</th>
                                <td>
                                  {driver.id}
                                  {localStorage.setItem("driverid", driver.id)}
                                </td>
                              </tr>
                              <tr>
                                <th>Name:</th>
                                <td>
                                  {driver.driver}
                                  {localStorage.setItem(
                                    "drivername",
                                    driver.driver
                                  )}
                                </td>
                              </tr>
                              <tr>
                                <th>Email:</th>
                                <td>
                                  {driver.email}
                                  {localStorage.setItem(
                                    "driveremail",
                                    driver.email
                                  )}
                                </td>
                              </tr>
                              <tr>
                                <th>Mobile:</th>
                                <td>
                                  {driver.mobile}
                                  {localStorage.setItem(
                                    "drivermobile",
                                    driver.mobile
                                  )}
                                </td>
                              </tr>
                            </div>
                          )}
                        </table>
                      ))}
                    </div>
                  </div>
                  <div className="otp-section">
                    <h3>Enter the OTP to confirm the driver.</h3>

                    <p className="valid-msg">
                      <span className="otp-heading">
                        The driver will reach you within 10 minutes!
                      </span>
                      <br />
                      {msg !== "" ? (
                        <span className="success">{msg}</span>
                      ) : (
                        <span className="error">{error}</span>
                      )}
                    </p>
                    <input
                      type="text"
                      placeholder="Enter The OTP"
                      name="OTP"
                      value={otp}
                      onChange={(e) => handleInputChange(e, "OTP")}
                    />
                    {/* <Link to="/ride-started"> */}
                    <button onClick={handleSubmit}>Confirm Driver</button>
                    {/* </Link> */}
                  </div>
                </div>
                <br />
              </>
            ) : (
              <div className="Loading-sec">
                <div className="loader-container">
                  <h5 className="cancelText">Sorry....</h5>
                  <h4>Ride Canceld</h4>
                  <button className="gotohome" onClick={goToHome}>
                    <svg
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 1024 1024"
                    >
                      <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                    </svg>
                    <span>Back</span>
                  </button >
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="Loading-sec">
            <div className="loader-container">
              <div className="loader"></div>
              <div className="loader-text">Loading...</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DriverConform;
