import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./DriverRegister.css";

function SignInUp() {
  const navigate = useNavigate();
  const [driver, setDriver] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");

  const [adharId, setAdharId] = useState("");
  const [adharImg, setAdharImg] = useState("");
  const [license, setLicense] = useState("");
  const [licenseImg, setLicenseImg] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [location, setLocation] = useState("");
  // const [usedLocations, SetUsedLocations] = useState("");

  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const DriverLocationInfo = async () => {
    const formData = new FormData();
    formData.append("location", location);


    const responce = await axios.post(
      "http://localhost/devtest/reactjs/location/locations.php",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    if (responce.data.success) {
      setMessage(responce.data.success);
      // setTimeout(() => {
      //   navigate("/driver-login");
      // }, 500);
    }
  };

  
 
  const DriverVerifyInfo = async () => {
    const formData = new FormData();
    formData.append("driver", driver);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("pass1", pass1);
    formData.append("pass2", pass2);
    formData.append("adharId", adharId);
    formData.append("adharImg", adharImg);
    formData.append("license", license);
    formData.append("licenseImg", licenseImg);
    formData.append("profileImg", profileImg);
    formData.append("location", location);

    const responce = await axios.post(
      "http://localhost/devtest/reactjs/DriverVerifyInfo/DriverInfo.php",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    if (responce.data.success) {
      setMessage(responce.data.success);
      setTimeout(() => {
        navigate("/driver-login");
      }, 500);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      driver !== "" &&
      email !== "" &&
      mobile !== "" &&
      pass1 !== "" &&
      pass2 !== "" &&
      adharId !== "" &&
      adharImg !== "" &&
      license !== "" &&
      licenseImg !== "" &&
      profileImg !== "" &&
      location !== ""
    ) {
      if (pass1 === pass2) {
        await DriverVerifyInfo();
        await DriverLocationInfo();
      } else {
        setMsg("password not match");
      }
    } else {
      setMsg("All fields are required!");
    }
  };

  function checkUser() {
    var url =
      "http://localhost/devtest/reactjs/checkdriverinfo/checkdriver.php";
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
        setMsg(response[0].result);
      })
      .catch((err) => {
        setMsg(err);
        console.log(err);
      });
  }

  function checkEmail() {
    var url =
      "http://localhost/devtest/reactjs/checkdriverinfo/checkdriveremail.php";
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
        setMsg(response[0].result);
      })
      .catch((err) => {
        setMsg(err);
        console.log(err);
      });
  }
  function checkMobile() {
    var url =
      "http://localhost/devtest/reactjs/checkdriverinfo/checkdrivermobile.php";
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
        setMsg(response[0].result);
      })
      .catch((err) => {
        setMsg(err);
        console.log(err);
      });
  }

  function checkPassword() {
    if (pass1.length < 8 && pass2.length < 8) {
      setMsg("Password is less than 8 characters!");
    }
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (name.length === 0) {
  //     alert("name blank");
  //   } else if (email.length === 0) {
  //     alert("email blank");
  //   } else if (password.length === 0) {
  //     alert("pass blank");
  //   } else {
  //     const url = "http://localhost/page/log-in.php";
  //     let fData = new FormData();
  //     fData.append("name", name);
  //     fData.append("email", email);
  //     fData.append("password", password);
  //     fData.append("password", password2);
  //     axios
  //       .post(url, fData)
  //       .then((Response) => alert(Response.data))
  //       .catch((error) => alert(error));
  //   }
  // };

  return (
    <div className="driver-signup-fom">
      <div className="wrapper">
        <section className="form singup">
          <header>Create Your Driver Account</header>
          <form action="" method="post">
            {msg !== "" ? (
              <div className="error-txt">{msg}</div>
            ) : (
              <div className="">{msg}</div>
            )}
            {message !== "" ? (
              <div className="success-txt">{message}</div>
            ) : (
              <div className="">{message}</div>
            )}
            <div className="loginsection">
              <div className="login-section-left">
                <div className="field input">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    name="driver"
                    value={driver}
                    onChange={(e) => setDriver(e.target.value)}
                    onBlur={checkUser}
                  />
                </div>

                <div className="field input">
                  <label>Email Address</label>
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={checkEmail}
                  />
                </div>

                <div className="field input">
                  <label>Mobile</label>
                  <input
                    type="number"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    onBlur={checkMobile}
                  />
                </div>
                <div className="field input">
                  <label>Password</label>
                  <input
                    type="password"
                    name="pass1"
                    className=""
                    placeholder="Enter your password"
                    value={pass1}
                    onChange={(e) => setPass1(e.target.value)}
                    onBlur={checkPassword}
                  />
                  <i className="bi bi-eye"></i>
                </div>
                <div className="field input">
                  <label>Password</label>
                  <input
                    type="password"
                    name="pass2"
                    className=""
                    placeholder="Repeat your password"
                    value={pass2}
                    onChange={(e) => setPass2(e.target.value)}
                  />
                  <i className="bi bi-eye"></i>
                </div>
              </div>
              <div className="login-section-right">
                <div className="field input">
                  <label>Profile photo</label>
                  <input
                    type="file"
                    placeholder="Profile photo"
                    // value={profileImg}
                    onChange={(e) => setProfileImg(e.target.files[0])}
                  />
                </div>
                <div className="name-details">
                  <div className="field input">
                    <label>Adhar photo</label>
                    <input
                      type="file"
                      placeholder="Adhar photo"
                      // value={adharImg}
                      onChange={(e) => setAdharImg(e.target.files[0])}
                    />
                  </div>
                  <div className="field input">
                    <label>License photo</label>
                    <input
                      type="file"
                      placeholder="License photo"
                      // value={licenseImg}
                      onChange={(e) => setLicenseImg(e.target.files[0])}
                    />
                  </div>
                </div>
                <div className="field input">
                  <input
                    type="text"
                    placeholder="Adhar Number"
                    value={adharId}
                    onChange={(e) => setAdharId(e.target.value)}
                  />
                  <i className="bi bi-eye"></i>
                </div>
                <div className="field input">
                  <input
                    type="text"
                    placeholder="License number"
                    value={license}
                    onChange={(e) => setLicense(e.target.value)}
                  />
                  <i className="bi bi-eye"></i>
                </div>
                <div className="field input">
                  <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    {/* <option value="">Select Location</option>
                    <option value="bangalore">bangalore</option>
                    <option value="mysore">mysore</option>
                    <option value="mangalore">mangalore</option>
                    <option value="gulbarga">gulbarga</option>
                    <option value="belgaum">belgaum</option>
                    <option value="bijapur">bijapur</option>
                    <option value="hubli">hubli</option>
                    <option value="udupi">udupi</option>
                    <option value="dharwad">dharwad</option>
                    <option value="shimoga">shimoga</option>
                    <option value="kochi">kochi</option>
                    <option value="kasaragod">kasaragod</option>
                    <option value="bekal fort">bekal fort</option> */}
                  </input>
                  <i className="bi bi-eye"></i>
                </div>
                <div className="field button">
                  <input
                    type="submit"
                    defaultValue="Submit"
                    className="btn"
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="link">
            Already signed up? <Link to="/driver-login">Login now</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SignInUp;
