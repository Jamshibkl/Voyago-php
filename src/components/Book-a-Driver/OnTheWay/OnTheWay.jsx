import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../../NavBar/NavBar";
import "./OnTheWay.css";

function OnTheWay() {
  const { bookingUser } = useParams();
  // console.log(bookingUser);

  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null); // Track potential errors

  useEffect(() => {
    const userId = localStorage.getItem("user"); // Get the logged-in user's ID

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost/devtest/reactjs/get_booking.php?user_id=${userId}`
        ); // Modified URL to include user_id parameter
        setBookings(response.data);
      } catch (error) {
        // Handle errors gracefully, e.g., display an error message
        console.error("Error fetching bookings:", error);
        setError(error); // Store error for potential display
      }
    };

    fetchData();
  }, []);

  return (
    <div className="rides-Dashboard">
    <div className="rides-Content">
      <NavBar />
      <div className="rides-customers-info">
        <div className="rides-customers">
          <div className="rides-table">
            <h2>Booking Details</h2>
            {error ? (
              <p>Error fetching bookings: {error.message}</p>
            ) : (
              bookings.length > 0 && (
                <div>
                  {bookings.length !== 0 ? (
                    <table>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Username</th>
                          <th>Pickup Location</th>
                          <th>Dropoff Location</th>
                          <th>Pickup Date</th>
                          <th>Pickup Time</th>
                          <th>Cab Type</th>
                          <th>Booked on</th>
                          <th>Booked Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bookings.map((booking, index) => (
                          <tr className="user-data" key={index}>
                            {booking.username === bookingUser && (
                              <>
                                <td>{booking.id}</td>
                                <td>{booking.username}</td>
                                <td>{booking.pickupLocation}</td>
                                <td>{booking.dropoffLocation}</td>
                                <td>{booking.pickupDate}</td>
                                <td>{booking.pickupTime}</td>
                                <td>{booking.cabType}</td>
                                <td>{booking.created_at}</td>
                                <td>
                                  <div className="edit-btn">
                                    <button className="confirm-btn">
                                      Pending
                                    </button>
                                    <button className="delete-btn">
                                      Cancel
                                    </button>
                                  </div>
                                </td>
                              </>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p>No rides</p>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default OnTheWay;
