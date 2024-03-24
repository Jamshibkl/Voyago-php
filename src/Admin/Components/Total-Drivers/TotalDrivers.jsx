import React, { useEffect, useState } from 'react';
import "./TotalDrivers.css"
import Sidebar from "../Sidebar/Sidebar";
import axios from 'axios';
import Navbar from "../admin-navbar/Navbar";

function TotalDrivers() {
  const [feedbacks, setFeedback] = useState([]);
  const [error, setError] = useState(null); // Track potential errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/devtest/reactjs/get_feedback.php'); // Modified URL
        setFeedback(response.data);
      } catch (error) {
        // Handle errors gracefully, e.g., display an error message
        console.error('Error fetching customers:', error);
        setError(error); // Store error for potential display
      }
    };

    fetchData();
  }, []);
  return (
    <div className="admin-Dashboard">
      <div className="admin-SideBar">
        <Sidebar />
      </div>

      <div className="admin-Content">
        <Navbar />
        <div className="dashboard-driver-info">
          <div className="dashboard-driver">
            <h2>Feedbacks!</h2>
            {error ? (
              // Display error message if available
              <p>Error fetching feedbacks: {error.message}</p>
            ) : (
              feedbacks.length > 0 && (
            <div className="driver-table">
              <table>
                <thead>
                <tr>
                  <th>ID</th>
                  <th>User Name</th>
                  <th>Driver Name</th>
                  <th>Driver ID</th>
                  <th>User Feedback</th>
                </tr>
                </thead>
                <tbody>
                {feedbacks.map((feedback, index) => (
                <tr className="table-data" key={index}> 
                  <td>{feedback.id}</td>
                  <td>{feedback.userName}</td>
                  <td>{feedback.driverName}</td>
                  <td>{feedback.driver_id}</td>
                  <td>{feedback.feedback}</td>
                </tr>
                 ))}
                </tbody>
              </table>
            
            </div>
              )
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalDrivers;
