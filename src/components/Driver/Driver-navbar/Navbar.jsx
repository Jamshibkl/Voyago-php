import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const { driverId } = useParams();
  console.log(driverId);

  const [driver, setDriver] = useState(null);
  const driveremail = localStorage.getItem("email");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost/devtest/reactjs/DriverVerifyInfo/DriverInfo.php?email=${driveremail}`
        );
        const data = await response.json();
        const filteredDriver = data.find((item) => item.email === driveremail);
        setDriver(filteredDriver);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [driverId, driveremail]); // Added driveremail to dependency array

  return (
    <div className="driver-nav">
      {driver && (
        <>
          <h3>{driver.driver}</h3>
          <div className="driver-logo">
            <div className="driver-profile">
              <img
                src={`http://localhost/devtest/reactjs/DriverVerifyInfo/images/Profile/${driver.profileImg}`}
                alt=""
              />
              <span>
                {" "}
                <FontAwesomeIcon className="icon" icon={faLocationDot} />
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
