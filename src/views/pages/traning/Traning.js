import React, { useEffect, useState } from "react";
import { postApicalling } from "../../Apicalling/api";
import "./Training.scss";
import Capabilities from "./Capabilities";
import Analysis from "./Analysis";
import Designs from "./Design";
import Experience from "./Experience";
import LatestNews from "./LatestNews";
import Minimizelogistical from "./_MinimizeLogistical";
import SupportServices from "./Conversion";
import Developments from "./Development";
import TrainingBanner from "./TrainingBanner";
import Conversion from "./Conversion";
import { Testimonials } from "../../components/Testimonials/Testimonials";
const Traning = () => {
  const [Apidata, setApidata] = useState();
  useEffect(() => {
    console.log(
      "apicalling",
      postApicalling("/comman-page/training").then(
        (res) => res.status && setApidata(res.success),
      ),
    );
  }, []);

  return (
    <>
      <TrainingBanner />
      <Capabilities />
      <Analysis />
      <Designs />
      <Developments />
      <Conversion />
        <Experience />
    
      <section className="contact-section">
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
      <Testimonials />
      {/* <LatestNews /> */}
    </>
  );
};

export default Traning;
