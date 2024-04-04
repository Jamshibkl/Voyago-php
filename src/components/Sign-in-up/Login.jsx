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
  const [admin, setAdmin] = useState("");

  // useEffect(() => {
  //   const getProduct = () => {
  //     fetch("http://localhost/devtest/reactjs/adminRole.php")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const extractedRoles = data.map(item => item.role);
  //         setAdmin(extractedRoles);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   getProduct();
  // }, []);


  // console.log(admin.role);

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
    }, 500);
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
      <div className="driver-login-form">
        <div className="wrapper2">
          <section className="form2 login">
            <header>Sign into your account</header>
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
              <div className="link">
                <Link to="/forgot-password">
                  <p>forgot password?</p>
                </Link>
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

export default Login;
