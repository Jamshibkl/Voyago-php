import React from "react";
import "./LeagalPrivacy.css";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
function LeagalPrivacy() {
  return (
    <>
    <NavBar />
    <div className="main-container">
      <div className="inner-container">
        <h1>leagal and privacy</h1>
        <p className="para">
          Welcome to Voyago's Legal and Privacy page. We prioritize the
          protection of your data and transparency in our operations. Below,
          you'll find information on our legal policies, privacy practices, and
          terms of service.
        </p>
        <br />
        <h2 className="sec-heading">Privacy Policy</h2>
        <h3 className="therd-heading">Your Privacy Matters</h3>
        <p className="para">
          At Voyago, we are committed to protecting your privacy and
          safeguarding your personal information. Our Privacy Policy outlines
          how we collect, use, disclose, and protect your data when you use our
          services. We adhere to strict privacy standards to ensure the
          confidentiality and security of your information.
        </p>
        <br />
        <h3 className="therd-heading">Information We Collect</h3>
        <p className="para">
          We collect various types of information to provide and improve our
          services, including personal data such as your name, contact
          information, payment details, and location data. We use this
          information for purposes such as processing bookings, improving our
          services, and personalizing your experience.
        </p>
        <br />
        <h3 className="therd-heading">How We Use Your Information</h3>
        <p className="para">
          Your data is used to facilitate and enhance your experience with
          Voyago, including processing ride bookings, communicating with you,
          and optimizing our services. We may also use your information for
          marketing purposes or to comply with legal obligations.
        </p>
        <br />
        <h3 className="therd-heading">Data Security</h3>
        <p className="para">
          We employ industry-standard security measures to protect your data
          from unauthorized access, disclosure, alteration, or destruction. We
          continuously review and enhance our security practices to ensure the
          integrity and confidentiality of your information.
        </p>
        <br />
        <h2 className="sec-heading">Terms of Service</h2>
        <h3 className="therd-heading">Agreement to Terms</h3>
        <p className="para">
          By accessing or using Voyago's services, you agree to abide by our
          Terms of Service. These terms govern your use of our platform,
          including rights, responsibilities, and obligations.
        </p>
        <br />
        <h3 className="therd-heading">User Conduct</h3>
        <p className="para">
          We expect all users to conduct themselves in a respectful and lawful
          manner when using Voyago's services. Prohibited activities include
          violating laws, infringing on intellectual property rights, and
          engaging in fraudulent or harmful behavior.
        </p>
        <br />
        <h3 className="therd-heading">Limitation of Liability</h3>
        <p className="para">
          Voyago is not liable for any damages or losses resulting from the use
          of our services, including but not limited to direct, indirect,
          incidental, consequential, or punitive damages. Users assume all risks
          associated with their use of the platform.
        </p>
        <br />

        <h2 className="sec-heading">Contact Us</h2>
        <h3 className="therd-heading">Have Questions?</h3>
        <p className="para">
          If you have any questions or concerns about our legal and privacy
          policies, please don't hesitate to contact us. Our support team is
          available to assist you and address any inquiries you may have.
        </p>
        <br />
        <h3 className="therd-heading">Updates to Policies</h3>
        <p className="para">
          We may update our legal and privacy policies from time to time to
          reflect changes in our practices or legal requirements. We encourage
          you to review these policies periodically for any updates.
        </p>
        <br />
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default LeagalPrivacy;
