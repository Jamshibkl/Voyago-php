import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../admin-navbar/Navbar";

function Dashboard() {
  const [totalUser, setTotalUser] = useState();
  const [totaldriver, setTotalDriver] = useState();
  const [totalAmount, setTotalAmount] = useState();
  const [totalBooking, setTotalBooking] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost/devtest/reactjs/dashboard/totalcostomer.php"
        );
        const data = await response.json();
        setTotalUser(data[0].totalUser); // Set totalUser state with fetched data
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost/devtest/reactjs/dashboard/totalbooking.php"
        );
        const data = await response.json();
        setTotalBooking(data[0].totalBooking); // Set totalBooking state with fetched data
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost/devtest/reactjs/dashboard/totaldriver.php"
        );
        const data = await response.json();
        setTotalDriver(data[0].totalDrivers); // Set totalDrivers state with fetched data
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost/devtest/reactjs/dashboard/totalrevenue.php"
        );
        const data = await response.json();
        let totalAmount = 0;
        data.forEach((item) => {
          totalAmount += parseInt(item.amount);
          setTotalAmount(totalAmount);
          console.log(totalAmount);
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="admin-Dashboard">
      <div className="admin-SideBar">
        <Sidebar />
      </div>

      <div className="admin-Content">
        <Navbar />
        <div className="dashboard-content">
          <div className="dashboard-info">
            <h2>DASHBOARD</h2>
            <p>Welcome to your dashboard</p>
            <div className="all-dash-info">
              <div className="dash-info-container1">
                <div className="dash-information">
                  <h5>Total Customers</h5>
                  <br />
                  <h4>{totalUser}</h4>
                  <br />
                  <h6>Since last month</h6>
                </div>
                <div className="dash-information">
                  <h5>Total Drivers</h5>
                  <br />
                  <h4>{totaldriver}</h4>
                  <br />
                  <h6>Since last month</h6>
                </div>
              </div>

              <div className="dash-info-container2">
                <div className="dash-information">
                  <h5>Total Revenue</h5>
                  <br />
                  <h4>{(totalAmount / 100) * 10}</h4>
                  <br />
                  <h6>Since last month</h6>
                </div>
                <div className="dash-information">
                  <h5>Total Booking</h5>
                  <br />
                  <h4>{totalBooking}</h4>
                  <br />
                  <h6>Since last month</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
