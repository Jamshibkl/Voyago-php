import React from "react";
import "./Qrcode.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QRCode from "qrcode.react";
import axios from "axios";

function Qrcode() {
  const navigate = useNavigate();

  const rideTime = localStorage.getItem("rideTime");
  const driverName = localStorage.getItem("drivername");
  const driveremail = localStorage.getItem("driveremail");
  const driverid = localStorage.getItem("driverid");
  const drivermobile = localStorage.getItem("drivermobile");
  const user = localStorage.getItem("user");

  const passwordLength = 15;
  const incluseLowercase = true;
  const incluseUppercase = true;
  const incluseNumbers = true;

  const [hour, setHour] = useState("");
  const [charge, setCharge] = useState("");

  let totalCharges = 0;

  const timeout = setTimeout(() => {
    window.location.reload();
  }, 20000);

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
      totalCharges = totalCharge;
      setCharge(totalCharge);
      setHour(totalHour);
    }
  }, [rideTime]);

  const DriverVerifyInfo = async (driver) => {
    const formData = new FormData();
    formData.append("userName", user);
    formData.append("driverid", driverid);
    formData.append("transactionId", Trid);
    formData.append("amount", charge);

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
    const RandomOTP = null;
    localStorage.setItem("RandomOTP", RandomOTP);
    localStorage.setItem("tranId", Trid);
    if (user) {
      DriverVerifyInfo();
      navigate(-1);
    }
  };

  return (
    <>
      {rideTime ? (
        <div className="qrcode-section">
          <div className="driverInfo">
            <h5>
              <p>
                <b>Total hour (min): </b>
                {hour} h
              </p>
            </h5>
            <p>
              <b>Driver name :</b>
              {driverName}
            </p>
            <p>
              <b>Driver id :</b>
              {driverid}
            </p>
            <p>
              <b>Driver mobile :</b>
              {drivermobile}
            </p>
            <p>
              <b>Driver email :</b>
              {driveremail}
            </p>
          </div>
          <div className="Qrcode">
            <QRCode value={String(charge)} size={300} />
          </div>
          <button className="gobackbtn" onClick={() => handleSubmit()}>
            Done
          </button>
        </div>
      ) : (
        <div className="qrcode-section">
          <div className="loader-container">
            <div className="loader"></div>
            <div className="loader-text">Loading...</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Qrcode;
