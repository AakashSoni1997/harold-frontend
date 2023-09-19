import React, { useEffect, useState } from "react";
import "./Services.scss";
import { Nav, Tab, TabContainer } from "react-bootstrap";

import InformationTechnology from "../../components/InformationTechnologyServicesPage/InformationTechnologyServicesPage";
import ExperienceServices from "../../components/ExperienceServices/ExperienceServices";
import { TestimonialServices } from "../../components/Testimonials/Testimonials";
import { RiArrowDownSLine } from "react-icons/ri";

const ServiceBanner = React.lazy(() => import("./ServiceBanner"));
const Capabilities = React.lazy(() => import("../Services/Capabilities"));
const Analysis = React.lazy(() => import("./Analysis"));
const ServiceInstructional = React.lazy(() => import("./ServiceInstructional"));
const ServiceAdministrative = React.lazy(() =>import("./ServiceAdministrative"));
const Conversion = React.lazy(() => import("./Conversion"));
const Experience = React.lazy(() => import("./Experience"));
const Services = () => {

  const [currentIndex, setCurrentIndex] = useState();
  const onClick = (id) => {
    if (currentIndex === id) {
      setCurrentIndex();
    } else {
      setCurrentIndex(id);
    }
  };

  useEffect(()=>{

  },[])

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, [width]);
  return (
    <>
      <ServiceBanner  />
      <section className="capabilities-services-section" id="pm-support">
        <Capabilities />
      </section>
      <div className="top-go" id="onsite-smes"></div>
      <section className="on-site-section">
        <Analysis />
      </section>
      <section className="services-design-section" id="instructional-services">
        <ServiceInstructional />
      </section>
      <section id="administriave-management">
        <ServiceAdministrative />
      </section>
      <Conversion />
      <Experience />

      <section className="services-contact-section" id="training">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>WE WANT TO WORK WITH YOU</h3>
              <a href="/contact" className="btn-outline">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <TestimonialServices />
    </>
  );
};

export default Services;
