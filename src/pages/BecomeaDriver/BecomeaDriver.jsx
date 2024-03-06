import React from "react";
import "./BecomeaDriver.css";
import Cover_pic from "../../Assets/driver-cover-pic.jpg";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
function BecomeaDriver() {
  return (
    <div className="become-a-driver">
      <div className="driver-navbar">
        <div className="driver-navbar-left">
          <h2 className="nav-brand">VOYAGO</h2>
        </div>
        <div className="driver-navbar-right">
          <button className="nav-btn">Have an account?</button>
        </div>
      </div>
      <div className="driver-header">
        <div className="driver-title">
          <h2>Drive with Voyago</h2>
          <h5>Make money on your schedule</h5>
        </div>
        <div className="driver-cover-pic">
          <img src={Cover_pic} alt="gg" />
        </div>
      </div>
      <div className="sing-up-in">
        <div className="driver-sing-up-in">
        <Link to='/driver-signup' style={{textDecoration: 'none'}}>
          <div className="driver-sing-up">  
            <h2>Sign up now </h2>
            <button className="sing-up-btn"><FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
          </Link>
          <hr />
        </div>

        <div className="driver-sing-up-in">
        <Link to='/driver-login' style={{textDecoration: 'none'}}>
          <div className="driver-sing-in">
            <h2>Login</h2>
            <button className="sing-in-btn"><FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
          </Link>
          <hr />
        </div>
      </div>

      <div className="driver-contents-section">
        <h3>Drive when you want</h3>
        <div className="become-a-section">
          <div className="driver-shedules">
            <h6>Drive on Your Own Schedule</h6>
            <p>
              Flexible hours: Drive whenever it suits you, day or night. <br />
              <br />
              Take control of your earnings: The more you drive, the more you
              could earn. Fares are automatically deposited weekly.
            </p>
          </div>

          <div className="driver-shedules">
            <h6>Set Your Own Hours</h6>
            <p>
              No fixed schedule: Work only when it's convenient for you.
              <br /> <br /> Be your own boss: There's no office and no
              supervisor. With Voyago, you're in charge of your time.
            </p>
          </div>

          <div className="driver-shedules">
            <h6>Safety First</h6>
            <p>
              Your safety matters: Voyago is committed to ensuring driver and
              passenger safety. <br />
              <br />
              Advanced technology: Our platform is equipped with safety features
              to protect you before, during, and after every trip.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default BecomeaDriver;
