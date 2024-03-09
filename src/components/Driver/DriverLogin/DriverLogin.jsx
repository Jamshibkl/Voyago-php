import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./DriverLogin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function DriverLogin() {
  const navigate = useNavigate();
  const [driver, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    let login = localStorage.getItem("driver-login");
    if (login) {
      navigate("/driver-dashbord");
    }
    let loginStatus = localStorage.getItem("loginStatus");
    if (loginStatus) {
      setError(loginStatus);
      setTimeout(function () {
        localStorage.clear();
        window.location.reload();
      }, 1000);
    }
    setTimeout(function () {
      setMsg("");
    }, 100);
  }, [msg, navigate]);

  const handleInputChange = (e, type) => {
    switch (type) {
      case "driver":
        setError("");
        setUser(e.target.value);
        if (e.target.value === "") {
          setError("Username has been left blank");
        }
        break;
      case "pass":
        setError("");
        setPass(e.target.value);
        if (e.target.value === "") {
          setError("Password has been left blank");
        }
        break;
      default:
    }
  };

  function loginSubmit(e) {
    e.preventDefault();
    if (driver !== "" && pass !== "") {
      var url = "http://localhost/devtest/reactjs/DriverLogin.php";
      var headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };
      let Data = {
        driver: driver,
        pass: pass,
      };
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          if (
            response[0].result === "Invalid username!" ||
            response[0].result === "Invalid password!"
          ) {
            setError(response[0].result);
          } else {
            setMsg(response[0].result);
            setTimeout(function () {
              localStorage.setItem("driver-login", true);
              localStorage.setItem("driver", driver);
              navigate("/driver-dashbord");
            }, 100);
          }
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
    } else {
      setError("All fields are required!");
    }
  }

  return (
    <>
      <div className="driver-login-page">
        <div className="driver-login-headings">
          <h1>Welcome back driver!</h1>
          <h3>Enter your credentials and login.</h3>
        </div>
        <div className="driver-login-form">
          <form action="">
            <p>
              {error !== "" ? (
                <div style={{ color: "#842029" }}>
                  <b>{error}</b>
                </div>
              ) : (
                <div style={{ color: "#badbcc" }}>
                  <b>{msg}</b>
                </div>
              )}
            </p>
            <input
              type="text"
              id="username"
              value={driver}
              placeholder="Enter username"
              onChange={(e) => handleInputChange(e, "driver")}
            />
            <input
              type="password"
              id="pass"
              placeholder="Pasword"
              value={pass}
              onChange={(e) => handleInputChange(e, "pass")}
            />
            <br />
            <span>forgot password?</span>
            <br />
            {/* <Link to='/driver-verify'> */}
            <button onClick={loginSubmit}>login</button>
            {/* </Link> */}
            <br />
            <button>
              <FontAwesomeIcon icon={faGoogle} className="google-icon" />
              continue with google
            </button>
            <p className="driver-login-para">new driver? register here!</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default DriverLogin;
