import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "./Home.scss";
import { getApicalling, postApicalling } from "../../Apicalling/api";
import { baseUrlPostGres } from "../../components/constant";
import LatestNews from "./LatestNews";
import Parser from "html-react-parser";
import { Skeleton } from "@mui/material";
const Analysis = () => {
  const [Apidata, setApidata] = useState();
  useEffect(() => {
    console.log(
      "apicalling",
      getApicalling("/training-analysis-list").then(
        (res) => res.status && setApidata(res.success)
      )
    );
  }, []);
  return (
    <>
    {Apidata ?
    <>
      <section className="dark-light-section" id="analysis">
        <div className="row m-0">
          <div className="col-md-6 bg-363636 d-flex p-0">
            <div className="client-sec">
              {Apidata ? (
                Parser(Apidata[0].left_section)
              ) : (
                <Skeleton
                  sx={{ bgcolor: "white" }}
                  variant="rectangular"
                  width="100%"
                  height={752}
                />
              )}
            </div>
          </div>
          <div className="col-md-6 bg-e6e6e5 d-flex p-0">
            <div className="analysis-sec section-title">
			{Apidata ? (
				<>
         <h3 className="dark-red-color">{Apidata && Apidata[0].tittle}</h3>
		  {Parser(Apidata[0].description)}
				</>
        ) : (
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width="100%"
            height={1012}
          />
        )}
             
            </div>
          </div>
        </div>
      </section>
      </>:<Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width="100%"
            height={695}
          />
        }
      
      {" "}
    </>
  );
};

export default Analysis;
