import React from "react";
import "./Footer.css";
import X from "../../Assets/Twetter.jpeg";
import Youtube from "../../Assets/YouTube.jpeg";
import Facebook from "../../Assets/facebook.jpeg";
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
            <p>voyago@gmail.com</p>
            <p>Link1</p>
            <p>Link2</p>
            <p>Link3</p>
          </div>
          <div className="phone">
           <p> +919874561232</p>
            <p>Link1</p>
            <p>Link2</p>
            <p>Link3</p>
          </div>
          <div className="location">
           <p>Mangalore</p>
            <p>Link1</p>
            <p>Link2</p>
            <p>Link3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
