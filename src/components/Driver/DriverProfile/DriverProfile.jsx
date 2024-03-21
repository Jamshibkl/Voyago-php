import React, { useEffect, useState } from "react";
import "./DriverProfile.css";
import { useParams } from "react-router-dom";
import DriverSideBar from "../DriverSideBar/DriverSideBar";

function DriverProfile() {
  const { driverId } = useParams();
  console.log(driverId);

  const [driver, setDriver] = useState(null);

  const driveremail = localStorage.getItem("email");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost/devtest/reactjs/DriverVerifyInfo/DriverInfo.php"
        );
        const data = await response.json();
        const filteredDriver = data.find((item) => item.email === driveremail);
        setDriver(filteredDriver);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [driverId]);

  return (
    <div>
      <div className="driver-profile-section">
        <DriverSideBar />
        <div className="dr-info">
          {driver && (
            <div className="driver-profile-info">
              <div className="profile">
                <span className="profile-pic">
                  <img
                    src={`http://localhost/devtest/reactjs/DriverVerifyInfo/images/Profile/${driver.profileImg}`}
                    alt=""
                  />
                </span>
              </div>

              <div className="driver-profile-form">
                <h3>{driver.driver}</h3>
                <p>{driver.location}</p>
              </div>
              <div className="driver-profile-form">
                <form action="">
                  <div className="dr-profile-info">
                    <div className="dr-personal-info">
                      <label htmlFor="">Email</label>
                      <input
                        type="text"
                        placeholder="Email"
                        value={driver.email}
                        readOnly
                      />
                    </div>
                    <div className="dr-personal-info">
                      <label htmlFor="">Mobile no</label>
                      <input
                        type="text"
                        placeholder="Mobile"
                        value={driver.mobile}
                        readOnly
                      />
                    </div>
                  </div>
                  <br />
                  <div className="dr-profile-info">
                    <div className="dr-personal-info">
                      <label htmlFor="">Adhar card</label>
                      <input
                        type="text"
                        placeholder="Adhar card"
                        value={driver.adharId}
                        readOnly
                      />
                    </div>
                    <div className="dr-personal-info">
                      <label htmlFor="">Driver License</label>
                      <input
                        type="text"
                        placeholder="Driver License"
                        value={driver.license}
                        readOnly
                      />
                    </div>
                  </div>
                  {/* <br /> */}
                  <div className="dr-profile-info">
                    <div className="dr-personal-id">
                      <label htmlFor="">Adhar card Image</label>
                      <img
                        src={`http://localhost/devtest/reactjs/DriverVerifyInfo/images/adhar/${driver.adharImg}`}
                        alt="Adhar card Image"
                      />
                    </div>
                    <div className="dr-personal-id">
                      <label htmlFor="">Driver License Image</label>
                      <img
                        src={`http://localhost/devtest/reactjs/DriverVerifyInfo/images/license/${driver.licenseImg}`}
                        alt="Driver License Image"
                      />
                    </div>
                  </div>
                  <br />
                  {/* <button>Change password</button> */}
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DriverProfile;
