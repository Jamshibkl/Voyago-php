import React, { useEffect, useState } from "react";
import "./DriverNotification.css";
import axios from "axios";
import DriverSideBar from "../DriverSideBar/DriverSideBar";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function DriverNotification() {
  const navigate = useNavigate();

  const [bookings, SetBookings] = useState([]);
  const [error, setError] = useState(null); // Track potential errors
  const [conform, setConform] = useState(null);

  const pickup = localStorage.getItem("pickup");
  const username = localStorage.getItem("username");
  const pickupTime = localStorage.getItem("pickupTime");
  const pickupDate = localStorage.getItem("pickupDate");
  const randomNum = localStorage.getItem("randomNum");
  const mobile = localStorage.getItem("mobile");

  const cancel = "Cancel";
  const accept = "Accept";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/devtest/reactjs/bookinginformation/get_booking.php"
        ); // Modified URL
        SetBookings(response.data);
      } catch (error) {
        // Handle errors gracefully, e.g., display an error message
        // console.error("Error fetching customers:", error);
        setError(error); // Store error for potential display
      }
    };

    fetchData();
  }, []);

  const findingADriver = (e) => {
    if (conform !== e) {
      setConform(true);
    }
  };

  function conformationCode() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  function RideFinishCode() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  const generateRandomNumber = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };
  const RandomOTP = generateRandomNumber();
  localStorage.setItem("RandomOTP", RandomOTP);
  // localStorage.getItem("RandomOTP");

  const handleConform = (e) => {
    e.preventDefault();
    const StartOtp = conformationCode();
    localStorage.setItem("StartOtp", StartOtp);
  };

  const handleFinish = (e) => {
    e.preventDefault();
    const FinishCode = RideFinishCode();
    localStorage.setItem("FinishCode", FinishCode);
    localStorage.setItem("randomNum", "");
    navigate("/driver-Qrcode");
  };

  const handleCansel = (e) => {
    e.preventDefault();
    localStorage.setItem("cancel", cancel);
    localStorage.setItem("randomNum", "");
    window.location.reload();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    findingADriver(true);
    localStorage.setItem("accept", accept);
    localStorage.setItem("cancel", "");
  };

  return (
    <div className="driver-notification-section">
      <DriverSideBar />
      {error ? (
        // Display error message if available
        <p>Error fetching bookings: {error.message}</p>
      ) : (
        bookings && (
          <div className="driver-notification">
            <h1>Notification</h1>
            <div className="booking-details">
              {bookings.map((bookings, index) => (
                <form action="" key={index}>
                  {bookings.randomNum === randomNum && (
                    <div className="booking-info-form">
                      <>
                        <label htmlFor="">
                          From: <span>{pickup}</span>
                        </label>
                        <div className="horizontal-line"></div>
                        <label htmlFor="">
                          Name: <span>{username}</span>
                        </label>
                        <label htmlFor="">
                          Mobile: <span>{mobile}</span>
                        </label>
                        <label htmlFor="">
                          Pickup Date: <span>{pickupDate}</span>
                        </label>
                        <label htmlFor="">
                          Pickup Time: <span>{pickupTime}</span>
                        </label>
                      </>
                      <div
                        htmlFor=""
                        className={
                          conform == null ? "conform-false" : "conform-OTP"
                        }
                      >
                        <label>
                          {" "}
                          OTP : <span>{RandomOTP}</span>
                        </label>
                        <div className="horizontal-line"></div>
                        <div>
                          <button
                            className="confirm-btn"
                            onClick={handleConform}
                          >
                            Start
                          </button>
                          <button className="cancel" onClick={handleFinish}>
                            Finish
                          </button>
                        </div>
                      </div>
                      <div
                        className={
                          conform == true ? "conform-false" : "horizontal-line"
                        }
                      ></div>

                      <div>
                        <div
                          className={
                            conform == true
                              ? "conform-false"
                              : "booking-conform"
                          }
                        >
                          <button className="confirm" onClick={handleSubmit}>
                            Confirm
                          </button>
                          <button className="cancel" onClick={handleCansel}>
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default DriverNotification;
