import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
function Login() {
  const naviget = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      naviget("/");
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
  }, [msg]);

  const handleInputChange = (e, type) => {
    switch (type) {
      case "user":
        setError("");
        setUser(e.target.value);
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
    if (user !== "" && pass != "") {
      var url = "http://localhost/devtest/reactjs/login.php";
      var headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };
      let Data = {
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
              naviget("/");
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
      <NavBar />
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
                <label>Enter Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Your Username"
                  value={user}
                  onChange={(e) => handleInputChange(e, "user")}
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
            </form>
            <div className="link">
              Create a new account? <Link to="/sign-in">Sign-up</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Login;
