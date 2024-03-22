import React from "react";
import "./Destination.css";
import NavBar from "../../NavBar/NavBar";
import ArrivedDestinationImg from "../../../Assets/Ride-with-Uber.jpg";
// import PhoneImg from "../../../Assets/phone-call.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Destination() {
  const navigate = useNavigate();

  const [hour, setHour] = useState("");
  const [charge, setCharge] = useState("");
  const [driver, setDriver] = useState("");
  const [driverId, setDriverId] = useState("");
  const [driverName, setDriverName] = useState("");
  const [driverEmail, setDriverEmail] = useState("");
  const [driverMobile, setDriverMobile] = useState("");
  const [driverLocation, setDriverLocation] = useState("");
  const [driverAdharId, setDriverAdharId] = useState("");
  const [driverLicense, setDriverLicense] = useState("");

  const rideTime = localStorage.getItem("rideTime");
  const DrId = localStorage.getItem("driverid");
  const userName = localStorage.getItem("username");
  const UserMobile = localStorage.getItem("mobile");

  useEffect(() => {
    let totalHour = 0;
    let totalCharge = 0;

    if (rideTime) {
      if (rideTime <= 4) {
        totalHour = 4;
        totalCharge = 500;
      } else if (rideTime > 4 && rideTime <= 6) {
        totalHour = Math.ceil(rideTime);
        totalCharge = 750;
      } else if (rideTime > 6 && rideTime <= 8) {
        totalHour = Math.ceil(rideTime);
        totalCharge = 1000;
      } else {
        let roundHour = Math.ceil(rideTime);
        if (roundHour > 8 && roundHour <= 9) {
          totalHour = Math.ceil(rideTime);
          totalCharge = 1150;
        } else if (roundHour > 9 && roundHour <= 10) {
          totalHour = Math.ceil(rideTime);
          totalCharge = 1250;
        } else {
          let extraHour = roundHour - 10;
          totalHour = roundHour;
          totalCharge = 1250 + extraHour * 150;
        }
      }
      setCharge(totalCharge);
      setHour(totalHour);
    }
  }, [rideTime]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost/devtest/reactjs/DriverVerifyInfo/DriverInfo.php"
        );
        const data = await response.json();
        const filteredDriver = data.find((item) => item.id === DrId);
        setDriver(filteredDriver);
        setDriverId(filteredDriver.id);
        setDriverName(filteredDriver.driver);
        setDriverEmail(filteredDriver.email);
        setDriverMobile(filteredDriver.mobile);
        setDriverLocation(filteredDriver.location);
        setDriverAdharId(filteredDriver.adharId);
        setDriverLicense(filteredDriver.license);
        // console.log(driverMobile);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //post data

  const DriverVerifyInfo = async (driver) => {
    const formData = new FormData();
    formData.append("driverId", driver.id);
    formData.append("driverName", driver.driver);
    formData.append("driverEmail", driver.email);
    formData.append("driverMobile", driver.mobile);
    formData.append("driverLocation", driver.location);
    formData.append("driverAdharId", driver.adharId);
    formData.append("driverLicense", driver.license);
    formData.append("UserName", userName);
    formData.append("UserMobile", UserMobile);
    formData.append("tolatHour", hour);
    formData.append("totalCharge", charge);

    const response = await axios.post(
      "http://localhost/devtest/reactjs/RideInformation/RideInfo.php",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
      );
    
      
    };
    
    const handleSubmit = async (driver) => {
      DriverVerifyInfo(driver);
      navigate(`/payment-checkout/${charge}`); // navigate to next page with driver id as parameter
      // localStorage.setItem("randomNum", randomNum);
    };
    
    return (
      <>
      <NavBar />
      <div className="destination-section">
        <div className="destination-left">
          <h1>You have completed your journey!</h1>
          <h2>Please pay the fare amount.</h2>
          <form action="">
            <div className="destination-details">
              <h3>
                Total Hours <i>(min)</i>:{" "}
                <span>
                  {hour} <i>hr</i>{" "}
                </span>
              </h3>
              <h3>
                Total Charge <i>(min)</i>:{" "}
                <span>
                  {charge} <i>/-</i>
                </span>
              </h3>
            </div>
            <br />
            <label>
              <input type="radio" name="paymentMethod" /> Online Payment
            </label>
            <label>
              <input type="radio" name="paymentMethod" /> Offline Payment
            </label>
            <br />
            {/* <Link to={`/payment-checkout/${charge}`}> */}
            <button
              className="Confirm-payment"
              onClick={() => handleSubmit(driver)}
            >
              Confirm payment
            </button>
            {/* </Link> */}
          </form>
        </div>
        <div className="destination-img">
          <img src={ArrivedDestinationImg} alt="" />
        </div>
      </div>
      {/* <div className="facing-diff">
        <h3>Facing any difficulties? Feel free to contact!</h3>

        <span>
          <img src={PhoneImg} alt="" />
          +919895033329
        </span>
      </div> */}
    </>
  );
}

export default Destination;
