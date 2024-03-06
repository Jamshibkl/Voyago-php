import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Step_1Img from "../../Assets/Sign up-rafiki.svg";
import PreferenceImg from "../../Assets/Preferences-rafiki.svg";
import WorkingRemoteImg from "../../Assets/Working remotely-rafiki.svg";
import DrirectionImg from "../../Assets/Directions-rafiki.svg";
import CarDrivingImg from "../../Assets/Car driving-rafiki (2).svg";
import RevenewBro from "../../Assets/Revenue-bro.svg";
import JoinCommunityImg from "../../Assets/Mobile login-pana.svg";
import ConformImg from "../../Assets/Confirmed-bro.svg";
import NavigateImg from "../../Assets/Navigation-rafiki.svg";
import OnlineRatingImg from "../../Assets/Online Review-rafiki.svg";
import AvatarImg from "../../Assets/Login-cuate.svg";
import Footer from "../../components/Footer/Footer";
import "./HowItWorks.css";
function HowItWorks() {
  return (
    <>
      <NavBar />
      <secction className="how_it_works">
        <div className="howitwork_headline">
          <h1 className="works_heading">Explore How Voyago Works</h1>
        </div>
        <p className="works_para">
          Welcome to Voyago, where simplicity meets efficiency. Navigating
          through our seamless ride-hailing process is a breeze. Whether you're
          a passenger or a skilled driver, Voyago ensures a hassle-free
          experience at every step.
        </p>
      </secction>
      <section className="passenger_section">
        <h2 className="passenger_headline">For Passengers</h2>
        <div className="passenger_working">
          <img src={Step_1Img} alt="" className="passenger_img" />
          <div className="line-divide">
            <div className="rectangle_div"></div>
            <div className="vertical_line"></div>
          </div>
          <div className="passenger_steps">
            <h4 className="passenger_step">Step 1</h4>
            <h2 className="steps_heading">Sign Up</h2>
            <p className="steps_para">
              Begin by signing up on the Voyago platform. Fill in your details,
              and you're ready to embark on a new era of travel.
            </p>
          </div>
        </div>
        <div className="passenger_working">
          <img src={PreferenceImg} alt="" className="passenger_img" />
          <div className="line-divide">
            <div className="rectangle_div"></div>
            <div className="vertical_line"></div>
          </div>
          <div className="passenger_steps">
            <h4 className="passenger_step">Step 2</h4>
            <h2 className="steps_heading">Set Your Preferences</h2>
            <p className="steps_para">
              Customize your ride experience by setting preferences such as car
              type, music, and temperature. Your comfort is our priority.
            </p>
          </div>
        </div>
        <div className="passenger_working">
          <img src={WorkingRemoteImg} alt="" className="passenger_img" />
          <div className="line-divide">
            <div className="rectangle_div"></div>
            <div className="vertical_line"></div>
          </div>
          <div className="passenger_steps">
            <h4 className="passenger_step">Step 3</h4>
            <h2 className="steps_heading">Book Your Ride</h2>
            <p className="steps_para">
              With a few taps on the Voyago app, you can request a ride. Watch
              as our skilled drivers respond promptly to your request.
            </p>
          </div>
        </div>
        <div className="passenger_working">
          <img src={DrirectionImg} alt="" className="passenger_img" />
          <div className="line-divide">
            <div className="rectangle_div"></div>
            <div className="vertical_line"></div>
          </div>
          <div className="passenger_steps">
            <h4 className="passenger_step">Step 4</h4>
            <h2 className="steps_heading">Track in Real Time</h2>
            <p className="steps_para">
              Sit back and relax as you track your driver's real-time location
              on the app. No more waiting in uncertainty.
            </p>
          </div>
        </div>
        <div className="passenger_working">
          <img src={CarDrivingImg} alt="" className="passenger_img" />
          <div className="line-divide">
            <div className="rectangle_div"></div>
            <div className="vertical_line"></div>
          </div>
          <div className="passenger_steps">
            <h4 className="passenger_step">Step 5</h4>
            <h2 className="steps_heading">Enjoy the Ride</h2>
            <p className="steps_para">
              Once your skilled driver arrives, hop in and enjoy a comfortable
              and secure journey. Payment is seamless through the app,
              eliminating the need for cash transactions.
            </p>
          </div>
        </div>
      </section>
      {/* driver section */}
      <section className="for_driver_section">
        <br />
        <h2 className="for_driver_headline">For Skilled Drivers</h2>
        <div className="for_driver_working">
          <div className="for_driver_steps">
            <h4 className="for_driver_step">Step 1</h4>
            <h2 className="for_driver_heading">Join the Community</h2>
            <p className="for_driver_para">
              Skilled drivers can easily join the Voyago community by signing
              up. Complete the registration process and become a valuable part
              of our team.
            </p>
          </div>
          <div className="for_line_divide">
            <div className="for_rectangle_div"></div>
            <div className="for_vertical_line"></div>
          </div>
          <img src={JoinCommunityImg} alt="" className="for_driver_img" />
        </div>
        <div className="for_driver_working">
          <div className="for_driver_steps">
            <h4 className="for_driver_step">Step 2</h4>
            <h2 className="for_driver_heading">Accept Ride Requests</h2>
            <p className="for_driver_para">
              As a skilled driver, you have the flexibility to accept ride
              requests that match your availability. It's about driving on your
              terms.
            </p>
          </div>
          <div className="for_line_divide">
            <div className="for_rectangle_div"></div>
            <div className="for_vertical_line"></div>
          </div>
          <img src={ConformImg} alt="" className="for_driver_img" />
        </div>
        <div className="for_driver_working">
          <div className="for_driver_steps">
            <h4 className="for_driver_step">Step 3</h4>
            <h2 className="for_driver_heading">Navigate with Ease</h2>
            <p className="for_driver_para">
              Utilize our user-friendly navigation system to reach your
              passengers efficiently. Voyago ensures smooth routes and optimal
              travel experiences.
            </p>
          </div>
          <div className="for_line_divide">
            <div className="for_rectangle_div"></div>
            <div className="for_vertical_line"></div>
          </div>
          <img src={NavigateImg} alt="" className="for_driver_img" />
        </div>
        <div className="for_driver_working">
          <div className="for_driver_steps">
            <h4 className="for_driver_step">Step 4</h4>
            <h2 className="for_driver_heading">Enhanced Earnings</h2>
            <p className="for_driver_para">
              Benefit from competitive earnings, transparent fare structures,
              and timely payments. Voyago values the skills and dedication of
              our drivers.
            </p>
          </div>
          <div className="for_line_divide">
            <div className="for_rectangle_div"></div>
            <div className="for_vertical_line"></div>
          </div>
          <img src={RevenewBro} alt="" className="for_driver_img" />
        </div>
        <div className="for_driver_working">
          <div className="for_driver_steps">
            <h4 className="for_driver_step">Step 5</h4>
            <h2 className="for_driver_heading">Build Positive Ratings</h2>
            <p className="for_driver_para">
              Every journey is an opportunity to build positive ratings. Your
              professionalism and commitment contribute to the Voyago
              community's success.
            </p>
          </div>
          <div className="for_line_divide">
            <div className="for_rectangle_div"></div>
            <div className="for_vertical_line"></div>
          </div>
          <img src={OnlineRatingImg} alt="" className="for_driver_img" />
        </div>
      </section>
      <div className="banner_work">
        <div className="banner_work_sub">
          <div className="banner_work_signup">Sign up today</div>
          <div className="banner_work_para">
            Ready to experience Voyago for yourself? Take your first trip as a
            rider, or get on the road to earning as a driver.
          </div>
          <div className="banner_work_btn">
            <button className="banner_work_ride">Sign up to ride</button>
            <button className="banner_work_drive">Sign up to drive</button>
          </div>
        </div>
      </div>
      <div className="ready-50">
        <div className="ready-51">
          <div className="ready-52">
            <img src={AvatarImg} className="ready-13" />
          </div>
          <div className="ready-54">
            <div className="ready-55">
              Ready to experience the future of travel?
            </div>
            <div className="ready-56">
              Join us in revolutionizing the way we travel. Whether you're a
              passenger seeking convenience or a skilled driver looking for
              flexibility, Voyago is your partner in creating a better travel
              experience.
            </div>
            <button className="ready-57">Let's get started!</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HowItWorks;
