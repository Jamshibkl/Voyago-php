import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function ResetPass() { // Assuming you have a token parameter in your route
  const [pass, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate(); 

  const handleInputChange = (e, type) => {
    setError("");
    if (type === "pass") {
      setPassword(e.target.value);
    } else if (type === "confirm") {
      setConfirmPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pass !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch('http://localhost/devtest/reactjs/ForgotPass/user_reset_password.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pass }),
      });
      const data = await response.json();

      if (data.success) {
        setMsg(data.success);
        setTimeout(() => {
            navigate("/login"); // Navigate to the reset password page
          }, 1000);
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
        <header>Reset Password</header>
        <div className="form">
          {error && <div className="error-txt">{error}</div>}
          {msg && <div className="success-msg">{msg}</div>}

          <div className="field input">
            <label>New Password</label>
            <input
              type="password"
              placeholder="Enter New Password"
              value={pass}
              onChange={(e) => handleInputChange(e, "pass")}
            />
          </div>
          <div className="field input">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => handleInputChange(e, "confirm")}
            />
          </div>

          <div className="field button">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResetPass;