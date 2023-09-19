import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import { getApicalling, postApicalling } from "../../Apicalling/api";
import Parser from "html-react-parser";
import { baseUrlPostGres } from "../../components/constant";
import { Skeleton } from "@mui/material";
import { useLocation } from "react-router-dom";

const Analysis = () => {
  const location = useLocation();
  const [Apidata, setApidata] = useState();
  const [width, setWidth] = useState(0);
  
  const params1 = new URLSearchParams(location.search);
  const prams2 = params1.get("id");

  useEffect(() => {
    console.log(
      "apicalling",
      getApicalling("/service-capabilities").then(
        (res) => res.status && setApidata(res.success),
      ),
    );
  }, []);

  useEffect(() => {
    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, [width]);


  const handleClickScroll = () => {
    if (location) {
      const element = document.getElementById(prams2);
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
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
      <div className="row m-0">
        {Apidata ? (
          width >= 992 ? (
            <div className="col-lg-5 col-md-12 d-flex p-0">
              <div className="image-sec">
                <img
                  src={
                    Apidata &&
                    (Apidata[1].image == "" || Apidata[1].image == null
                      ? "/images/project-management.png"
                      : `${baseUrlPostGres()}/${Apidata[1].image}`)
                  }
                  alt="img"
                  className="img-fluid"
                />
              </div>
            </div>
          ) : null
        ) : (
          <Skeleton
            sx={{ bgcolor: "grey" }}
            variant="rectangular"
            width="100%"
            height={825}
          />
        )}

        <div className="col-lg-7 col-md-12 bg-e6e6e5 d-flex p-0">
          <div className="on-site-sec" id="subject-matter-expertise">
            <div className="section-title">
              <h3 className="blueColorHeading">
                {Apidata && Apidata[1].tittle}
              </h3>
            </div>
            {width <= 991 ? (
              <div className="image-sec">
                <img
                  src={
                    Apidata &&
                    (Apidata[1].image == "" || Apidata[1].image == null
                      ? "/images/project-management.png"
                      : `${baseUrlPostGres()}/${Apidata[1].image}`)
                  }
                  alt="img"
                  className="img-fluid"
                />
              </div>
            ) : null}
            <p>{Apidata && Parser(Apidata[1].description)}</p>
          </div>
        </div>
      </div>
      </>: 
        <Skeleton
          sx={{ bgcolor: "grey" }}
          variant="rectangular"
          width="100%"
          height={596}
        />
      }
    </>
  );
};

export default Analysis;
