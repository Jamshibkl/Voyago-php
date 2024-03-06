import * as React from "react";
import "./ServiceStatus.css";
import MotherImg from "../../Assets/download.jpeg";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import CurrentService from "../../Assets/service current.svg";
function ServiceStatus(props) {
  return (
    <>
      <NavBar />
      <div className="service">
        <div className="service-2">Service Status</div>
        <div className="service-3">
          <div className="service-4">
            <div className="column">
              <div className="service-5">
                <div className="service-6">
                  Real-Time Updates on Voyago's Service Status
                </div>
                <div className="service-7">
                  Stay informed about the status of Voyago's services with
                  real-time updates on availability, performance, and any
                  potential disruptions.
                </div>
                {/* <div className="service-8">Book a Driver</div> */}
              </div>
            </div>
            <div className="column-2">
              <img loading="lazy" src={MotherImg} className="img" />
            </div>
          </div>
        </div>
        <div className="service-9">
          <div className="service-10">
            <div className="service-11">Current Service Status</div>
            <img loading="lazy" src={CurrentService} className="img-2" />
          </div>
        </div>
        <div className="service-12">
          <div className="service-13">How to Stay Updated</div>
          <div className="service-14">Notifications</div>
          <div className="service-15">
            Opt-in to receive notifications via email or mobile push
            notifications to stay informed about service status updates in
            real-time.
          </div>
          <div className="service-16">Service Alerts</div>
          <div className="service-17">
            Visit the Service Status page regularly for the latest updates on
            Voyago's services. We provide detailed information about service
            disruptions, performance improvements, and any other relevant
            announcements.
            <br />
          </div>{" "}
          <div className="service-18">Contact Support</div>{" "}
          <div className="service-19">Need Assistance?</div>{" "}
          <div className="service-20">
            If you encounter any issues or have questions about Voyago's
            services, our support team is here to help. Contact us via email,
            phone, or through the Voyago app for personalized assistance.
            <br />
          </div>
          <div className="service-21">Report an Issue</div>
          <div className="service-22">
            Help us improve by reporting any issues or feedback about Voyago's
            services. Your input is valuable in enhancing the overall experience
            for our passengers and drivers.
          </div>
        </div>
        <hr className="horizontal_line" />
        <br />
      </div>{" "}
      <Footer />
    </>
  );
}

export default ServiceStatus;
