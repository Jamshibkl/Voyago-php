import React from "react";
import "./Safety.css";
import safety from "../../Assets/safety.jpg";
import covid from "../../Assets/covid19 family safety new bg.jpg";
import safety_img from "../../Assets/istockphoto-1205892464-612x612.jpg";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

function Safety() {
  return (
    <div className="safety-section">
      <NavBar/>
      <div className="ourSafety">
        <div className="info">
          <h1>Safe Journeys Start Here: Voyago's Commitment to Safety</h1>
          <p>
            At Voyago, safety is our top priority. We are committed to providing
            a secure and reliable transportation experience for all our
            passengers and drivers. Explore the safety measures and guidelines
            we have in place to ensure your well-being:
          </p>
        </div>
        <div className="safety-img">
          <img className="image" src={safety} alt="" />
        </div>
      </div>

      <div className="our-section2">
        <h2>Passenger Safety</h2>
        <div className="passengers">
          <div className="safetys">
            <h4>Driver Screening</h4>
            <p>
              We rigorously screen all our drivers to ensure they meet our
              safety standards. Background checks, driving record reviews, and
              vehicle inspections are conducted to verify their eligibility to
              drive with Voyago.
            </p>
          </div>
          <div className="safetys">
            <h4>Real-Time Tracking</h4>
            <p>
              Track your ride in real-time using the Voyago app. Know exactly
              where your driver is and when they will arrive, providing peace of
              mind throughout your journey.
            </p>
          </div>
          <div className="safetys">
            <h4>Secure Payments</h4>
            <p>
              Payment transactions on Voyago are encrypted and secure. Your
              payment information is protected, and you can rest assured that
              your transactions are safe and reliable.
            </p>
          </div>
        </div>

        <h2>Driver Safety</h2>
        <div className="drivers-section">
          <div className="safetys">
            <h4>Passenger Verification</h4>
            <p>
              To ensure the safety of our drivers, passengers are required to
              verify their identity before booking a ride. This helps prevent
              unauthorized or fraudulent bookings and promotes a secure
              environment for drivers
            </p>
          </div>
          <div className="safetys">
            <h4>Emergency Assistance</h4>
            <p>
              In case of emergencies, drivers have access to emergency
              assistance features on the Voyago app. They can quickly contact
              emergency services or alert our support team for immediate
              assistance.
            </p>
          </div>
          <div className="safetys">
            <h4>Safe Driving Practices</h4>
            <p>
              We prioritize safe driving practices through education and
              training, emphasizing defensive driving techniques and customer
              interaction to ensure passenger safety and comfort.
            </p>
          </div>
        </div>
      </div>

      <div className="safetyMeasures">
        <h2>COVID-19 Safety Measures</h2>
        <div className="covid-information">
          <div className="covid-img">
            <img src={covid} alt="" />
          </div>
          <div className="covid-info">
            <p>
              Amidst the COVID-19 pandemic, we've implemented stringent safety
              measures to protect our passengers and drivers. These include
              rigorous sanitization protocols, mandatory face coverings, and a
              contactless experience to minimize transmission risk and
              prioritize the health and well-being of everyone in our community
            </p>
          </div>
        </div>
      </div>

      <div className="covid-safety">
        <div className="covid-safety-section">
          <i class="fa-solid fa-pump-soap"></i>
          <h4>Sanitization Protocols</h4>
          <p>
            In response to the COVID-19 pandemic, we have implemented rigorous
            sanitization protocols for our vehicles. High-touch surfaces are
            regularly cleaned and disinfected to minimize the risk of
            transmission.
          </p>
        </div>
        <div className="covid-safety-section">
          <h4>Contactless Experience</h4>
          <p>
            Face coverings are mandatory for both passengers and drivers during
            rides. This helps reduce the spread of respiratory droplets and
            enhances the safety of everyone onboard.
          </p>
        </div>
        <div className="covid-safety-section">
          <h4>Secure Payments</h4>
          <p>
            Minimize physical contact during your ride with our contactless
            experience. Book, pay, and communicate with your driver through the
            Voyago app to maintain a safe distance and reduce the risk of
            transmission.
          </p>
        </div>
      </div>

      <div className="communitySafety">
        <div className="community-info">
          <h1 className="community-heading">Community Safety</h1>
          <p className="community-para">
            Our commitment to community safety extends to empowering passengers
            and drivers alike. Our reporting features allow for swift action on
            safety concerns, while our focus on safety education fosters
            awareness and proactive measures within our community, ensuring a
            secure and trustworthy environment for all.
          </p>
        </div>
        <div className="community-img">
          <img className="image" src={safety_img} alt="" />
        </div>
      </div>

      <div className="safety-features">
        <div className="reporting-Features">
          <h5 className="feature-heading">Reporting Features</h5>
          <p className="feature-para">
            Our reporting features empower both passengers and drivers to report
            any safety concerns or incidents they encounter during their ride.
            Prompt action is taken to address reported issues and ensure the
            safety of our community.
          </p>
        </div>
        <div className="safety-Education">
          <h5 className="feature-heading">Safety Education</h5>
          <p className="feature-para">
            We believe in fostering a culture of safety awareness and education
            within our community. Resources and tips on staying safe while using
            Voyago are readily available to passengers and drivers.
          </p>
        </div>
      </div>

      <div className="contact-team">
        <h4 className="contact-heading">Contact Us</h4>
        <h6 className="contact-heading">Have Questions?</h6>
        <p className="team-para">
          If you have any questions or concerns about safety on Voyago, please
          don't hesitate to contact us. Our support team is available to assist
          you and address any inquiries you may have.
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default Safety;
