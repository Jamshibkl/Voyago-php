import React, { useState, useEffect } from "react";
import "./PaymentSection.css";
import NavBar from "../../NavBar/NavBar";
import PaymentSucsessIcon from "../../../Assets/payment-sucssesfull.png";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function PaymentSection() {
  const { transactionId, driverId, amount, user } = useParams();
  const [driver, setDriver] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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

  const handleInputChange = (e, type) => {
    switch (type) {
      case "feedback":
        setError("");
        setFeedback(e.target.value);
        if (e.target.value === "") {
          setError("Feedback has been left blank!");
        }
        break;
      default:
        break;
    }
  };

  function handleSubmit() {
    if (feedback) {
      var url = "http://localhost/devtest/reactjs/feedback.php";
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      var Data = {
        feedback: feedback,
        userName: user ? user : "Anonymous",
        driverName: driver ? driver.driver : "Unknown Driver",
        driver_id: driverId ? driverId : "Anonymous",
      };
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
      setFeedback("");
      setTimeout(function () {
        alert("Thank you for your feedback!");
        navigate("/");
      }, 100);
    } else {
      setError("Feedback is required!");
    }
  }

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
          <h3>Give feedback about the driver.</h3>
          <br />
          <textarea
            type=""
            rows="6"
            cols="54"
            value={feedback}
            onChange={(e) => handleInputChange(e, "feedback")}
          />
          <br />
          <button
            className="feedback-submit"
            onClick={handleSubmit}
            type="submit">
            Submit
          </button>
          <Link to='/'>
          <button
            className="feedback-submit"
           
            type="submit">
            Back to Home
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PaymentSection;
