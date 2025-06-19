import React from "react";
import './about.css';
import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const About = () => {
  return (
    <>
      {/* TOP SECTION */}
      <div className="about-container">
        <div className="about-content">
          {/* Left Section */}
          <div className="about-left">
            <div className="about-left-header">
              <div className="powered-by">Powered By:</div>
              <div className="logo-section">
                <img 
                  src="https://infologia.in/Template/images/logo/InfologiaLogo2.png" 
                  alt="Logo" 
                  className="logo-img"
                />
              </div>
            </div>

            <div className="about-text">
              <h1 className="logo-text">WORLDWIDE PARTNERS</h1>
              <h1 className="about-heading">Who we are</h1>
              <p className="about-description">
                Welcome to <span className="highlight">Infologia Technologies</span>, a leading software services company based in Chennai. With our expertise in comprehensive web and mobile application development, along with a wide range of IT solutions, we can digitally transform your business.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="about-right">
            <div className="image-wrapper">
              <img 
                src="https://infologia.in/Template/images/about/aboutimg1.jpg" 
                alt="About" 
                className="about-image" 
              />
              <div className="purple-dot"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="about-container">
        <div className="about-content">
          <div className="about-left">
            <div className="about-text">
              <h1 className="about-heading">Double your profits With Infologia.!</h1>
              <p className="about-description">
                Since 2014, Infologia Technologies has delivered innovative software solutions across industries like Telecom, Automobile, Education, Tourism, and Logistics. With 5 certified CargoWise professionals, we specialize in API integration, eAdaptor services, and implementation to streamline logistics operations. Committed to reliability and client satisfaction, we provide ongoing support and cutting-edge tech, making us a trusted partner in digital logistics transformation.
              </p>
            </div>
          </div>

          <div className="about-right">
            <div className="image-wrapper">
              <img 
                src="https://infologia.in/Template/images/about/aboutimg2.jpg" 
                alt="About" 
                className="about-image" 
              />
              <div className="purple-dot"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="modern-timeline">
        <h2 className="timeline-heading">Infologia Journey</h2>
        <div className="timeline-container">
          {[
            {
              year: "2014 - 2017",
              title: "The Startup Stage",
              desc: "Infologia Technologies was established as a startup by young and creative developers focused on high-quality web development services.",
              img: "/images/startup2.png"
            },
            {
              year: "2018 - 2019",
              title: "The Expansion Stage",
              desc: "Expanded into the Telecommunication and Automobile industries using Blockchain for secure solutions.",
              img: "/images/startup.png"
            },
            {
              year: "2020",
              title: "Privileged Collaborations",
              desc: "Partnered with Vishala Designs for the TNPSC portal, marking a prestigious state government collaboration.",
              img: "/images/pcollab2.png"
            },
            {
              year: "2020 - 2021",
              title: "Product Development",
              desc: "Launched products like HRMS, HMS, E-Magazine, and educational tools featuring cutting-edge technology.",
              img: "/images/expansion.png"
            },
            {
              year: "2021",
              title: "Global Expansion",
              desc: "Built ERP and CRM tools for clients in Saudi Arabia and beyond, expanding global footprint.",
              img: "/images/global.png"
            },
            {
              year: "2022",
              title: "Cargowise Partnership",
              desc: "Became Cargowise Service Partners with 5 certified experts to deliver advanced logistics software solutions.",
              img: "/images/cargo2022.jpg"
            },
            {
              year: "2022 - 2023",
              title: "Present & Beyond",
              desc: "Delivering comprehensive solutions in Track & Trace, API invoicing, and analytics for logistics and freight clients worldwide.",
              img: "/images/logisticpresent.png"
            },
          ].map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{item.year}</h3>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <img src={item.img} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <div className="about-container">
        <div className="about-content vertical">
          <h1 className="about-heading1">Meet <span className="heading-break-indent">The team</span></h1>
          <p className="about-description arrow-left">
            At Infologia Technologies, our team is made up of seasoned professionals who bring a wealth of experience and diverse specializations to the table. From developers to designers, each member contributes unique skills that complement one another, ensuring every project is approached with precision, innovation, and a shared passion for excellence. Together, we transform ideas into impactful digital solutions that drive real results.
          </p>
          <div className="image-wrapper-middle">
            <img 
              src="https://infologia.in/Template/images/about/teamimg.jpg" 
              alt="About Team" 
              className="about-image" 
            />
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <section className="partner-section">
        <div className="partner-heading">
          <h2>Our <span className="highlight">Clients</span></h2>
          <p>
            A true partnership is a two-way street — ideas and information flow openly,<br />
            built on mutual trust and shared goals.
          </p>
        </div>

        <div className="partner-logos">
          {[
            "My%20project-6.png", "My%20project-1.png", "My%20project-2.png", "haridaEyesample-removebg-preview.png",
            "My%20project-3.jpg", "candidhirelogo.jpg", "My%20project-4.png", "My%20project-8.png",
            "My%20project-9.png", "My%20project-12.png", "My%20project-13.png", "My%20project-5.png",
            "My%20project-11.png", "My%20project-15.png", "vento-logo.png", "icl-logo.png",
            "DAHNAY1.png", "skyb.png", "My%20project-10.png"
          ].map((file, i) => (
            <img
              key={i}
              src={`https://infologia.in/Template/images/images/${file}`}
              alt={`Client ${i + 1}`}
              className="partner-image"
            />
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-subscribe">
            <h2>Get the low<br />down on all<br />things ELEAT!</h2>
            <input type="email" placeholder="Email" />
            <button>SUBSCRIBE</button>
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked />
              I consent to ELEAT storing my information so that they may contact me in the future
            </label>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li>Shop</li>
              <li>Build a bundle</li>
              <li>Bimuno</li>
              <li>Blogs</li>
              <li>Student Discount</li>
              <li>Creator Programme</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Help</h4>
            <ul>
              <li>Store Locator</li>
              <li>Become a stockist</li>
              <li>FAQs</li>
              <li>Your Subscription</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li>Returns policy</li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedin />
              <FaYoutube />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 ELEAT</p>
          <p>Site by Tribe.studio</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/1%25_for_the_Planet_logo.svg/1024px-1%25_for_the_Planet_logo.svg.png"
            alt="1% For The Planet"
          />
        </div>
      </footer>
    </>
  );
};

export default About;
