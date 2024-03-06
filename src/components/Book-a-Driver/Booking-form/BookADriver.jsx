import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BookADriver.css";
import BookingImage from "../../../Assets/travel-ilustra.jpg";
import NavBar from "../../../components/NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleStop,
  faCalendar,
  faClock,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

function BookADriver() {
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  const handleDateFocus = () => {
    document.getElementById("pickupDate").type = "date";
  };

  const handleDateBlur = () => {
    if (!pickupDate) {
      document.getElementById("pickupDate").type = "text";
    }
  };

  const handleTimeFocus = () => {
    document.getElementById("pickuptime").type = "time";
  };

  const handleTimeBlur = () => {
    if (!pickupTime) {
      document.getElementById("pickuptime").type = "text";
    }
  };

  return (
    <>
      <NavBar />
      <div className="book-ride-section">
        <div className="booking-form">
          <h1>Conform the Ride</h1>
          <form action="">
            <div className="input-with-icon">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="booking-input-icon"
              />
              <input type="text" placeholder="Pick up Location" />
            </div>
            <div className="input-with-icon">
              <FontAwesomeIcon
                icon={faCircleStop}
                className="booking-input-icon"
              />
              <input type="text" placeholder="Dropoff Location" />
            </div>
            <br />
            <div className="input-with-icon">
              <FontAwesomeIcon
                icon={faCalendar}
                className="booking-input-icon"
              />
              <input
                placeholder="Pick up Date"
                name="pickupDate"
                id="pickupDate"
                value={pickupDate}
                onFocus={handleDateFocus}
                onBlur={handleDateBlur}
                onChange={(e) => setPickupDate(e.target.value)}
              />
            </div>
            <div className="input-with-icon">
              <FontAwesomeIcon icon={faClock} className="booking-input-icon" />
              <input
                name="pickuptime"
                id="pickuptime"
                value={pickupTime}
                placeholder="Pick Up Time"
                onFocus={handleTimeFocus}
                onBlur={handleTimeBlur}
                onChange={(e) => setPickupTime(e.target.value)}
              />
            </div>
            <br />
            <div className="input-with-icon">
              <FontAwesomeIcon icon={faTaxi} className="booking-input-icon" />
              <select>
                <option value="">Cab Type</option>
                <option value="">Luxury</option>
                <option value="">SUV</option>
                <option value="">Innova</option>
                <option value="">Sedan</option>
              </select>
            </div>
          </form>
          <Link to="/driver-on-way">
            <button className="booking-btn">Book a Ride</button>
          </Link>
          <Link to="/">
            <button className="back-to-home-btn">Go Back</button>
          </Link>
        </div>
        <div className="booking-image">
          <img src={BookingImage} alt="book img" />
        </div>
      </div>
    </>
  );
}

export default BookADriver;
