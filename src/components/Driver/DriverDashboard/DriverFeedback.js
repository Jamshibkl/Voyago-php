import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DriverFeedback() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/devtest/reactjs/get_driver_feedback.php');
        setFeedback(response.data);
      } catch (error) {
        console.error('Error fetching driver feedback:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="driver-feedback">
      <h2>User Feedback</h2>
      <div className="feedback-list">
        {feedback.map((item, index) => (
          <div key={index} className="feedback-item">
            <p>User: {item.userName}</p>
            <p>Feedback: {item.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DriverFeedback;
