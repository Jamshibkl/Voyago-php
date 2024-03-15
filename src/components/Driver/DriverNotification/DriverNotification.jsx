import React, { useEffect, useState } from 'react';
import './DriverNotification.css'
import axios from 'axios';
import DriverSideBar from '../DriverSideBar/DriverSideBar'
function DriverNotification() {
  const [bookings, SetBookings] = useState([]);
  const [error, setError] = useState(null); // Track potential errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/devtest/reactjs/get_booking.php'); // Modified URL
        SetBookings(response.data);
      } catch (error) {
        // Handle errors gracefully, e.g., display an error message
        console.error('Error fetching customers:', error);
        setError(error); // Store error for potential display
      }
    };

    fetchData();
  }, []);
  return (
    <div className='driver-notification-section'>
         <DriverSideBar />
         {error ? (
              // Display error message if available
              <p>Error fetching bookings: {error.message}</p>
            ) : (
              bookings.length > 0 && (
         <div className="driver-notification">
            <h1>Notification</h1>
           <div className='booking-details'>
                {bookings.map((bookings, index) => (
            <form action="" key={index}>
              
                <label htmlFor="" >From:  <span>{bookings.pickupLocation}</span></label>
                <div className='horizontal-line'></div>          
                <label htmlFor="">To:  <span>{bookings.dropoffLocation}</span></label>
               
                <div className='horizontal-line'></div>
                <button className='confirm'>Confirm</button>
                <br />
                <button className='cancel'>cancel</button>
               
            </form>
              ))}
            </div>
          
            
            
         </div>
         )
         )}
     
    </div>
  )
}

export default DriverNotification
