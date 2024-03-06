import React from 'react'
import './DriverDashboard.css'
import DriverSideBar from '../DriverSideBar/DriverSideBar'
import DriverNavigate from '../../../Assets/dirver-dash.png'
function DriverDashboard() {
  return (
    <div>
      
      <div className="driver-dashboard-section">
      <DriverSideBar/>
        <div className="drive-dash-data">
           <div className="driver-dash-ride">
           <div className='weekly-ride'>
                <p>This week rides</p>
                <span>27</span>
            </div>
            <div className='weekly-ride'>
                <p>This week income</p>
                <span>6,000</span>
            </div>
            <br />
           </div>
           <img src={DriverNavigate} alt="" />
           
        </div>
      </div>
    </div>
  )
}

export default DriverDashboard
