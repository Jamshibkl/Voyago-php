import React from "react";
import "./DriverConform.css";
import NavBar from "../../../NavBar/NavBar";
import DriverImage from "../../../../Assets/driver_profile-5.jpg";
import { Link } from "react-router-dom";
function DriverConform() {
  const pickup = localStorage.getItem("pickup");
  const userName = localStorage.getItem("username");
  const pickupTime = localStorage.getItem("pickupTime");
  const pickupDate = localStorage.getItem("pickupDate");
  const cabType = localStorage.getItem("cabType");
  const mobile = localStorage.getItem("mobile");

  const drid = localStorage.getItem("drId");
  const drName = localStorage.getItem("drName");
  const drEmail = localStorage.getItem("drEmail");
  const drMobile = localStorage.getItem("drMobile");

  return (
    <>
      <NavBar />
      <div className="confirme-section">
        <div className="driver-conform-headings">
          <h3>Your Booking Details</h3>
          <table className="booking-details">
            <tr>
              <th>PickUp Location :</th>
              <th>Name</th>
              <th>Mobile No:</th>
              <th>PickUp Date:</th>
              <th>PickUp Time</th>
              <th>Cab Type</th>
            </tr>
            <tr>
              <td>{pickup}</td>
              <td>{userName}</td>
              <td>{mobile}</td>
              <td>{pickupDate}</td>
              <td>{pickupTime}</td>
              <td>{cabType  }</td>
            </tr>
          </table>

          <h3>Hourly Charges</h3>

          <table>
            <tr>
              <th>Per Hour</th>
              <th>Charges</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Rs.150₹</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Rs.250₹</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Rs.500₹</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Rs.750₹</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Rs.1000₹</td>
            </tr>
          </table>
          <Link to="/ride-started">
            <button>Submit</button>
          </Link>
        </div>

        <div className="driver-info-section">
          <h3>Driver Details</h3>
          {/* <img src={DriverImage} alt="" /> */}
          <table className="driver-info">
            <tr></tr>
            <tr>
              <th>Driver ID:</th>
              <td>{drid}</td>
            </tr>
            <tr>
              <th>Name:</th>
              <td>{drName}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>{drEmail}</td>
            </tr>
            <tr>
              <th>Mobile:</th>
              <td>{drMobile}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default DriverConform;
