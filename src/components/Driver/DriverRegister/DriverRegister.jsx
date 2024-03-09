import React, { useState, useEffect } from "react";
// import Navbar from "../NavBar/NavBar";
import { useNavigate, Link } from "react-router-dom";
import "./DriverRegister.css";

function SignInUp() {

  const navigate = useNavigate();

  const [driver, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setTimeout(function () {
      setMsg("");
    }, 15000);
  }, [msg]);

  // useEffect(() => {
  //   let login = localStorage.getItem("Submit");
  //   if (login) {
  //     navigate("/driver-verify");
  //   }
  //   let loginStatus = localStorage.getItem("loginStatus");
  //   if (loginStatus) {
  //     setError(loginStatus);
  //     setTimeout(function () {
  //       localStorage.clear();
  //       window.location.reload();
  //     }, 1000);
  //   }
  //   setTimeout(function () {
  //     setMsg("");
  //   }, 1000);
  // }, [msg, navigate]);


  const handleInputChange = (e, type) => {
    switch (type) {
      case "driver":
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
      case "mobile":
        setError("");
        setMobile(e.target.value);
        if (e.target.value === "") {
          setError("mobile number has left blank!");
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
    if (
      driver !== "" &&
      email !== "" &&
      mobile !== "" &&
      pass1 !== "" &&
      pass2 !== ""
    ) {
      var url = "http://localhost/devtest/reactjs/driverregistry.php";
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      var Data = {
        driver: driver,
        email: email,
        mobile: mobile,
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
              localStorage.setItem("driver-login", true);
              localStorage.setItem("driver", driver);
              navigate("/driver-verify");
            }, 100);
          }
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
      setUser("");
      setEmail("");
      setMobile("");
      setPass1("");
      setPass2("");
    } else {
      setError("All fields are required!");
    }
  }

  function checkUser() {
    var url = "http://localhost/devtest/reactjs/checkdriverinfo/checkdriver.php";
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    var Data = {
      driver: driver,
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
    var url = "http://localhost/devtest/reactjs/checkdriverinfo/checkdriveremail.php";
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
  function checkMobile() {
    var url = "http://localhost/devtest/reactjs/checkdriverinfo/checkdrivermobile.php";
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    var Data = {
      mobile: mobile,
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
      {/* <Navbar /> */}
      <section className="user-register">
        <div className="register-container">
          <div className="register-img">
            <img src="" alt="" />
          </div>
          <h2 className="register-container-heading">Create an account</h2>
          <p className="valid-msg">
            {msg !== "" ? (
              <span className="success">{msg}</span>
            ) : (
              <span className="error">{error}</span>
            )}
          </p>
          <div className="">
            {/* <label className="form-label">Your User Name</label> */}
            <br />
            <input
              type="text"
              name="driver"
              className=""
              placeholder="Enter Your Username"
              value={driver}
              onChange={(e) => handleInputChange(e, "driver")}
              onBlur={checkUser}
            />
          </div>
          <div className="form-outline">
            {/* <label className="form-label">Your Email</label> */}
            <br />
            <input
              type="email"
              name="email"
              className=""
              placeholder="Enter your email"
              value={email}
              onChange={(e) => handleInputChange(e, "email")}
              onBlur={checkEmail}
            />
          </div>
          <div className="form-outline">
            {/* <label className="form-label">mobile</label> */}
            <br />
            <input
              type="number"
              name="mobile"
              className=""
              placeholder="Enter your phone number"
              value={mobile}
              onChange={(e) => handleInputChange(e, "mobile")}
              onBlur={checkMobile}
            />
          </div>
          <div className="form-outline ">
            {/* <label className="form-label">Password</label> */}
            <br />
            <input
              type="password"
              name="pass1"
              className=""
              placeholder="Enter your password"
              value={pass1}
              onChange={(e) => handleInputChange(e, "pass1")}
              onBlur={checkPassword}
            />
          </div>
          <div className="form-outline ">
            {/* <label className="form-label">Repeat your password</label> */}
            <br />
            <input
              type="password"
              name="pass2"
              className=""
              placeholder="Repeat your password"
              value={pass2}
              onChange={(e) => handleInputChange(e, "pass2")}
            />
          </div>
          <br />
          <div className="form-check ">
            <input
              className="form-check-input "
              type="checkbox"
              defaultValue
              id="form2Example3cg"
            />
            <p className="form-check-label" htmlFor="form2Example3g">
              I agree all statements in{" "}
              <a href="#!" className="text-body">
                <u>Terms of service</u>
              </a>
            </p>
          </div>
          <div className="">
            {/* <Link to="/driver-verify"> */}
            <input
              type="submit"
              defaultValue="Submit"
              className="btn"
              onClick={handleSubmit}
            />
            {/* </Link> */}
          </div>
          <p className="text-center">
            Have already an account?{" "}
            <a href="#!" className="">
              <Link to="/login">
                <u>Login here</u>
              </Link>
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default SignInUp;
