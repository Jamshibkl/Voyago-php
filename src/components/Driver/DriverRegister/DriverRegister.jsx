import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import './DriverRegister.css'
function DriverRegister() {
  return (
    <>
    <div className="driver-signup-page">
        <div className="driver-signup-headings">
          <h1>signup and avail attractive offers on first month!</h1>
        </div>
        <div className="driver-signup-form">
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="mobile" placeholder="Mobile" />
            <input type="password" placeholder="Pasword" />
            <input type="password" placeholder="Retype-password" />
            <Link to='/driver-signup-otp'>
            <button>signup</button>
            </Link>
            <br />
            <button>
              <FontAwesomeIcon icon={faGoogle} className="google-icon" />
              continue with google
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default DriverRegister
