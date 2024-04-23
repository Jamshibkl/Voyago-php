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
  const tranId = localStorage.getItem("tranId");
  const driverName = localStorage.getItem("drivername");
  const driveremail = localStorage.getItem("driveremail");
  const driverid = localStorage.getItem("driverid");
  const drivermobile = localStorage.getItem("drivermobile");

  const timeout = setTimeout(() => {
    window.location.reload();
  }, 10000);

  const handleSubmit = async () => {
    navigate(`/payment-section/${tranId}/${driverId}/${amount}/${user}`)
  };
  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <span>VOYAGO</span>
          <h2>Your Payment Details</h2>
          <div>
            {tranId ? (
              <>
                <div className="transaction-section">
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
                  <p>
                    <b>Transaction Id :</b>
                    {tranId}
                  </p>
                  <button className="gobackbtn" onClick={() => handleSubmit()}>
                    Done
                  </button>
                </div>
              </>
            ) : (
              <div className="loading-section">
                <div className="loader-container">
                  <div className="loader"></div>
                  <div className="loader-text">Loading...</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chekout;
