import React from "react";
import "./PaymentSection.css";
import NavBar from "../../NavBar/NavBar";
// import PaymentBro from "../../../Assets/Payment Information-rafiki.svg";
import DriverImage from "../../../Assets/driver_profile-5.jpg";
import PaymentSucsessIcon from "../../../Assets/payment-sucssesfull.png";
function PaymentSection() {
  return (
    <>
      <NavBar />
      <div className="payment-section">
        <div className="payment-details">
          <h1>
            Payment successful!{" "}
            <img src={PaymentSucsessIcon} alt="" className="payment-sucsess" />
          </h1>
          <form action="">
            <input type="text" placeholder="Name : james" readOnly />
            <input type="text" placeholder="Transaction ID : ADS668" readOnly />
            <br />
            <input type="text" placeholder="Total Hours: 8/hr" readOnly />
            <input type="text" placeholder="Amount: 1000" readOnly />
          </form>
          <h2>Driver details.</h2>
          <div className="driver-info-container">
            <div className="driver-info-profile">
              <img src={DriverImage} alt="" />
            </div>
            <div className="driver-info">
              <h3>Driver Name</h3>
              <p>Email : Jack@gmail.com</p>
              <p>Drivers ID : AS36GDD45</p>
            </div>
          </div>
        </div>
        <div className="payment-feedback">
          <h3>Give a feedback about the driver.</h3>
          <br />
          <input type="textarea" />
          {/* <h4>Add Star Rating : </h4>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span> */}
          <br />
          <button className="feedback-submit">Submit</button>
        </div>
      </div>
    </>
  );
}

export default PaymentSection;
