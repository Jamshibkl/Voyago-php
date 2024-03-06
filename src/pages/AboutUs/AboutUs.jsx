import React from "react";
import "./AboutUs.css";
import AboutImg from "../../Assets/about-banner-img.jpg";
import img1 from "../../Assets/photo_2024-02-06_13-13-44.jpg";
import img2 from "../../Assets/photo_2024-02-06_13-13-53.jpg";
import img3 from "../../Assets/photo_2024-02-06_13-13-32.jpg";
import driver from "../../Assets/horizontal-banner-img.jpg";
import innovation from "../../Assets/Innovation-bro.svg";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
function AboutUs() {
  return (
    <>
    <NavBar />
    <div className="aboutSection">
      <img src={AboutImg} alt="Banner-img"  style={{width:"100%"}}/>

      <div className="aboutUs">
        <h1 className="heading">About Us</h1>

        <p className="about-Para">
          Welcome to Voyago, where every journey is an experience crafted with
          care and innovation. Our story begins with a passion for transforming
          the way people travel, inspired by a simple yet powerful idea – to
          provide more than just rides, but a seamless and memorable
          transportation experience
        </p>

        <div className="ourStory">
          <h4>Discover Our Story</h4>
          <hr />
        </div>

        <div className="content">
          <div className="content-Image">
            <img src={img1} alt="" className="img-about"/>
          </div>
          <div className="content-Container">
            <h2>
              Empowering Journeys, Redefining Travel: Our Mission at Voyago
            </h2>
            <p className="content-para">
              At Voyago, our mission is clear and resolute - to revolutionize
              the transportation experience by providing reliable and innovative
              solutions that transcend conventional norms. We are committed to
              redefining the very essence of travel, ensuring that each journey
              becomes a seamless blend of comfort, safety, and cutting-edge
              technology. Our purpose goes beyond merely moving from one point
              to another; it encompasses a dedication to crafting experiences
              that leave a lasting impression. By merging skilled drivers with
              state-of-the-art technology, we aspire to set new benchmarks in
              the industry. Voyago is not just a transportation service; it's a
              commitment to creating a world where every journey is an
              adventure, and every ride is an exploration of excellence.
            </p>
          </div>
        </div>

        <div className="content">
          <div className="content-Container">
            <h2>
              Beyond Boundaries: Voyago's Commitment to Safety, Transparency,
              and Innovative Excellence
            </h2>
            <p className="content-para">
              Embark on a journey guided by Voyago's core values, where safety
              takes precedence in every step, ensuring a secure and protected
              travel experience. Transparency is woven into the fabric of our
              operations, fostering trust through clear communication on fares
              and service details. At the heart of our commitment lies the
              unwavering dedication to customer satisfaction, shaping decisions
              and innovations to surpass expectations. Voyago thrives on
              continuous innovation, leveraging cutting-edge technology to
              redefine the travel landscape. Recognizing our environmental
              impact, we embrace sustainability, striving to minimize our
              ecological footprint. Join us on this transformative voyage, where
              our values of safety, transparency, customer satisfaction,
              innovation, and environmental responsibility converge to create an
              unparalleled and conscientious travel experience.
            </p>
          </div>
          <div className="content-Image">
            <img src={img2} alt="" className="img-about"/>
          </div>
        </div>

        <div className="content">
          <div className="content-Image">
            <img src={img3} alt="" className="img-about"/>
          </div>
          <div className="content-Container">
            <h2>
              Pioneering Excellence: Meet the Innovators Steering Voyago's
              Vision
            </h2>
            <p className="content-para">
              Embark on a journey with the dedicated minds of Voyago's team,
              where visionaries Sarah and Michael, as co-founders, lead with
              strategic insight and technological prowess. Sarah's expertise in
              transportation and Michael's innovative approach drive Voyago's
              mission to redefine travel. Emily, the Customer Experience
              Specialist, ensures delightful interactions, understanding unique
              passenger needs. David, our Skilled Driver Liaison, fosters
              professionalism and service excellence. Sustainability Advocate
              Sophia leads initiatives to minimize our ecological footprint.
              Together, this dynamic team forms the backbone of Voyago,
              embodying passion, dedication, and a commitment to innovation and
              excellence in every aspect of the travel experience.
            </p>
          </div>
        </div>
      </div>


      <div className="driver ">
        <img src={driver} alt="" className="driver-img" />

        <div className="driver-content">
          <div className="join-Us ">
            <h3 className="join-Us-h3">
              Join us on a journey where the expertise and professionalism of
              Voyago's skilled drivers ensure that every ride is not just a
              destination but a testament to our commitment to excellence.
            </h3>
          </div>
          <div className="skilled-driver">
            <h3 className="skilled_driver_h3">Skilled Drivers:</h3>
            <p className="skilled_driver_para">
              At Voyago, we take pride in our skilled drivers who form the
              heartbeat of our commitment to safe and reliable transportation.
              Each driver undergoes rigorous training and possesses relevant
              qualifications to ensure a journey that is not only comfortable
              but also exemplifies the highest standards of professionalism.
            </p>
          </div>
        </div>
      </div>
      <div className="commitment-container">
        <div className="commitment">
          <h1>
            Envisioning Tomorrow: Voyago's Forward-Looking Commitment to
            Innovative Travel Experiences
          </h1>
          <div className="info-container">
            <div className="commitment-info">
              <p>
                Voyago envisions a future where transportation is seamlessly
                woven into the fabric of enriched experiences. Our commitment to
                innovation propels us forward, with a vision of advancing
                technological frontiers to introduce cutting-edge features and
                enhancements, making every journey exceptional. We aim to expand
                our reach, ensuring reliable transportation is accessible to a
                broader audience, while sustaining our commitment to
                eco-friendly practices. Our future goals center on
                customer-centric innovation, anticipating and meeting evolving
                needs. Voyago aspires to establish a global presence and form
                strategic partnerships, transcending geographical boundaries.
                Join us on this exciting journey into the future, where Voyago
                is set to redefine travel, introduce groundbreaking innovations,
                and continue setting new standards for excellence.
              </p>
            </div>
            <div className="commitment-img">
              <img src={innovation} alt="" className="img-about"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default AboutUs;
