import React from "react";
import "./Destination.css";
import NavBar from "../../NavBar/NavBar";
import ArrivedDestinationImg from "../../../Assets/Ride-with-Uber.jpg";
import PhoneImg from "../../../Assets/phone-call.png";
import { Link } from "react-router-dom";
function Destination() {
  return (
    <>
      <NavBar />
      <div className="destination-section">
        <div className="destination-left">
          <h1>Reached your destination!</h1>
          <h2>Please pay the fare amount.</h2>
          <form action="">
            <div className="destination-details">
              <input type="text" placeholder="From : mumbai" readOnly />
              <input type="text" placeholder="To : delhi" readOnly />
              <br />
              <input type="text" placeholder="Distance: 30km" readOnly />
            </div>
            <h3>
              Total Charge : <span>450</span>
            </h3>
            <label>
              <input type="radio" name="paymentMethod" /> Online Payment
            </label>
            <label>
              <input type="radio" name="paymentMethod" /> Offline Payment
            </label>
            <br />
            <Link to="/payment-section">
              <button className="Confirm-payment">Confirm payment</button>
            </Link>
          </form>
        </div>
        <div className="destination-img">
          <img src={ArrivedDestinationImg} alt="" />
        </div>
      </div>
      <div className="facing-diff">
        <h3>Facing any difficulties? Feel free to contact!</h3>

        <span>
          <img src={PhoneImg} alt="" />
          +919895033329
        </span>
      </div>
    </>
  );
}

export default Destination;
