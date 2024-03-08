import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./DriverLogin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function DriverLogin() {

  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
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
    }, 1000);
  }, [msg, navigate]);

  const handleInputChange = (e, type) => {
    switch (type) {
      case "user":
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

  function loginSubmit() {
    if (user !== "" && pass !== "") {
      var url = "http://localhost/devtest/reactjs/login.php";
      var headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };
      var Data = {
        user: user,
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
              localStorage.setItem("login", true);
              localStorage.setItem("user", user);
              navigate("/");
            }, 1000);
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
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Pasword" />
            <br />
            <span>forgot password?</span>
            <br />
            <Link to='/driver-verify'>
            <button>login</button>
            </Link>
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
