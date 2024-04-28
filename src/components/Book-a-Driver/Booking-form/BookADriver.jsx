import React, { useState, useEffect } from "react";
import Navbar from "../../NavBar/NavBar";
import BookingImg from "../../../Assets/book a drive image.jpg";
import axios from "axios";
// import { Link } from "react-router-dom";
import "./BookADriver.css";
import { useNavigate } from "react-router-dom";

function BookADriver() {
  const name = localStorage.getItem("user");
  const [username, setUsername] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [cabType, setCabType] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [location, setLocation] = useState("");
  

  const navigate = useNavigate();

  function checkLocation() {
    var url = "http://localhost/devtest/reactjs/location/locations.php";
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    var Data = {
      location: pickupLocation,
    };
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then((response) => response.json())
      .then((response) => {
        setError(response[0].result);
      })
      .catch((err) => {
        setMsg(err);
        console.log(err);
      });
  }

  useEffect(() => {
    setTimeout(function () {
      setMsg("");
    }, 1000);
  }, [msg]);

 


  function handleSubmit() {
    const currentDate = new Date();
    const selectedDate = new Date(pickupDate + "T" + pickupTime);

    if (selectedDate < currentDate) {
      setError("Please select a future date and time.");
      return;
    }
    if (dropoffLocation.length !== 10 || isNaN(dropoffLocation)) {
      setError("Mobile number must be 10 digits.");
      return;
    }
    setUsername(name);
    if (
      username !== "" &&
      pickupLocation !== "" &&
      dropoffLocation !== "" &&
      pickupDate !== "" &&
      pickupTime !== "" &&
      cabType !== ""
    ) {
      var url = "http://localhost/devtest/reactjs/booking.php";
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      var Data = {
        username: username,
        pickupLocation: pickupLocation,
        dropoffLocation: dropoffLocation,
        pickupDate: pickupDate,
        pickupTime: pickupTime,
        cabType: cabType,
      };
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          setMsg(response[0].result);
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
      localStorage.setItem("pickup", pickupLocation);
      localStorage.setItem("username", username);
      localStorage.setItem("pickupTime", pickupTime);
      localStorage.setItem("pickupDate", pickupDate);
      localStorage.setItem("cabType", cabType);
      localStorage.setItem("mobile", dropoffLocation);
      navigate("/find-a-driver");
      setUsername("");
      setPickupLocation("");
      setDropoffLocation("");
      setPickupDate("");
      setPickupTime("");
      setCabType("");
    } else {
      // setError("All fields are required!");
    }
  }

  return (
    <>
      <Navbar />
      <section className="user-booking">
        <div className="booikg-container">
          <div className="booking-img">
            <img src={BookingImg} alt="" />
          </div>

          <p className="valid-msg">
            {msg !== "" ? (
              <span className="success">{msg}</span>
            ) : (
              <span className="error">{error}</span>
            )}
          </p>
          <div className="form-username">
            <input
              type="text"
              name="username"
              className=""
              placeholder="Enter Your User Name "
              value={username}
              // onChange={(e) => handleInputChange(e, "username")}
              onChange={(e) => setUsername(username)}
            />
          </div>
          <div className="form-picup">
            <input
              type="text"
              name="pickupLocation"
              className=""
              placeholder="Enter 4 letters to Search Your Pickup Location"
              value={pickupLocation}
              // onChange={(e) => handleInputChange(e, "pickupLocation")}
              onChange={(e) => setPickupLocation(e.target.value)}
              onBlur={checkLocation}
            />
          </div>
          <div className="form-outline">
            {/* <label className="form-label">Dropoff Location</label> */}
            {/* <br /> */}
            <input
              type="number"
              name="dropoffLocation"
              className=""
              placeholder="Mobile number"
              value={dropoffLocation}
              // onChange={(e) => handleInputChange(e, "dropoffLocation")}
              onChange={(e) => setDropoffLocation(e.target.value)}
              // onBlur={checkEmail}
            />
          </div>
          <div className="bookig-date-time">
            <div className="form-picup-info ">
              <label className="form-label">Pickup Date</label>
              <br />
              <input
                type="date"
                name="pickupDate"
                className=""
                value={pickupDate}
                // onChange={(e) => handleInputChange(e, "pickupDate")}
                onChange={(e) => setPickupDate(e.target.value)}
              />
            </div>
            <div className="form-picup-info ">
              <label className="form-label">Pickup Time</label>
              <br />
              <input
                type="time"
                name="pickupTime"
                className=""
                value={pickupTime}
                // onChange={(e) => handleInputChange(e, "pickupTime")}
                onChange={(e) => setPickupTime(e.target.value)}
              />
            </div>
          </div>
          <div className="form-cabtype ">
            <br />

            <select
              name="cabType"
              className=""
              value={cabType}
              // onChange={(e) => handleInputChange(e, "cabType")}
              onChange={(e) => setCabType(e.target.value)}
            >
              <option value="">Select Cab Type</option>
              <option value="Luxury">Luxury</option>
              <option value="SUV">SUV</option>
              <option value="Innova">Innova</option>
              <option value="Sedan">Sedan</option>
            </select>
          </div>
          {/* <br /> */}
          <div className="">
            <input
              type="submit"
              defaultValue="Submit"
              className="btn"
              onClick={handleSubmit}
              value="Request Driver"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default BookADriver;
