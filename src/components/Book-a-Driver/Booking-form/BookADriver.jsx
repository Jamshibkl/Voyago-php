
import React, { useState, useEffect } from "react";
import Navbar from "../../NavBar/NavBar";
import BookingImg from "../../../Assets/book a drive image.jpg";
// import { Link } from "react-router-dom";
import "./BookADriver.css";
import { useNavigate } from "react-router-dom";
const karnatakaCities = [
  "bangalore",
  "mysore",
  "mangalore",
  "hubli",
  "gulbarga",
  "belgaum",
  "bijapur",
  "shimoga",
  "udupi",
  "dharwad",
  "kochi",
  "kasaragod",
  "bekal fort",
];
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

  const navigate = useNavigate();

  const userId = localStorage.getItem("user"); // Get the logged-in user's ID
  console.log(userId);

  useEffect(() => {
    setTimeout(function () {
      setMsg("");
    }, 1000);
  }, [msg]);

  const handleInputChange = (e, type) => {
    switch (type) {
      case "pickupLocation":
      case "dropoffLocation":
        setError("");
        const isKarnatakaCity = karnatakaCities.includes(
          e.target.value.toLowerCase()
        );
        if (!isKarnatakaCity) {
          setError("Sorry service is not available!");
        }
        setPickupLocation(
          type === "pickupLocation" ? e.target.value : pickupLocation
        );
        setDropoffLocation(
          type === "dropoffLocation" ? e.target.value : dropoffLocation
        );
        break;
      default:
        setError("");
        setUsername(type === "username" ? e.target.value : userId);
        setPickupLocation(
          type === "pickupLocation" ? e.target.value : pickupLocation
        );
        setDropoffLocation(
          type === "dropoffLocation" ? e.target.value : dropoffLocation
        );
        setPickupDate(type === "pickupDate" ? e.target.value : pickupDate);
        setPickupTime(type === "pickupTime" ? e.target.value : pickupTime);
        setCabType(type === "cabType" ? e.target.value : cabType);
    }
  };

  function handleSubmit() {
    console.log(name);
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
        localStorage.setItem("pickup",pickupLocation)
        navigate("/find-a-driver");
      setUsername("");
      setPickupLocation("");
      setDropoffLocation("");
      setPickupDate("");
      setPickupTime("");
      setCabType("");
    } else {
      setError("All fields are required!");
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
            {/* <label className="form-label">Enter Your User Name</label> */}
            {/* <br /> */}
            <input
              type="text"
              name="username"
              className=""
              placeholder="Enter Your User Name "
              value={username}
              onChange={(e) => handleInputChange(e, "username")}
              // onBlur={checkUser}
            />
          </div>
          <div className="form-picup">
            {/* <label className="form-label">Choose Location</label> */}
            {/* <br /> */}
            <input
              type="text"
              name="pickupLocation"
              className=""
              placeholder="Enter 4 letters to Search Your Pickup Location"
              value={pickupLocation}
              onChange={(e) => handleInputChange(e, "pickupLocation")}
              // onBlur={checkUser}
            />
          </div>
          <div className="form-outline">
            {/* <label className="form-label">Dropoff Location</label> */}
            {/* <br /> */}
            <input
              type="text"
              name="dropoffLocation"
              className=""
              placeholder="Enter 4 letters to Search Your Dropoff Location"
              value={dropoffLocation}
              onChange={(e) => handleInputChange(e, "dropoffLocation")}
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
                // placeholder="Enter your password"
                value={pickupDate}
                onChange={(e) => handleInputChange(e, "pickupDate")}
                // onBlur={checkPassword}
              />
            </div>
            <div className="form-picup-info ">
              <label className="form-label">Pickup Time</label>
              <br />
              <input
                type="time"
                name="pickupTime"
                className=""
                // placeholder="Repeat your password"
                value={pickupTime}
                onChange={(e) => handleInputChange(e, "pickupTime")}
              />
            </div>
          </div>
          <div className="form-cabtype ">
            {/* <label className="form-label">Cab Type</label> */}
            <br />

            <select
              name="cabType"
              className=""
              value={cabType}
              onChange={(e) => handleInputChange(e, "cabType")}
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
