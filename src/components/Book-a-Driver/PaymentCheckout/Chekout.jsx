import React from "react";
import "./Chekout.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCreditCard,
  faCalendarDays,
  faLock,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";

function Chekout() {
  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <span>VOYAGO</span>
          <h2>Enter Your Payment Details</h2>
          <form>
            <FontAwesomeIcon icon={faUser} className="icon" />
            <input
              type="text"
              id="userName"
              name="UserName"
              placeholder="Enter Your Name"
              required
            />
            <FontAwesomeIcon icon={faCreditCard} className="icon" />
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="Card Number"
              required
            />
            <div className="date-cv">
              <FontAwesomeIcon icon={faCalendarDays} className="icon" />
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="Expiry Date"
                required
              />
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder="CVV"
                required
              />
            </div>
            <FontAwesomeIcon icon={faIndianRupeeSign} className="icon" />
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder="Amount"
              readOnly
            />
            <Link to="/payment-section">
              <button type="submit">Pay Now</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chekout;
