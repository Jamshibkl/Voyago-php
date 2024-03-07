import React from "react";
import { Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { NavLink,useNavigate  } from "react-router-dom";
import CarAnimate from "../../Assets/Car driving-rafiki (2).svg";
import Feature from "../../components/Features/Feature";
import HomeBanner from "../../components/banner/HomeBanner";
import Review from "../../components/Review/Review";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
// import NavBar from "../../components/NavBar/NavBar";

function Home() {
  // const navigate = useNavigate(); // Utilize useNavigate hook

  // const handleButtonClick = () => {
  //   // Implement your authentication check logic here
  //   const isLoggedIn = false; // Replace with your actual authentication logic

  //   if (isLoggedIn) {
  //     navigate("/book-a-driver"); // Navigate to booking page only if logged in
  //   } else {
  //     // Redirect to login page or display appropriate message
  //     // Implement your preferred behavior for non-logged-in users
  //   }
  // };

  // const user = localStorage.getItem('user');
  
  return (
    <>
      {/* Header */}
      {/* <NavBar/> */}
      <Navbar collapseOnSelect expand="lg" className="" id="nav-bar-section">
        <Container className="nav_container">
          <Navbar.Brand className="logo" as={NavLink} to="/">
            VOYAGO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav_links">
              <Nav.Link as={NavLink} to="/" className="nav-link-with-space">
                Home
              </Nav.Link>
              <NavDropdown
                title="Company"
                id="collapsible-nav-dropdown"
                className="dropdown-btn"
              >
                <NavDropdown.Item
                  as={NavLink}
                  to="/about-us"
                  className="dropdown-items"
                >
                  About us
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/how-it-works"
                  className="dropdown-items"
                >
                  How it Works
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/our-team"
                  className="dropdown-items"
                >
                  Our Team
                </NavDropdown.Item>
                <NavDropdown.Item
                as={NavLink}
                to="/become-a-driver"
                className="dropdown-items"
              >
                Become a Driver
              </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/admin"
                  className="dropdown-items"
                >
                   Admin
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/service-status"
                className="dropdown-items"
              >
                  Service Status
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/legal"
                  className="dropdown-items"
                >
                  Legal and Privacy
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to="/book-a-driver"
                  className="dropdown-items"
                >
                  Book a Driver
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/safety" className="nav-link-with-space">
                Safety
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="nav-link-with-space">
                Contact
              </Nav.Link>
            </Nav>

            <Nav className="ms-auto">
              <Nav.Link
                as={NavLink}
                to="/login"
                className="nav-link-with-space text-light "
              > 
              Login
                {/* {user} */}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Header section */}

      {/* Main  section */}
      <section className="main_section">
        <div className="main_left">
          <h1 className="heading">
            {" "}
            Get Skillful Drivers,
            <br />
            On-Demand
          </h1>
          <p>
            Voyago transforms the way you travel. Bringing skillful drivers to
            your doorstep, we make owning a car a pleasure.
          </p>
          <NavLink to='/book-a-driver'>
          <button className="main_btn" >
      Book a Driver
    </button>
          </NavLink>
        </div>
        <div className="main-right">
          <div className="main_container">
            <img src={CarAnimate} alt="" className="car_avtar" />
          </div>
        </div>
      </section>
      {/* feture section */}
      <section className="feature_section">
        <div className="feature_content">
          <h1 className="feature_heading">Features</h1>
          <h1 className="feature_sub_heading">
            Experience the Benefits of Voyago
          </h1>
          <p>
            Discover the features that make Voyago the perfect choice for
            personalized transportation
          </p>
        </div>
        <Feature />
      </section>
      {/* Banner section */}
      <section className="banner_section">
        <HomeBanner />
      </section>
      {/* Review Section */}
      <section className="feedback_section">
        <h2 className="feedback_heading">What Our Users Are Saying</h2>
        <Review />
      </section>
      <section className="Faq_section">
        <h2 className="Faq_heading">Quick Answers to Common Questions</h2>
        <div className="faq_container">
          <FAQ />
        </div>
      </section>
      <section className="footer_section">
        <Footer />
      </section>
    </>
  );
}

export default Home;
