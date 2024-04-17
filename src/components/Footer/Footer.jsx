import React from "react";
import "./Footer.css";
import X from "../../Assets/Twetter.jpeg";
import Youtube from "../../Assets/YouTube.jpeg";
import Facebook from "../../Assets/facebook.jpeg";
import { Link } from "react-router-dom";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footerHead">
          <div className="voyago">
            <h3>VOYAGO</h3>
          </div>
          <div className="copyWrite">
            &copy;copyright {year}-Voyago all right reserved.
          </div>
          <div className="socialMedia">
            <img src={X} alt="" />
            <img src={Youtube} alt="" />
            <img src={Facebook} alt="" />
          </div>
        </div>

        <hr className="hr-line" />

        <div className="links">
          <div className="email">
            <Link to='/'>
            <p>Home</p>
            </Link>
            <Link to='/about-us'>
            <p>About</p>
            </Link>
            <Link to='/safety'>
            <p>Safety</p>
            </Link>
            <Link to='/contact'>
            <p>Contact</p>
            </Link>
          </div>
          <div className="phone">
           <Link to='/service-status'>
           <p>Service Status</p>
           </Link>
            <Link to='/how-it-works'>
            <p>How it Works</p>
            </Link>
            <Link to='/our-team'>
            <p>Our Team</p>
            </Link>
            <Link to='/leagal-privacy'>
            <p>Legal and privacy</p>
            </Link>
          </div>
          <div className="location">
            <p>Reach to us</p>
            <p>voyago@gmail.com</p>
            <p>+919895033329</p>
            <p>Manglore,karnataka,india</p>
          </div>
        </div>
      </div>
    </div>
  );
}
