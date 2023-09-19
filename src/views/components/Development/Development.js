import React, { useEffect, useState } from "react";
import { getApicalling } from "../../Apicalling/api";
import { baseUrlPostGres } from "../constant";
import "./Development.scss";
import Parser from "html-react-parser";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import { Skeleton } from "@mui/material";
import { useParams ,useLocation } from "react-router-dom";
export const Development = () => {
  const [ApidataSecSection, setApidataSecSection] = useState();
  const {id}=useParams();


  // useEffect(() => {
  //   const handleClickScroll = () => {
  //     const element = document.getElementById("development-section");
  //     if (element) {
  //       // 👇 Will scroll smoothly to the top of the next section
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };
  //   if(ApidataSecSection){
  //     setTimeout(() => {
  //       handleClickScroll();
  //     }, 500);
  //   }
  // }, [ApidataSecSection]);


  const options = {
    items: 2,
    margin: 0,
    loop: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 20000000,
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      580: {
        items: 2,
      },
      992: {
        items: 2,
      },
    },
  };
  useEffect(() => {
  
    setCurrentIndex(Number(id))
    console.log(
      "apicalling",
      getApicalling("training-development-list").then(
        (res) => res.status && setApidataSecSection(res.success)
      )
    );
  }, [id]);

  const [currentIndex, setCurrentIndex] = useState();

  const location = useLocation();

  const onClick = (id) => {
    if (currentIndex === id) {
      setCurrentIndex();
    } else {
      setCurrentIndex(id);
    }
  };

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, [width]);



  useEffect(() => {
    const handleClickScroll = () => {
      if (location) {
        const params1 = new URLSearchParams(window.location.search);
        const prams2 = params1.get("id")
        console.log("handleClick scroll", params1, params1.get("id"));
        const element = document.getElementById(prams2);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: "smooth" });     
        }
      }
     
    };
    if (ApidataSecSection) {
      setTimeout(() => {
        handleClickScroll();
      }, 600);
    }
  }, [ApidataSecSection]);


  return (
    <>
      <div className="row" id="development-section">
        {width >= 992 ? (
          ApidataSecSection ? (
            ApidataSecSection.map((ele, i) => {
              return (
                <>
                  <div className="col-lg-4 d-flex p-0" >
                    <div
                      className={
                        currentIndex === i
                          ? "development-core-bx w-100 active"
                          : "development-core-bx w-100"
                      }
                    >
                      <div className="development-image-bx">
                        <img
                          src={
                            ele &&
                            (ele.image == "" || ele.image == null
                              ? "/images/IFIT_1.png"
                              : `${baseUrlPostGres()}/${ele.image}`)
                          }
                          alt="Banner"
                          className="img-fluid"
                        />
                      </div>
                      <div className="development-content" id={i+1}>
                        <h3>{ele.tittle}</h3>
                        <div className="arrow-top" onClick={() => onClick(i)}>
                          <img
                            src="/images/arrow-top.svg"
                            alt="Arrow Top"
                            className="img-fluid"
                          />
                        </div>

                        {Parser(ele.description)}
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <>
              <div className="col-lg-4 d-flex p-0">
                <Skeleton
                  sx={{ bgcolor: "grey.900" }}
                  variant="rectangular"
                  width="100%"
                  height={420}
                />
              </div>
              <div className="col-lg-4 d-flex p-0">
                <Skeleton
                  sx={{ bgcolor: "grey" }}
                  variant="rectangular"
                  width="100%"
                  height={420}
                />
              </div>
              <div className="col-lg-4 d-flex p-0">
                <Skeleton
                  sx={{ bgcolor: "grey.900" }}
                  variant="rectangular"
                  width="100%"
                  height={420}
                />
              </div>
              <div className="col-lg-4 d-flex p-0">
                <Skeleton
                  sx={{ bgcolor: "grey" }}
                  variant="rectangular"
                  width="100%"
                  height={420}
                />
              </div>
              <div className="col-lg-4 d-flex p-0">
                <Skeleton
                  sx={{ bgcolor: "grey.900" }}
                  variant="rectangular"
                  width="100%"
                  height={420}
                />
              </div>
              <div className="col-lg-4 d-flex p-0">
                <Skeleton
                  sx={{ bgcolor: "grey" }}
                  variant="rectangular"
                  width="100%"
                  height={420}
                />
              </div>
              <div className="col-lg-4 d-flex p-0">
                <Skeleton
                  sx={{ bgcolor: "grey.900" }}
                  variant="rectangular"
                  width="100%"
                  height={420}
                />
              </div>
              <div className="col-lg-4 d-flex p-0">
                <Skeleton
                  sx={{ bgcolor: "grey" }}
                  variant="rectangular"
                  width="100%"
                  height={420}
                />
              </div>
              <div className="col-lg-4 d-flex p-0">
                <Skeleton
                  sx={{ bgcolor: "grey.900" }}
                  variant="rectangular"
                  width="100%"
                  height={420}
                />
              </div>
            </>
          )
        ) : width < 991 ? (
          <OwlCarousel {...options} className="training-development-slider" id="development-section">
            {ApidataSecSection ? (
              ApidataSecSection.map((ele, i) => {
                return (
                  <>
                    <div
                      className={
                        currentIndex === i
                          ? "development-core-bx w-100 active"
                          : "development-core-bx w-100"
                      }
                    >
                      <div className="development-image-bx">
                        <img
                          src={
                            ele &&
                            (ele.image == "" || ele.image == null
                              ? "/images/IFIT_1.png"
                              : `${baseUrlPostGres()}/${ele.image}`)
                          }
                          alt="Banner"
                          className="img-fluid"
                        />
                      </div>
                      <div className="development-content">
                        <h3>{ele.tittle}</h3>
                        <div className="arrow-top" onClick={() => onClick(i)}>
                          <img
                            src="/images/arrow-top.svg"
                            alt="Arrow Top"
                            className="img-fluid"
                          />
                        </div>
                        {Parser(ele.description)}
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <>
                <div className="col-lg-4 d-flex p-0">
                  <Skeleton
                    sx={{ bgcolor: "grey.900" }}
                    variant="rectangular"
                    width="100%"
                    height={420}
                  />
                </div>
                <div className="col-lg-4 d-flex p-0">
                  <Skeleton
                    sx={{ bgcolor: "grey" }}
                    variant="rectangular"
                    width="100%"
                    height={420}
                  />
                </div>
                <div className="col-lg-4 d-flex p-0">
                  <Skeleton
                    sx={{ bgcolor: "grey.900" }}
                    variant="rectangular"
                    width="100%"
                    height={420}
                  />
                </div>
                <div className="col-lg-4 d-flex p-0">
                  <Skeleton
                    sx={{ bgcolor: "grey" }}
                    variant="rectangular"
                    width="100%"
                    height={420}
                  />
                </div>
                <div className="col-lg-4 d-flex p-0">
                  <Skeleton
                    sx={{ bgcolor: "grey.900" }}
                    variant="rectangular"
                    width="100%"
                    height={420}
                  />
                </div>
                <div className="col-lg-4 d-flex p-0">
                  <Skeleton
                    sx={{ bgcolor: "grey" }}
                    variant="rectangular"
                    width="100%"
                    height={420}
                  />
                </div>
                <div className="col-lg-4 d-flex p-0">
                  <Skeleton
                    sx={{ bgcolor: "grey.900" }}
                    variant="rectangular"
                    width="100%"
                    height={420}
                  />
                </div>
                <div className="col-lg-4 d-flex p-0">
                  <Skeleton
                    sx={{ bgcolor: "grey" }}
                    variant="rectangular"
                    width="100%"
                    height={420}
                  />
                </div>
                <div className="col-lg-4 d-flex p-0">
                  <Skeleton
                    sx={{ bgcolor: "grey.900" }}
                    variant="rectangular"
                    width="100%"
                    height={420}
                  />
                </div>
              </>
            )}
          </OwlCarousel>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Development;
