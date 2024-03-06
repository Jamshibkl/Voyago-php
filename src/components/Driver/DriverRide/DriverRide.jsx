import React from 'react'
import DriverSideBar from '../DriverSideBar/DriverSideBar'
import './DriverRide.css'
function DriverRide() {
  return (
    <div className='Driver-ride-section'>
      <DriverSideBar />
      <div className="ride-information">
        <div className="current-ride">
            <h2>Current Ride</h2>
             <table> 
                <tr>
                    <th>from</th>
                    <th>to</th>
                    <th>status</th>
                    <th>pin</th>
                </tr>
                <tr>
                    <td>Calicut</td>
                    <td>Kochi</td>
                    <td>Confirmed</td>
                    <td>278654</td>
                    <td className='view-detail'>view details</td>
                    <td className='cancel-ride'>cancel ride</td>
                </tr>
             </table>
        </div>
        <div className="current-ride">
            <h2> Ride History</h2>
             <table> 
                <tr>
                    <th>from</th>
                    <th>to</th>
                    <th>status</th>
                    <th>pin</th>
                </tr>
                <tr>
                    <td>Calicut</td>
                    <td>Kochi</td>
                    <td>Confirmed</td>
                    <td>278654</td>
                    <td className='view-detail'>view details</td>
                    <td className='cancel-ride'>cancel ride</td>
                </tr>
             </table>
        </div>
      </div>
    </div>
  )
}

export default DriverRide
