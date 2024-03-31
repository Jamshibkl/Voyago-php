import React, { useState } from "react";
import "./DriverDashboard.css";
import DriverSideBar from "../DriverSideBar/DriverSideBar";
import ChartImg from "../../../Assets/pie-chart-example.svg";
import DriverNavigate from "../../../Assets/dirver-dash.png";
import bannerImg from "../../../Assets/City driver-pana (1).svg";
import NavBar from "../Driver-navbar/Navbar";
import axios from "axios";

function DriverDashboard() {
  const [ride, setRide] = useState("offline");
  const [message, setMessage] = useState("");

  const driveremail = localStorage.getItem("email");

  const DriverVerifyInfo = async () => {
    console.log(driveremail);
    const formData = new FormData();
    formData.append("ride", ride);
    formData.append("email", driveremail);

    const responce = await axios.post(
      "http://localhost/devtest/reactjs/DriverVerifyInfo/DriverStatus/driverstutus.php",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    if (responce.data.success) {
      setMessage(responce.data.success);
      setTimeout(() => {
        console.log(responce.data);
      });
    }
    // console.log(ride);
  };

  const findARide = async (e) => {
    e.preventDefault();
    if (ride == "offline") {
      setRide("online");
      await DriverVerifyInfo();
    } else {
      setRide("offline");
      await DriverVerifyInfo();
    }
  };

  return (
    <div>
      <div className="driver-dashboard-section">
        <DriverSideBar />

        <div className="drive-dash-data">
          <NavBar />
          <div className="driver-dash-banner">
            <div>
              <h4>Want to be your own boss? Start today.</h4>
              <p>
                The Voyago helps you earn smarter with real time
                information.Easier to use and more reliable. Effceintly matches
                Drivers with passangers.Hoping to fund your dreams. a passenger
                looking for the most efficient way to get a driver.
              </p>
            </div>
            <img src={bannerImg} alt="" />
          </div>
          {/* <div className="driver-dash-chart">
            <h4>Station Overview</h4>
            <img src={ChartImg} alt="" />
          </div> */}
          <div className="driver-dash-ride">
            <div className="weekly-ride">
              <p>Total Rides</p>
              <span>27</span>
              <h4>Since last month</h4>
            </div>
            <div className="weekly-ride">
              <p>Total Income</p>
              <span>6,000</span>
              <h4>Since last month</h4>
            </div>
            <div className="weekly-ride" onClick={findARide}>
              <h4>Find A Ride</h4>
              {
                <div onClick={findARide}>
                  <input id="checkbox" type="checkbox" />
                  <label
                    className={ride !== "offline" ? "switch" : "switch2"}
                    htmlFor="checkbox"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="slider"
                    >
                      <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"></path>
                    </svg>
                  </label>
                    <h4 className={ride !== "offline" ? "offline" : "online"}>
                      <div className="status">offline</div>
                      <div className="status2">online</div>
                    </h4>
                </div>
              }
            </div>
          </div>

          {/* <div className="reviwes">
             <h5>Lastest Reviwes</h5>
             <tr>
              <td>User name</td>
              <td>Feedbacks!</td>
             </tr>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default DriverDashboard;
