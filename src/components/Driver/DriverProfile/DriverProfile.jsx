import React from 'react'
import './DriverProfile.css'
import DriverSideBar from '../DriverSideBar/DriverSideBar'
function DriverProfile() {
  return (
    <div>
    <div className='driver-profile-section'>
        <DriverSideBar />
        <div className="driver-profile-info">
            <div className="profile">
                <span className='profile-pic'></span>
                <h3>Driver Name
                    <br />
                    <p>location</p>
                </h3>
                <br />
            </div>
            <div className="driver-profile-form">
        <form action="">
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Mobile' />
          <br />
          <input type="text" placeholder='Adhar card' />
          <input type="text" placeholder='Driver License' />
          <br />
          <input type="img" placeholder='Adhar card Image' />
          <input type="img" placeholder='Driver License Image' />
          <br />
          <button>Change password</button>
        </form>
        </div>
        </div>
        
        
      
    </div>
    </div>
  )
}

export default DriverProfile
