import React, { useState, useEffect } from "react";
import Navbar from "../../NavBar/NavBar";
import BookingImg from "../../../Assets/book a drive image.jpg";
import axios from "axios";
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
<<<<<<< HEAD
  const [msg, setMsg] = useState(""); 
=======
  const [msg, setMsg] = useState("");
  const [location, setLocation] = useState("");
>>>>>>> cbc274aa8cde29fba1d1f61d5016339effb54197

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

<<<<<<< HEAD
=======
  // const handleInputChange = (e, type) => {
  //   switch (type) {
  //     case "pickupLocation":
  //     // case "dropoffLocation":
  //       setError("");
  //       // const isKarnatakaCity = location.includes(
  //       //   e.target.value.toLowerCase()
  //       // );
  //       // if (!isKarnatakaCity) {
  //       //   setError("Sorry service is not avable!");
  //       // }
  //       setPickupLocation(
  //         type === "pickupLocation" ? e.target.value : pickupLocation
  //       );
  //       setDropoffLocation(
  //         type === "dropoffLocation" ? e.target.value : dropoffLocation
  //       );
  //       break;
  //     default:
  //       setError("");
  //       setUsername(type === "username" ? name : name);
  //       setPickupLocation(
  //         type === "pickupLocation" ? e.target.value : pickupLocation
  //       );
  //       setDropoffLocation(
  //         type === "dropoffLocation" ? e.target.value : dropoffLocation
  //       );
  //       setPickupDate(type === "pickupDate" ? e.target.value : pickupDate);
  //       setPickupTime(type === "pickupTime" ? e.target.value : pickupTime);
  //       setCabType(type === "cabType" ? e.target.value : cabType);
  //   }
  // };

>>>>>>> cbc274aa8cde29fba1d1f61d5016339effb54197
  function handleSubmit() {
    const currentDate = new Date();
    const selectedDate = new Date(pickupDate + "T" + pickupTime);

    if (selectedDate < currentDate) {
      setError("Please select a future date and time.");
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
            <input
              type="text"
              name="username"
              className=""
              placeholder="Enter Your User Name "
              value={username}
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
              onChange={(e) => setPickupLocation(e.target.value)}
              onBlur={checkLocation}
            />
          </div>
          <div className="form-outline">
            <input
              type="number"
              name="dropoffLocation"
              className=""
              placeholder="Mobile number"
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
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
<<<<<<< HEAD
              onChange={(e) => setCabType(e.target.value)}
            >
=======
              // onChange={(e) => handleInputChange(e, "cabType")}
              onChange={(e) => setCabType(e.target.value)}>
>>>>>>> cbc274aa8cde29fba1d1f61d5016339effb54197
              <option value="">Select Cab Type</option>
              <option value="Luxury">Luxury</option>
              <option value="SUV">SUV</option>
              <option value="Innova">Innova</option>
              <option value="Sedan">Sedan</option>
            </select>
          </div>
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
