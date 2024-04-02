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

  // useEffect(() => {
  //   const userId = localStorage.getItem("user"); // Get the logged-in user's ID

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost/devtest/reactjs/get_booking.php`
  //       ); // Modified URL to include user_id parameter
  //       setBookings(response.data);
  //     } catch (error) {
  //       // Handle errors gracefully, e.g., display an error message
  //       console.error("Error fetching bookings:", error);
  //       setError(error); // Store error for potential display
  //     }
  //   };

  //   fetchData();
  // }, []);
  useEffect(() => {
    const userId = localStorage.getItem("user"); // Get the logged-in user's ID
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/devtest/reactjs/RideInformation/get_rideinfo.php"
        );
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching driver information:", error);
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
            <h2>Ride History</h2>
            {error ? (
              <p>Error fetching bookings: {error.message}</p>
            ) : (
              bookings.length > 0 && (
                <div>
                  {bookings.length !== 0 ? (
                    <table>
                      <thead>
                        <tr>
                          {/* <th>ID</th> */}
                          {/* <th>Username</th> */}
                          <th>Pickup Location</th>
                          <th>Mobile</th>
                          <th>DriverName</th>
                          <th>tolatHour</th>
                          <th>totalCharge</th>
                
               
                        </tr>
                      </thead>
                      <tbody>
                        {bookings.map((booking, index) => (
                          <tr className="user-data" key={index}>
                            {booking.UserName === bookingUser && (
                              <>
                                {/* <td>{booking.id}</td> */}
                                {/* <td>{booking.username}</td> */}
                                <td>{booking.location}</td>
                                <td>{booking.UserMobile}</td>
                                <td>{booking.driverName}</td>
                                <td>{booking.tolatHour}</td>
                                <td>{booking.totalCharge}</td>
                                <td>
                                  {/* <div className="edit-btn">
                                    <button className="confirm-btn">
                                      Pending
                                    </button>
                                    <button className="delete-btn">
                                      Cancel
                                    </button>
                                  </div> */}
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