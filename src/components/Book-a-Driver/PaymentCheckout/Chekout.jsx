import React, { useState } from "react";
import "./Chekout.css";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  faUser,
  faCreditCard,
  faCalendarDays,
  faLock,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";

function Chekout() {
  const navigate = useNavigate();
  const { amount } = useParams();
  const driverId = localStorage.getItem("driverid");
  const user = localStorage.getItem("user");

  const [userName, setUserName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");

  const passwordLength = 15;
  const incluseLowercase = true;
  const incluseUppercase = true;
  const incluseNumbers = true;

  const handleInputChange = (e, type) => {
    switch (type) {
      case "userName":
        setError("");
        setUserName(e.target.value);
        if (e.target.value === "") {
          setError("Username has left blank!");
        }
        break;
      case "cardNumber":
        setError("");
        setCardNumber(e.target.value);
        if (e.target.value === "") {
          setError("Card Number has left blank!");
        }
        break;
      case "expiryDate":
        setError("");
        setExpiryDate(e.target.value);
        if (e.target.value === "") {
          setError("Expiry Date has left blank!");
        }
        break;
      case "cvv":
        setError("");
        setCvv(e.target.value);
        if (e.target.value === "") {
          setError("CVV has left blank!");
        }
        break;
      default:
    }
  };

  const DriverVerifyInfo = async (driver) => {
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("driverid", driverId);
    formData.append("cardNumber", cardNumber);
    formData.append("expiryDate", expiryDate);
    formData.append("cvv", cvv);
    formData.append("transactionId", Trid);
    formData.append("amount", amount);

    const response = await axios.post(
      "http://localhost/devtest/reactjs/payment/payment.php",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(response.data);

    if (response.data.success) {
    }
  };

  const generateRandomNumber = (
    length,
    incluseLowercase,
    incluseUppercase,
    incluseNumbers
  ) => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";

    let allowedChars = "";
    let tranId = "";

    allowedChars += incluseLowercase ? lowercaseChars : "";
    allowedChars += incluseUppercase ? uppercaseChars : "";
    allowedChars += incluseNumbers ? numberChars : "";

    if (length <= 0) {
      return ` (password lenngth must be at least 1)`;
    }

    if (allowedChars.length === 0) {
      return `(At least 1 charecter need to be selected)`;
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      tranId += allowedChars[randomIndex];
    }

    return tranId;
  };
  const Trid = generateRandomNumber(
    passwordLength,
    incluseLowercase,
    incluseUppercase,
    incluseNumbers
  );
  const handleSubmit = async () => {
    const RandomOTP =null;
    localStorage.setItem("RandomOTP", RandomOTP);
    if (userName != "" && cardNumber != "" && expiryDate != "" && cvv != "") {
      DriverVerifyInfo();
      navigate(`/payment-section/${Trid}/${driverId}/${amount}/${user}`);
    }
  };
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
              name="userName"
              value={userName}
              onChange={(e) => handleInputChange(e, "userName")}
              placeholder="Enter Your Name"
              required
            />
            <FontAwesomeIcon icon={faCreditCard} className="icon" />
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => handleInputChange(e, "cardNumber")}
              required
            />
            <div className="date-cv">
              <FontAwesomeIcon icon={faCalendarDays} className="icon" />
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="Expiry Date"
                value={expiryDate}
                onChange={(e) => handleInputChange(e, "expiryDate")}
                required
              />
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => handleInputChange(e, "cvv")}
                required
              />
            </div>
            <FontAwesomeIcon icon={faIndianRupeeSign} className="icon" />
            <input
              type="text"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => handleInputChange(e, "amount")}
              placeholder="Amount"
              readOnly
            />
            {/* <Link to="/payment-section"> */}
            <button type="submit" onClick={() => handleSubmit()}>
              Pay Now
            </button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chekout;
