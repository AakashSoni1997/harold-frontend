import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "./Home.scss";
import { getApicalling, postApicalling } from "../../Apicalling/api";
import { baseUrlPostGres } from "../../components/constant";
import LatestNews from "./LatestNews";
import Development from "../../components/Development/Development";
import { Skeleton } from "@mui/material";
const Developments = () => {
  const [Apidata, setApidata] = useState();

  useEffect(() => {
    console.log(
      "apicalling",
      getApicalling("training-design-list").then(
        (res) => res.status && setApidata(res.success)
      )
    );
  }, []);
  
  return (
    <>
     {Apidata ?
    <>
      <section className="development-section" id="development">
        <div className="container">
          <div className="section-title">
            <h2 className="dark-red-color">Development</h2>
            <p>
              AHA’s innovative courseware team, which includes PhD-level 
              {/* instructional systems designers  */} ISDs
              and a comprehensive creative team,
              efficiently develops cutting-edge training catered to our client’s
              needs.
            </p>
          </div>
        </div>
      </section>
      <div className="container-fluid">
        <Development />
      </div>
      </>:<Skeleton
					 sx={{ bgcolor: "white" }}
					 variant="rectangular"
					 width="100%"
					 height={1560}
				   />
    }
    </>
  );
};

export default Developments;
