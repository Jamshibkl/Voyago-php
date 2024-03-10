import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./DriverLogin.css";

function DriverLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
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
      }, 500);
    }
    setTimeout(function () {
      setMsg("");
    }, 500);
  }, [msg, navigate]);

  const handleInputChange = (e, type) => {
    switch (type) {
      case "email":
        setError("");
        setEmail(e.target.value);
        if (e.target.value === "") {
          setError("Email has been left blank");
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
    if (email !== "" && pass !== "") {
      var url = "http://localhost/devtest/reactjs/DriverLogin.php";
      var headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };
      let Data = {
        email: email,
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
              localStorage.setItem("email", email);
              navigate("/driver-dashbord");
            }, 500);
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
    <div className="driver-signup-fom ">
      <div className="wrapper1">
        <section className="form1 singup">
          <header>Sign into your account</header>
          <form action="#">
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
              <label>Email Address</label>
              <input
                type="email"
                id="username"
                value={email}
                placeholder="Enter username"
                onChange={(e) => handleInputChange(e, "email")}
              />
            </div>
            <div className="field input">
              <label>Password</label>
              <input
                type="password"
                id="pass"
                placeholder="Pasword"
                value={pass}
                onChange={(e) => handleInputChange(e, "pass")}
              />
              <i className="bi bi-eye"></i>
            </div>

            <div className="field button">
              <input type="submit" value="Submit" onClick={loginSubmit} style={{background:"#407BFF"}}/>
            </div>
          </form>
          <div className="link">
            Create a new account? <Link to="/driver-signup">Sign-up</Link>
          </div>
        </section>
      </div>
      </div>
    </>
  );
}

export default DriverLogin;