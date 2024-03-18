import React, { useEffect, useState } from "react";
import './DriverProfile.css';
import { useParams } from "react-router-dom";
import DriverSideBar from '../DriverSideBar/DriverSideBar';

function DriverProfile() {
  const { driverId } = useParams();
  console.log(driverId);

  const [driver, setDriver] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost/devtest/reactjs/DriverVerifyInfo/DriverInfo.php");
        const data = await response.json();
        const filteredDriver = data.find(item => item.id === driverId);
        setDriver(filteredDriver);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [driverId]);

  return (
    <div>
      <div className='driver-profile-section'>
        <DriverSideBar />
        {driver && (
          <div className="driver-profile-info">
            <div className="profile">
              <span className='profile-pic'>
                <img src={`http://localhost/devtest/reactjs/DriverVerifyInfo/images/Profile/${driver.profileImg}`} alt="" />
              </span>
              <h3>{driver.driver}</h3>
              <p>{driver.location}</p>
            </div>
            <div className="driver-profile-form">
              <form action="">
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Email' value={driver.email} readOnly/>
                <label htmlFor="">Mobile no</label>
                <input type="text" placeholder='Mobile' value={driver.mobile} readOnly/>
                <br />
                <label htmlFor="">Adhar card</label>
                <input type="text" placeholder='Adhar card' value={driver.adharId} readOnly/>
                <label htmlFor="">Driver License</label>
                <input type="text" placeholder='Driver License' value={driver.license} readOnly/>
                <br />
                <div>
                <label htmlFor="">Adhar card Image</label>
                  <img src={`http://localhost/devtest/reactjs/DriverVerifyInfo/images/adhar/${driver.adharImg}`} alt="Adhar card Image" />
                </div>
                <div>
                <label htmlFor="">Driver License Image</label>
                  <img src={`http://localhost/devtest/reactjs/DriverVerifyInfo/images/license/${driver.licenseImg}`} alt="Driver License Image" />
                </div>
                <br />
                {/* <button>Change password</button> */}
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DriverProfile;