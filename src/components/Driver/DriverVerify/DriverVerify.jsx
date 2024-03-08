import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DriverVerify.css";
import { Link } from "react-router-dom";
function DriverVerify() {
  const navigate = useNavigate();
  const [adharId, setAdharId] = useState("");
  const [adharImg, setAdharImg] = useState("");
  const [license, setLicense] = useState("");
  const [licenseImg, setLicenseImg] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const DriverVerifyInfo = async () => {
    const formData = new FormData();
    formData.append("adharId", adharId);
    formData.append("adharImg", adharImg);
    formData.append("license", license);
    formData.append("licenseImg", licenseImg);
    formData.append("profileImg", profileImg);
    formData.append("location", location);

    const responce = await axios.post("http://localhost/devtest/reactjs/DriverVerifyInfo/DriverInfo.php", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (responce.data.success) {
      setMessage(responce.data.success);
      setTimeout(() => {
        navigate("/driver-login");
      }, 2000);
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    await DriverVerifyInfo();
  };

  return (
    <div>
      <div className="driver-verify-page">
        <div className="driver-verify-headings">
          <h1>please verify your identification details!</h1>
        </div>
        <div className="driver-verify-form">
        <p className="text-warning">{ message}</p>
          <form action="" onSubmit={handlesubmit}>
            <div className="verify-input-filed">
              <input
                type="text"
                placeholder="Enter Your Adhar Card Id"
                onChange={(e) => setAdharId(e.target.value)}
              />
              <label htmlFor="adharId">Upload the Adhar Card Image</label>
            </div>
            <input
              type="file"
              id="adharId"
              onChange={(e) => setAdharImg(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="Enter your License ID"
              onChange={(e) => setLicense(e.target.value)}
            />
            <label htmlFor="licenseId">Upload the License ID Image</label>
            <input
              type="file"
              id="licenseId"
              onChange={(e) => setLicenseImg(e.target.files[0])}
            />
            <label htmlFor="selfie">Upload a clear photo of yourself</label>
            <input
              type="file"
              id="selfie"
              onChange={(e) => setProfileImg(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="Choose your location"
              onChange={(e) => setLocation(e.target.value)}
            />
            {/* <Link to="/driver-relax"> */}
            <button>verify</button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default DriverVerify;
