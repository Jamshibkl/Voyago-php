import React, { useState, useEffect } from "react";
import Navbar from "../NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import "./SignInUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye
} from "@fortawesome/free-solid-svg-icons";

function SignInUp() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setTimeout(function () {
      setMsg("");
    }, 15000);
  }, [msg]);

  const handleInputChange = (e, type) => {
    switch (type) {
      case "user":
        setError("");
        setUser(e.target.value);
        if (e.target.value === "") {
          setError("Username has left blank!");
        }
        break;
      case "email":
        setError("");
        setEmail(e.target.value);
        if (e.target.value === "") {
          setError("Email has left blank!");
        }
        break;
      case "pass1":
        setError("");
        setPass1(e.target.value);
        if (e.target.value === "") {
          setError("Password has left blank!");
        }
        break;
      case "pass2":
        setError("");
        setPass2(e.target.value);
        if (e.target.value === "") {
          setError("Confirm password has left blank!");
        } else if (e.target.value !== pass1) {
          setError("Confirm password does not match!");
        }
        break;
      default:
    }
  };

  function handleSubmit() {
    if (user !== "" && email !== "" && pass1 !== "" && pass2 !== "") {
      var url = "http://localhost/devtest/reactjs/registration.php";
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      var Data = {
        user: user,
        email: email,
        pass: pass2,
      };
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          setMsg(response[0].result);
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
              navigate("/login");
            }, 100);
          }
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
      setUser("");
      setEmail("");
      setPass1("");
      setPass2("");
    } else {
      setError("All fields are required!");
    }
  }

  function checkUser() {
    var url = "http://localhost/devtest/reactjs/checkuser.php";
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    var Data = {
      user: user,
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

  function checkEmail() {
    var url = "http://localhost/devtest/reactjs/checkemail.php";
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

  function checkPassword() {
    if (pass1.length < 8) {
      setError("Password is less than 8 characters!");
    }
  }

  return (
    <>
      <Navbar />
      <div className="driver-signup-fom ">
        <div className="wrapper1">
          <section className="form1 singup">
            <header>Create an account</header>
            <form>
              {error !== "" ? (
                <div className="error-txt">{error}</div>
              ) : (
                <div className="">{error}</div>
              )}
              {msg !== "" ? (
                <div className="success-msg">{msg}</div>
              ) : (
                <div className="">{msg}</div>
              )}

              <div className="field input">
                <label>Username</label>
                <input
                  type="text"
                  name="user"
                  placeholder="Enter Username"
                  value={user}
                  onChange={(e) => handleInputChange(e, "user")}
                  onBlur={checkUser}
                />
              </div>
              <div className="field input">
                <label>Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => handleInputChange(e, "email")}
                  onBlur={checkEmail}
                />
              </div>
              <div className="field input">
                <label>Password</label>
                <input
                  type="password"
                  name="pass1"
                  placeholder="Pasword"
                  value={pass1}
                  onChange={(e) => handleInputChange(e, "pass1")}
                  onBlur={checkPassword}
                />
                <FontAwesomeIcon icon={faEye} className="icon"/>
              </div>
              <div className="field input">
                <label>Repeat your password</label>
                <input
                  type="password"
                  name="pass2"
                  placeholder="Repeat your password"
                  value={pass2}
                  onChange={(e) => handleInputChange(e, "pass2")}
                />
                <FontAwesomeIcon icon={faEye} className="icon"/>
              </div>
              <br />
              <div className="form-check ">
                <input
                  className="form-check-input "
                  type="checkbox"
                  defaultValue
                  id="form2Example3cg"
                />
                <p className="form-check-label" htmlFor="form2Example3g" style={{margin:"0px"}}>
                  I agree all statements in{" "}
                  <a href="#!" className="text-body">
                    <u>Terms of service</u>
                  </a>
                </p>
              </div>

              <div className="field button">
                <input
                  type="submit"
                  defaultValue="Submit"
                  onClick={handleSubmit}
                  style={{ background: "#407BFF" }}
                />
              </div>
            </form>
            <div className="link">
              Have already an account? <Link to="/login">Login here</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default SignInUp;
