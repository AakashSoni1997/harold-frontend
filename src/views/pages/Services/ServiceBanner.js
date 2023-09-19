import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import { getApicalling, postApicalling } from "../../Apicalling/api";
import { baseUrlPostGres } from "../../components/constant";
import moment from "moment";
import { Skeleton } from "@mui/material";

const ServiceBanner = () => {
  const [Apidata, setApidata] = useState();
  useEffect(() => {
    console.log(
      "apicalling",
      getApicalling("header-common-list/services").then(
        (res) => res.status && setApidata(res.success),
      ),
    );
    // console.log("apicalling", getApicalling("comman-page/").then(res => res.status && setApidata(res.success)))
  }, []);
  return (
    <>
    {Apidata ?
      <>
      <section className="banner-section">
        {Apidata ? (
          <>
            <img
              src={
                Apidata &&
                (Apidata.image == "" || Apidata.image == null
                  ? "/images/about-banner.jpg"
                  : `${baseUrlPostGres()}/${Apidata.image}`)
              }
              alt="Banner"
              className="img-fluid"
            />
            <h1> {Apidata && Apidata.page_name}</h1>
          </>
        ) : (
          "asdf"
        )}
      </section>
      </>: <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="rectangular"
            width="100%"
            height={800}
          />
        }
      {Apidata ?
      <>
      <section className="repeat-section welcome-section-services" id="services-training">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <p className="mb-5">{Apidata && Apidata.description} </p>
                <div className="text-center mt-7">
                  <a
                    href="/pdf/2Pager_Services_2022-11-18.pdf"
                    className="btn-outline"
                    target="_blank"
                  >
                    VIEW OUR SERVICES DOCUMENT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>: <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="rectangular"
            width="100%"
            height={570}
          />
        }
    </>
  );
};

export default ServiceBanner;
