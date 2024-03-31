import React from "react";
import { Link } from "react-router-dom";

function ForPass() {
  // const [user, setUser] = useState("");
  // const [error, setError] = useState("");
  // const [msg, setMsg] = useState("");
  // const navigate = useNavigate(); // Get the navigate function

  // const handleInputChange = (e) => {
  //   setUser(e.target.value);
  //   setError("");
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch('http://localhost/devtest/reactjs/ForgotPass/user_reset_pass_request.php', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ user }),
  //     });
  //     const data = await response.json();

  //     if (data.success) {
  //       setMsg(data.success);
  //       // Delay the navigation by 2 seconds
  //       setTimeout(() => {
  //         navigate("/reset-password"); // Navigate to the reset password page
  //       }, 1000); // 2000 milliseconds = 2 seconds
  //     } else {
  //       setError(data.error);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  return (
    <div className="driver-login-form">
       <div className="wrapper2">
      <section className="form2 login">
        <header>Reset Password</header>
        <div className="form">
          {/* {error && <div className="error-txt">{error}</div>}
          {msg && <div className="success-msg">{msg}</div>} */}

          <div className="field input">
            <label>Enter Username</label>
            <input
              type="text"
              placeholder="Enter Your Username"
              // value={user}
              // onChange={handleInputChange}
            />
          </div>
          <div className="field input">
            <label>New Password</label>
            <input
              type="password"
              placeholder="Enter New Password"
              // value={pass}
              // onChange={(e) => handleInputChange(e, "pass")}
            />
          </div>
          <div className="field input">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              // value={confirmPassword}
              // onChange={(e) => handleInputChange(e, "confirm")}
            />
          </div>


          <div className="field button">
                <input
                  type="submit"
                  style={{ background: "#407BFF" }}
                />
              </div>
          <div>
            <Link to="/login">Back to Login</Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default ForPass;
