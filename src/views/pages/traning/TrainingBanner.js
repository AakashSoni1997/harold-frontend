import React, { useEffect, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import { getApicalling, postApicalling } from "../../Apicalling/api";
import { baseUrlPostGres } from "../../components/constant";
import { Skeleton } from "@mui/material";
const TrainingBanner = () => {
  const [Apidata, setApidata] = useState();
  useEffect(() => {
    console.log(
      "apicalling",
      getApicalling("header-common-list/training").then(
        (res) => res.status && setApidata(res.success)
      )
    );
  }, []);
  console.log("Apidata432",Apidata);
  return (
    <>
      <section className="banner-section">
        {Apidata ? (
          <img
            src={
              Apidata.image == ""
                ? "/images/about-banner.jpg"
                : `${baseUrlPostGres()}/${Apidata.image}`
            }
            alt="Banner"
            className="img-fluid"
          />
        ) : (
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width="100%"
            height={800}
          />
        )}
        {Apidata ? (
          <h1>{Apidata.page_name}</h1>
        ) : (
          ""
          //   <Skeleton
          //     sx={{ bgcolor: "grey.900" }}
          //     variant="rectangular"
          //     width={210}
          //     height={118}
          //   />
        )}
      </section>
      <section className="repeat-section welcome-section-home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11">
              <div className="section-title">
                {Apidata ? (
                  <p>{Apidata.description}</p>
                ) : (
                  <Skeleton
                    sx={{ bgcolor: "grey.900" }}
                    variant="rectangular"
                    width="100%"
                    height={788}
                  />
                )}

                <div className="text-center mt-7">
                  <a
                    href="/pdf/2Pager_Training_2022-11-17.pdf"
                    className="btn-outline"
                    target="_blank"
                  >
                    VIEW OUR TRAINING DOCUMENT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainingBanner;
