import React, { useEffect, useState } from "react";
import "./DriverNotification.css";
import axios from "axios";
import DriverSideBar from "../DriverSideBar/DriverSideBar";
function DriverNotification() {
  const [bookings, SetBookings] = useState([]);
  const [error, setError] = useState(null); // Track potential errors

  const pickup = localStorage.getItem("pickup");
  const username = localStorage.getItem("username");
  const pickupTime = localStorage.getItem("pickupTime");
  const pickupDate = localStorage.getItem("pickupDate");
  const randomNum = localStorage.getItem("randomNum");
  const mobile = localStorage.getItem("mobile");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/devtest/reactjs/bookinginformation/get_booking.php"
        ); // Modified URL
        SetBookings(response.data);
      } catch (error) {
        // Handle errors gracefully, e.g., display an error message
        console.error("Error fetching customers:", error);
        setError(error); // Store error for potential display
      }
    };

    fetchData();
  }, []);
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
                          Pickup Time: <span>{pickupTime}</span>
                        </label>
                        <label htmlFor="">
                          Pickup Date: <span>{pickupDate}</span>
                        </label>
                      </>

                      <div className="horizontal-line"></div>
                      <div>
                        <div className="booking-conform">
                          <button className="confirm">Confirm</button>
                          <button className="cancel">cancel</button>
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
