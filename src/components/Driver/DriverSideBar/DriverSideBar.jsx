import React from 'react'
import './DriverSideBar.css'
import { NavLink,useNavigate  } from 'react-router-dom'
function DriverSideBar() {
  const navigate = useNavigate();

  function logoutSubmit() {
    localStorage.setItem("driver-login", "");
    localStorage.setItem("loginStatus", "Logged out successfully!");
    navigate("/driver-login");
  }

  const driver = localStorage.getItem('email');
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
            <h5 style={{fontSize:'15px'}}>{driver}</h5>
          </div>
          <NavLink to='/driver-dashbord' style={{textDecoration: 'none'}}>
          <div className="Driver-dashboard-head">
            {/* icons */}
            <h5>Dashboard</h5>
          </div>
          
         
          </NavLink >
         <NavLink to='/driver-profile' style={{textDecoration: 'none'}}>
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

export default DriverSideBar
