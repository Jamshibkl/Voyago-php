import React, { useEffect, useState } from "react";
import './DriverSideBar.css'
import { NavLink,useNavigate  } from 'react-router-dom'
import axios from "axios";
function DriverSideBar() {
  const navigate = useNavigate();

  function logoutSubmit() {
    localStorage.setItem("driver-login", "");
    localStorage.setItem("loginStatus", "Logged out successfully!");
    navigate("/driver-login");
  }

  const user = localStorage.getItem('email');
  const userId = localStorage.getItem("driver");
  const [driver, setDriver] = useState([]);
  const [error, setError] = useState(null); // Track potential errors

 
  return (
    <>
    {/* <div className="Driver-Dashboard"> */}
    <div className="Driver-SideBar">
      <NavLink to='/' style={{textDecoration: 'none'}}>
      <div className="Driver-brand">
        <h3>VOYAGO</h3>
      </div>
      </NavLink>
     

      <div className="Driver-dashboard-section">
        <div className="Driver-dashboard-options">
        <div className="Driver-dashboard-items">
            {/* icons */}
            <h5 style={{fontSize:'15px'}}>{user}</h5>
          </div>
          <NavLink to='/driver-dashbord' style={{textDecoration: 'none'}}>
          <div className="Driver-dashboard-head">
            {/* icons */}
            <h5>Dashboard</h5>
          </div>
         
          </NavLink >
          
          
         <NavLink to={`/driver-profile/${userId}`} style={{textDecoration: 'none'}}>
          <div className="Driver-dashboard-items">
            <h5>driver info</h5>
          </div>
          </NavLink>

           <NavLink to='/driver-notify' style={{textDecoration: 'none'}}>
           <div className="Driver-dashboard-items">
            {/* icons */}
            <h5>Notifications</h5>
          </div>
           </NavLink>
          

           <NavLink to='/driver-ride' style={{textDecoration: 'none'}}>
           <div className="Driver-dashboard-items">
            {/* icons */}
            <h5>Rides</h5>
          </div>
           </NavLink>

           <button onClick={logoutSubmit}>Logout</button>
        </div>
      </div>
    </div>

  {/* </div> */}
  </>
  )
}

export default DriverSideBar;