import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../admin-navbar/Navbar'
function Booking() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null); // Track potential errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/devtest/reactjs/get_confirm_booking.php'); // Modified URL
        setBookings(response.data);
      } catch (error) {
        // Handle errors gracefully, e.g., display an error message
        console.error('Error fetching bookings:', error);
        setError(error); // Store error for potential display
      }
    };

    fetchData();
  }, []);

  return (
    <div className="admin-Dashboard">
      <div className="admin-SideBar">
        {/* Assuming Sidebar and Navbar are components */}
        <Sidebar />
      </div>
      <div className="admin-Content">
        <Navbar />
        <div className="dashboard-customers-info">
          <div className="dashboard-customers">
            <div className='customers-table'>
              <h2>Booking Details</h2>
              {error ? (
                // Display error message if available
                <p>Error fetching bookings: {error.message}</p>
              ) : (
                bookings.length > 0 && (
                  <table >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>User Mobile</th>
                        <th>PickUp Location</th>
                        <th>Driver Name</th>
                        <th>Driver Mobile</th>
                        <th>Total Hour</th>
                        <th>Total Charge</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking, index) => (
                        <tr className="user-data" key={index}>
                          <td>{booking.id}</td>
                          <td>{booking.UserName}</td>
                          <td>{booking.UserMobile}</td>
                          <td>{booking.location}</td>
                          <td>{booking.driverName}</td>
                          <td>{booking.driverMobile}</td>
                          <td>{booking.tolatHour}</td>
                          <td>{booking.totalCharge}</td>
                          <td>
                            {/* Add your edit/delete buttons here */}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
