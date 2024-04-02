import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ForgotPass() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");
  const [msg, setMessage] = useState("");

  const handleInputChange = (e, type) => {
    switch (type) {
      case "email":
        setError("");
        setEmail(e.target.value);
        if (e.target.value === "") {
          setError("Username has left blank");
        }
        break;
      case "pass":
        setError("");
        setPass(e.target.value);
        if (e.target.value === "") {
          setError("Password has left blank");
        }
        break;
      case "pass2":
        setError("");
        setPass2(e.target.value);
        if (e.target.value === "") {
          setError("Password has left blank");
        } else if (e.target.value !== pass) {
          setError("Confirm password does not match!");
        }
        break;
      default:
    }
  };

  const DriverVerifyInfo = async () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("pass2", pass2);

    const responce = await axios.post(
      "http://localhost/devtest/reactjs/DriverForPass/forgotuser.php",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    console.log(responce.data);
    if (responce.data.success) {
      setMessage("Password Updated Successfully!");
      setTimeout(() => {
        navigate("/driver-login")
      }, 1000);
    }
  };

  const forgotPass = async (e) => {
    e.preventDefault();
    if (email !== "" && pass !== "" && pass2 !== "") {
      await DriverVerifyInfo();
    }else {
      setError("All field are required!");
    }
  };

  function checkEmail() {
    var url = "http://localhost/devtest/reactjs/DriverForPass/validuser.php";
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    var Data = {
      email: email,
    };
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then((response) => response.json())
      .then((response) => {
        setError(response[0].result);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }
  

  return (
    <div className="driver-login-form">
      <div className="wrapper2">
        <section className="form2 login">
          <header>Reset Password</header>
          <div className="form">
            {error && <div className="error-txt">{error}</div>}
            {msg && <div className="success-msg">{msg}</div>}

            <div className="field input">
              <label>Enter Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Your email"
                value={email}
                onChange={(e) => handleInputChange(e, "email")}
                onBlur={checkEmail}
              />
            </div>
            <div className="field input">
              <label>New Password</label>
              <input
                type="password"
                name="pass"
                placeholder="Enter New Password"
                value={pass}
                onChange={(e) => handleInputChange(e, "pass")}
              />
            </div>
            <div className="field input">
              <label>Confirm Password</label>
              <input
                type="password"
                name="pass2"
                placeholder="Confirm Password"
                value={pass2}
                onChange={(e) => handleInputChange(e, "pass2")}
              />
            </div>

            <div className="field button">
              <input
                type="submit"
                onClick={forgotPass}
                style={{ background: "#407BFF" }}
              />
            </div>
            <div>
              <Link to="/driver-login">Back to Login</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ForgotPass;
