import React, { useEffect, useState } from "react";
import "./Testimonials.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import { getApicalling } from "../../Apicalling/api";
import { baseUrlPostGres } from "../constant";
import { Skeleton } from "@mui/material";
export const Testimonials = () => {
  const [Apidata, setApidata] = useState();
  useEffect(() => {
    console.log(
      "apicalling",
      getApicalling("training-testimonials").then(
        (res) => res.status && setApidata(res.success)
      )
    );
  }, []);

  const options = {
    items: 1,
    margin: 0,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    lazyLoad: true,
    autoplaySpeed: 2000,
    nav: true,
    dots: false,
  };
  return (
    <>
    {Apidata ? 
    <>
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
          </div>
          {Apidata && (
            <OwlCarousel {...options} className="testimonial-slider">
              {console.log(Apidata, "ApidataApidataApidata")}
              {Apidata &&
                Apidata.map((ele, i) => {
                  return (
                    <>
                      <div className="item">
                        <div className="testimonials-bx row align-items-center">
                          <div className="col-md-12">
                            <p>{ele.description}</p>
                            <span className="client-name">
                              - {ele.client_name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </OwlCarousel>
          )}
        </div>
      </section>
      </>:<Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width="100%"
            height={545}
          />
    }
    </>
  );
};

export const TestimonialServices = () => {
  const options = {
    items: 1,
    margin: 0,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    lazyLoad: true,
    autoplaySpeed: 2000,
    nav: true,
    dots: false,
  };
  const [Apidata, setApidata] = useState();
  useEffect(() => {
    console.log(
      "apicalling",
      getApicalling("service-testimonials").then(
        (res) => res.status && setApidata(res.success)
      )
    );
  }, []);
  return (
    <>
     {Apidata ? 
    <>
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
          </div>
          {Apidata && (
            <OwlCarousel {...options} className="testimonial-slider">
              {Apidata &&
                Apidata.map((ele, i) => {
                  return (
                    <>
                      <div className="item">
                        <div className="testimonials-bx row align-items-center">
                          <p>{ele.description}</p>
                          <span className="client-name">
                            - {ele.client_name}
                          </span>
                        </div>
                      </div>
                    </>
                  );
                })}
            </OwlCarousel>
          )}
        </div>
      </section>
      </>:<Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width="100%"
            height={545}
          />
    }
    </>
  );
};
