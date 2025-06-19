import React from "react";
import './timeline.css';

const Timeline = () => {
  return (
    <section className="modern-timeline">
      <h2 className="timeline-heading">Infologia Journey</h2>
      <div className="timeline-container">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2014 - 2017</h3>
            <h4>The Startup Stage</h4>
            <p>Infologia Technologies was established as a startup by young and creative developers focused on high-quality web development services.</p>
            <img src="/images/startup2.png" alt="Startup Stage" />
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2018 - 2019</h3>
            <h4>The Expansion Stage</h4>
            <p>Expanded into the Telecommunication and Automobile industries using Blockchain for secure solutions.</p>
            <img src="/images/startup.png" alt="Expansion Stage" />
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2020</h3>
            <h4>Privileged Collaborations</h4>
            <p>Partnered with Vishala Designs for the TNPSC portal, marking a prestigious state government collaboration.</p>
            <img src="/images/pcollab2.png" alt="Collaboration" />
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2020 - 2021</h3>
            <h4>Product Development</h4>
            <p>Launched products like HRMS, HMS, E-Magazine, and educational tools featuring cutting-edge technology.</p>
            <img src="/images/expansion.png" alt="Product Development" />
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2021</h3>
            <h4>Global Expansion</h4>
            <p>Built ERP and CRM tools for clients in Saudi Arabia and beyond, expanding global footprint.</p>
            <img src="/images/global.png" alt="Global" />
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2022</h3>
            <h4>Cargowise Partnership</h4>
            <p>Became Cargowise Service Partners with 5 certified experts to deliver advanced logistics software solutions.</p>
            <img src="/images/cargo2022.jpg" alt="Cargowise" />
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2022 - 2023</h3>
            <h4>Present & Beyond</h4>
            <p>Delivering comprehensive solutions in Track & Trace, API invoicing, and analytics for logistics and freight clients worldwide.</p>
            <img src="/images/logisticpresent.png" alt="Present" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
