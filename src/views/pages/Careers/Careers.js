import React, { useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "./Careers.scss";
import CareerBanner from "./CareerBanner";
import WorkWithUs from "./WorkWithUs";
import NOTICE from "./NOTICE";
import { useHistory } from "react-router-dom";
// import Iframe from 'react-iframe'
const Careers = () => {
  let history = useHistory();
  const Hello = () => {
    const element = document.getElementById("jobs");
    console.log("Sfsdfs", element);

    element.scrollIntoView();
    element.scrollIntoView(false);
    element.scrollIntoView({ block: "end" });
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };


  const QuotesArray = [
    {
      quotes: "Every accomplishment starts with the decision to try.",
      author: "John F. Kennedy",
    },
    {
      quotes:
        "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
      author: "Henry Ford",
    },
    {
      quotes:
        "It’s not the years in your life that count. It’s the life in your years. ",
      author: "Abraham Lincoln",
    },
    {
      quotes:
        "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
      author: "Thomas Edison",
    },
    {
      quotes:
        "A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.",
      author: "Winston Churchill",
    },
    {
      quotes: "You miss 100 percent of the shots you never take.",
      author: "Wayne Gretzky",
    },
    {
      quotes:
        "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
      author: "Sheryl Sandberg",
    },
  ];

  let obj = QuotesArray[Math.round(Math.random() * 7)];

  return (
    <>
      <CareerBanner Hello={Hello} />
      <WorkWithUs />

      <section className="cta-blue-design">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2>
               {obj.quotes}
              </h2>
              <p>–{obj.author}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="job-listing-section" id="jobs" style={{minHeight: 600}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2 className="Job-Listings">Job Listings</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="newton-iframeContainer">
                <iframe
                  id="lms_iframe"
                  src="https://aha-llc.com/careers.html"
                  height="500px"
                  width="100%"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NOTICE />
    </>
  );
};

export default Careers;
