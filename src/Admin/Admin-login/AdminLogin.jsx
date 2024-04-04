import React, { useState, useEffect } from "react";
// import NavBar from "../NavBar/NavBar";
import { useNavigate, Link } from "react-router-dom";
// import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
function AdminLogin() {
  const naviget = useNavigate();
  const [admin, setAdmin] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    let login = localStorage.getItem("admin-login");
    if (login) {
      naviget("/admin-dashboard");
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
    }, 500);
  }, [msg]);

  const handleInputChange = (e, type) => {
    switch (type) {
      case "admin":
        setError("");
        setAdmin(e.target.value);
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
      default:
    }
  };

  function loginSubmit() {
    if (admin !== "" && pass != "") {
      var url = "http://localhost/devtest/reactjs/Admin/login.php";
      var headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };
      var Data = {
        admin: admin,
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
              localStorage.setItem("admin-login", true);
              localStorage.setItem("admin", admin);
              naviget("/admin-dashboard");
            }, 1000);
          }
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
    } else {
      setError("All field are required!");
    }
  }
  return (
    <>
      {/* <NavBar /> */}
      <div className="driver-login-form">
        <div className="wrapper2">
          <section className="form2 login">
            <header>Admin Login</header>
            <div className="form">
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
                  id="username"
                  placeholder="Enter Your Username"
                  value={admin}
                  onChange={(e) => handleInputChange(e, "admin")}
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
                <FontAwesomeIcon icon={faEye} className="icon" />
              </div>

              <div className="field button">
                <input
                  type="submit"
                  defaultValue="Login"
                  onClick={loginSubmit}
                  style={{ background: "#407BFF" }}
                />
              </div>
              <div className="link">
              <Link to="/forgot-password"><p>forgot password?</p></Link>
              <br />
              Create a new account? <Link to="/sign-in">Sign-up</Link>
            </div>
            </div>
           
          </section>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
