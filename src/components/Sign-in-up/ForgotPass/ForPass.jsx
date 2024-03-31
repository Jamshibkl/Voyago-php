import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ForPass() {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate(); // Get the navigate function
  //  const userId = localStorage.getItem("user");
  const handleInputChange = (e) => {
    setUser(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/devtest/reactjs/ForgotPass/user_reset_pass_request.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user }),
      });
      const data = await response.json();

      if (data.success) {
        setMsg(data.success);
        // Delay the navigation by 2 seconds
        setTimeout(() => {
          navigate("/reset-password"); // Navigate to the reset password page
        }, 1000); // 2000 milliseconds = 2 seconds
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="driver-login-form">
      <section className="form2 login">
        <header>Forgot Password</header>
        <div className="form">
          {error && <div className="error-txt">{error}</div>}
          {msg && <div className="success-msg">{msg}</div>}

          <div className="field input">
            <label>Enter Username</label>
            <input
              type="text"
              placeholder="Enter Your Username"
              value={user}
              onChange={handleInputChange}
            />
          </div>

          <div className="field button">
            <button onClick={handleSubmit}>Submit</button>
          </div>
          <div>
            <Link to="/login">Back to Login</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForPass;
