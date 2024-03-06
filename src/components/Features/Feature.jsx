import React from "react";
import DrivingImage from "../../Assets/Car driving-bro.svg";
import "./Feature.css";
function Feature() {
  return (
    <>
      <div className="feature-row">
        <div className="feature-content">
          <h2>Safety First</h2>
          <p className="feature-para1">
            Your safety is our priority. Experience <br />
            reliable and secure journeys with our <br />
            skilled drivers, thoroughly vetted <br />
            for your peace of mind.
          </p>
          <button className="btn">Learn More</button>
        </div>
        <div className="feature-imgae">
          <img src={DrivingImage} alt="" />
        </div>
      </div>

      <div className="feature-row">
        <div className="feature-imgae">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3ed1e4866c7678a218e92bfdb4f9fe4cdd0579b4559a2cc64dc05309fe36425?apiKey=b5f3e675c69d443bb59ae6ade7d87645&"
            alt=""
          />
        </div>
        <div className="feature-content">
          <h2>Track Your Ride</h2>
          <p className="feature-para2">
            Stay connected throughout your journey. Our real-time tracking
            feature lets you monitor your skillful driver's location, ensuring a
            smooth and stress-free travel experience.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="feature-row">
        <div className="feature-content">
          <h2>In-App Communication</h2>
          <p className="feature-para1">
            Connect with your skillful driver using in-app messaging. Easily
            communicate preferences or provide special instructions, ensuring a
            smooth and personalized journey
          </p>
          <button className="btn">Learn More</button>
        </div>
        <div className="feature-imgae">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/08803c2e766fbc232d92baa7a26464e3f6c0a15d00ee7ad18c6cf9cb0400fb92?apiKey=b5f3e675c69d443bb59ae6ade7d87645&"
            alt=""
          />
        </div>
      </div>

      <div className="feature-row">
        <div className="feature-imgae">
          <img  src="https://cdn.builder.io/api/v1/image/assets/TEMP/08a17c6949b4a689a408fb4b4d9d7cc7c9dd3ba22c2349b82e311e4ca3cba080?apiKey=b5f3e675c69d443bb59ae6ade7d87645&" alt="" />
        </div>
        <div className="feature-content">
          <h2>Transparent Pricing</h2>
          <p className="feature-para2">
            Voyago believes in transparency. Enjoy straightforward pricing with
            no hidden costs. Know your fare upfront and travel with confidence,
            knowing you're getting the best value
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </>
  );
}

export default Feature;
