import React from "react";
import "./DriverDashboard.css";
import DriverSideBar from "../DriverSideBar/DriverSideBar";
import ChartImg from "../../../Assets/pie-chart-example.svg";
import DriverNavigate from "../../../Assets/dirver-dash.png";
import bannerImg from "../../../Assets/City driver-pana (1).svg";
import NavBar from "../Driver-navbar/Navbar";
function DriverDashboard() {
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
          <div className="driver-dash-chart">
            <h4>Station Overview</h4>
            <img src={ChartImg} alt="" />
          </div>
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
            <div className="weekly-ride">
              <img src={DriverNavigate} alt="" />
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
