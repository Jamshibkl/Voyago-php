import React, { useState, useEffect } from "react";
import "./PaymentSection.css";
import NavBar from "../../NavBar/NavBar";
// import PaymentBro from "../../../Assets/Payment Information-rafiki.svg";
import DriverImage from "../../../Assets/driver_profile-5.jpg";
import PaymentSucsessIcon from "../../../Assets/payment-sucssesfull.png";
import { useParams } from "react-router-dom";
function PaymentSection() {
  const { transactionId } = useParams();
  const { driverId } = useParams();
  const { amount } = useParams();
  const { user } = useParams();

  const [driver, setDriver] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost/devtest/reactjs/DriverVerifyInfo/DriverInfo.php"
        );
        const data = await response.json();
        const filteredDriver = data.find((item) => item.id === driverId);
        setDriver(filteredDriver);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [driverId]);

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
            <input
              type="text"
              placeholder="Name : james"
              readOnly
              value={`Name :${user}`}
            />
            <input
              type="text"
              placeholder="Transaction ID : "
              readOnly
              value={`Transaction ID :${transactionId} `}
            />
            <br />
            <input
              type="text"
              placeholder="Driver ID"
              readOnly
              value={`Driver ID :${driverId}`}
            />
            <input
              type="text"
              placeholder="Amount: 1000"
              readOnly
              value={`Amount :${amount}`}
            />
          </form>
          <h2>Driver details.</h2>
          {driver && (
            <div className="driver-info-container">
              <div className="driver-info-profile">
                <img
                  src={`http://localhost/devtest/reactjs/DriverVerifyInfo/images/Profile/${driver.profileImg}`}
                  alt=""
                />
              </div>
              <div className="driver-info">
                <h3>{driver.driver}</h3>
                <p>{driver.email}</p>
                <p>{driver.mobile}</p>
              </div>
            </div>
          )}
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
