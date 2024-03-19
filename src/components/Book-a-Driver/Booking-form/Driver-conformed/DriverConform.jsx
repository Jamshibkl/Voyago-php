import React from "react";
import "./DriverConform.css";
import NavBar from "../../../NavBar/NavBar";
import DriverImage from "../../../../Assets/driver_profile-5.jpg";
import { Link } from "react-router-dom";
function DriverConform() {
  return (
    <>
      <NavBar />
      <div className="confirme-section">
        <div className="driver-conform-headings">
          <h3>Your Booking Details</h3>
          <table className="booking-details">
            <tr>
              <th>PickUp Location :</th>
              <th>Mobile No:</th>
              <th>PickUp Date:</th>
              <th>PickUp Time</th>
              <th>Cab Type</th>
            </tr>
            <tr>
              <td>PickUp Location :</td>
              <td>Mobile No:</td>
              <td>PickUp Date:</td>
              <td>PickUp Time</td>
              <td>Cab Type</td>
            </tr>
          </table>

          <h3>Hourly Charges</h3>

          <table>
            <tr>
              <th>hr</th>
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
          <Link to='/ride-started'>
          <button>Submit</button>
          </Link>
        </div>

        <div className="driver-info-section">
          <h3>Driver Details</h3>
          <img src={DriverImage} alt="" />
          <table className="driver-info">
            <tr></tr>
            <tr>
              <th>Name:</th>
              <td>jamsheer</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>jamshi@gmail.com</td>
            </tr>
            <tr>
              <th>Mobile:</th>
              <td>7879799797</td>
            </tr>
            <tr>
              <th>Driver ID:</th>
              <td>4</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default DriverConform;
