import React from "react";
import "./ContactUs.css";
import NavBar from "../../components/NavBar/NavBar";
import ContactImg from "../../Assets/Messaging fun-rafiki.svg";
import AdressImage from '../../Assets/Simple-Location-Picker (1).webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/Footer/Footer";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function ContactUs() {
  return (
    <>
      <NavBar />
      <div className="contact_us">
        <div className="Contact_section">
          <div className="sub_contact">
            <h1 className="contact_heading">Contact Us</h1>
            <p className="contact_para">
              Have questions, feedback, or need assistance? Get in touch with
              the Voyago team. We're here to help!
            </p>
            <img
              src={ContactImg}
              alt="message_avatar"
              className="contact_avatar"
            />
          </div>
          <div className="form_contact">
            <div className="contact_form">
              <h3 className="form_heading">Get in Touch</h3>
              <p className="form_para">
                Fill out the form below to send us a message. Our team will
               <br /> respond to your inquiry as soon as possible.
              </p>
              <form action="" method="POST" className="form_sectipon">
                <input
                  type="text"
                  placeholder="First name"
                  className="input_first_name"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="input_second_name"
                />
                <br />
                <input
                  type="text"
                  placeholder="Email"
                  className="input_email"
                />
                <br />
                <textarea
                  type="text"
                  placeholder="Message"
                  className="input_message"
                />
                <br />
                <input
                  type="submit"
                  value="Submit"
                  name="submit"
                  placeholder="Submit"
                  className="submit_btn"
                />
              </form>
              <div className="form_social">
                <p className="social_para">
                  Connect with us on social media for the latest updates,<br /> news,
                  and announcements:
                </p>
                <div className="contact_social_icons">
                  <FontAwesomeIcon icon={faFacebook}  className="FontAwesomeIcon"/>
                  <FontAwesomeIcon icon={faInstagram} className="FontAwesomeIcon"/>
                  <FontAwesomeIcon icon={faXTwitter} className="FontAwesomeIcon"/>
                  <FontAwesomeIcon icon={faYoutube} className="FontAwesomeIcon"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="contact_information">
        <div className="left_information">
          <h2 className="information_heading">Contact Information</h2>
          <h4 className="information_subheading">Customer Support</h4>
          <p className="information_para">
            Email: support@voyago.com <br /> Phone: 1-800-123-4567
          </p>

          <h2 className="information_heading">Business Inquiries</h2>
          <p className="information_para">
            Email: business@voyago.com <br /> Phone: 1-800-987-6543
          </p>

          <h2 className="information_heading">Feedback</h2>
          <h4 className="information_subheading">Share Your Thoughts</h4>
          <p className="information_para">
            We value your feedback! Let us know about your experience with
            Voyago and how we can improve our services to better meet your
            needs.
          </p>

          <h2 className="information_heading">Rate Our Service</h2>
          <p className="information_para">
            Your opinion matters! Take a moment to rate your recent ride
            experience with Voyago and help us maintain our commitment to
            excellence.
          </p>
        </div>
        <div className="right_information">
          <h2 className="information_heading">Hours of Operation</h2>
          <h4 className="information_subheading">Customer Support</h4>
          <p className="information_para">
            Monday - Friday: 9:00 AM - 5:00 PM (Local Time) <br />
            Saturday - Sunday: Closed
          </p>
          <h2 className="information_heading">Our Office</h2>
          <h4 className="information_subheading">Address</h4>
          <p className="information_para">
            23 Main Street, Cityville, State, Country <br />
            Zip Code: 12345
          </p>
          <img src={AdressImage} alt="" className="our_address_img"/>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactUs;
