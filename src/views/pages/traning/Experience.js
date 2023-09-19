import React, { useEffect, useRef, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "./Home.scss";
import { getApicalling } from "../../Apicalling/api";
import ExperienceTraining from "../../components/ExperienceTraining/ExperienceTraining";
import { RiArrowDownSLine } from "react-icons/ri";
import { baseUrlPostGres } from "../../components/constant";
import ExperienceLogistics from "../../components/ExperienceLogistics/ExperienceLogistics";
import { Skeleton } from "@mui/material";
import { useLocation } from "react-router-dom";
const Experience = () => {
  const [Apidata, setApidata] = useState();

  const location = useLocation();

  useEffect(() => {
    console.log(
      "apicalling",
      getApicalling("/training-experience").then(
        (res) => res.status && setApidata(res.success),
      ),
    );
  }, []);

  const [currentIndex, setCurrentIndex] = useState();
  const onClick = (id) => {
    if (currentIndex === id) {
      setCurrentIndex();
    } else {
      setCurrentIndex(id);
    }
  };

  useEffect(() => {
    const handleClickScroll = () => {
      if (location) {
        const params1 = new URLSearchParams(window.location.search);
        const prams2 = params1.get("id")
        // console.log("Fsdfsdfsfsdfs" , params1.get("id"));
        const element = document.getElementById(prams2);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
     
    };
    if (Apidata) {
      setTimeout(() => {
        handleClickScroll();
      }, 500);
    }
  }, [Apidata]);

  return (
    <>
      {Apidata ?
    <>
      <section className="experience-section training-page-experience" id="experience">
        <div className="container-fluid" id="viraj">
          <div className="section-title">
            <h2>EXPERIENCE</h2>
          </div>
          <div className="row">
            {Apidata ? (
              Apidata.map((ele, i) => {
                return (
                  <>
                    {i < 6 ? (
                      <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                        <ExperienceLogistics
                        location={location.pathname}
                          ImageUrl={
                            ele.image == "" || ele.image == null
                              ? "/images/Design_5.png"
                              : `${baseUrlPostGres()}/${ele.image}`
                          }
                          ExperienceTitle={ele.tittle}
                          ExperienceDescripition={ele.description}
                          ExperienceFooter={ele.total_value}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                );
              })
            ) : (
              <>
                <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                  <Skeleton
                    sx={{ bgcolor: "grey.900" }}
                    variant="rectangular"
                    width="100%"
                    height={598}
                  />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                  <Skeleton
                    sx={{ bgcolor: "grey.900" }}
                    variant="rectangular"
                    width="100%"
                    height={598}
                  />
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                  <Skeleton
                    sx={{ bgcolor: "grey.900" }}
                    variant="rectangular"
                    width="100%"
                    height={598}
                  />
                </div>
              </>
            )}
          </div>
          <div
            className={
              currentIndex === 1 ? "row show-experience" : "row hide-experience"
            }
          >
            {Apidata &&
              Apidata.map((ele, i) => {
                return (
                  <>
                    {i > 5 ? (
                      <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                        <ExperienceLogistics
                        location={location.pathname}
                          ImageUrl={
                            ele.image == "" || ele.image == null
                              ? "/images/Design_5.png"
                              : `${baseUrlPostGres()}/${ele.image}`
                          }
                          ExperienceTitle={ele.tittle}
                          ExperienceDescripition={ele.description}
                          ExperienceFooter={ele.total_value}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="see-more-experience">
                <a
                  className={
                    currentIndex === 1
                      ? "btn-outline with-arrow-down active"
                      : "btn-outline with-arrow-down"
                  }
                  onClick={() => onClick(1)}
                >
                  {currentIndex == 1 ? "See Less" : "See More"}
                  <RiArrowDownSLine />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>:<Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width="100%"
          height={1527}
        />
      }
    </>
  );
};

export default Experience;
