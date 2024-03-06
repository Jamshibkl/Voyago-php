import React from 'react'
import './DriverNotification.css'
import DriverSideBar from '../DriverSideBar/DriverSideBar'
function DriverNotification() {
  return (
    <div className='driver-notification-section'>
         <DriverSideBar />
         <div className="driver-notification">
            <h1>Notification</h1>
            <form action="">
                <label htmlFor="">From</label>
                <div className='horizontal-line'></div>          
                <label htmlFor="">To</label>
                <div className='horizontal-line'></div>
                <button className='confirm'>Confirm</button>
                <br />
                <button className='cancel'>cancel</button>
            </form>
            <form action="">
                <label htmlFor="">From</label>
                <div className='horizontal-line'></div>          
                <label htmlFor="">To</label>
                <div className='horizontal-line'></div>
                <button className='confirm'>Confirm</button>
                <br />
                <button className='cancel'>cancel</button>
            </form>
         </div>
     
    </div>
  )
}

export default DriverNotification
