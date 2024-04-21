import React, { useState, useEffect } from "react";
import "./DriverDashboard.css";
import DriverSideBar from "../DriverSideBar/DriverSideBar";
import ChartImg from "../../../Assets/pie-chart-example.svg";
import DriverNavigate from "../../../Assets/dirver-dash.png";
import bannerImg from "../../../Assets/City driver-pana (1).svg";
import NavBar from "../Driver-navbar/Navbar";
import axios from "axios";
import Chart from "chart.js/auto";
import DriverFeedback from "./DriverFeedback"; // Import DriverFeedback component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faHandHoldingDollar,
  faHourglassStart,
} from "@fortawesome/free-solid-svg-icons";

function DriverDashboard() {
  const [ride, setRide] = useState("offline");
  const [message, setMessage] = useState("");
  const [driverInfo, setDriverInfo] = useState(null);

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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost/devtest/reactjs/RideInformation/totalrevenue.php?driverEmail=${driveremail}`
        );
        setDriverInfo(response.data);
        renderCharts(response.data);
      } catch (error) {
        console.error("Error fetching driver information:", error);
      }
    };

    fetchData();
  }, [driveremail]);

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

  const renderCharts = (data) => {
    renderBarChart(data);
    renderPieChart(data);
    renderLineChart(data);
  };

  const renderBarChart = (data) => {
    const ctx = document.getElementById("barChart");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Total Rides", "Total Amount", "Total Hours"],
        datasets: [
          {
            label: "Driver Stats",
            data: [data.totalRides, data.totalAmount, data.totalHours],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  const renderPieChart = (data) => {
    const ctx = document.getElementById("pieChart");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Total Rides", "Total Amount", "Total Hours"],
        datasets: [
          {
            label: "Driver Stats",
            data: [data.totalRides, data.totalAmount, data.totalHours],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };
  const renderLineChart = (data) => {
    const ctx = document.getElementById("lineChart");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "Total Rides",
            data: [12, 19, 3, 5], // Example data for the line chart
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            tension: 0.5,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
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

          <div className="driver-dash-ride">
            {driverInfo ? (
              <>
                <div className="weekly-ride">
                  <p>Total Rides</p>
                  <span>
                    <FontAwesomeIcon icon={faCar} />
                  </span>

                  <h4>{driverInfo.totalRides}</h4>
                </div>
                <div className="weekly-ride">
                  <p>Total Income</p>
                  <span>
                    <FontAwesomeIcon icon={faHandHoldingDollar} />
                  </span>
                  <h4>{(driverInfo.totalAmount / 100) * 90}</h4>
                </div>
                <div className="weekly-ride">
                  <p>Total Hour</p>
                  <span>
                    <FontAwesomeIcon icon={faHourglassStart} />
                  </span>
                  <h4>{driverInfo.totalHours}</h4>
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
              </>
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <div className="driver-bar-chart">
          <h4>Driver Stats</h4>
          <div className="chart-container">
            <canvas id="barChart"></canvas>
          </div>
        </div>
        <div className="driver-pai-chart">
          <div className="chart-container">
            <canvas id="pieChart"></canvas>
          </div>
        </div>
        <div className="driver-line-chart">
          <div className="chart-container">
            <canvas id="lineChart"></canvas>
          </div>
        </div>
      </div>
      {/* <div className="driver-feedback-section">
        <h3> User Feedbacks</h3>
        <table>
          <tr>
            <th>User Name</th>
            <th>feedback</th>
          </tr>
          <tr>
            <td>User Name</td>
            <td>feedback</td>
          </tr>
          <tr>
            <td>User Name</td>
            <td>feedback</td>
          </tr>
          <tr>
            <td>User Name</td>
            <td>feedback</td>
          </tr>
          <tr>
            <td>User Name</td>
            <td>feedback</td>
          </tr>
        </table>
      </div> */}
    </div>
  );
}

export default DriverDashboard;
