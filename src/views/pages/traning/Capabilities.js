import React, { useEffect, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import { getApicalling, postApicalling } from "../../Apicalling/api";
import { baseUrlPostGres } from "../../components/constant";
import Parser from "html-react-parser";
import { Skeleton } from "@mui/material";
const Capabilities = () => {
  const [Apidata, setApidata] = useState();
  useEffect(() => {
    console.log(
      "apicalling",
      getApicalling("training-project-list").then(
        (res) => res.status && setApidata(res.success)
      )
    );
  }, []);

  return (
    <>
    {Apidata ?
    <>
      <section className="capabilities-section" id="project-management">
        <div className="container-fluid">
          <div className="section-title">
            {Apidata ? (
              <h2>
                {Apidata && Apidata[0].head_line
                  ? Apidata[0].head_line
                  : "CAPABILITIES"}
              </h2>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="section-title">
              <h3 className="blueColorHeading"></h3>
            </div>
          </div>
          <div className="row">
            <div className="section-title">
              <h3 className="dark-red-color">{Apidata && Apidata[0].tittle}</h3>
              {Apidata ? <p>{Apidata && Apidata[0].sub_tittle}</p> : ""}
            </div>
          </div>
          <div className="row mt-7">
            <div className="col-lg-4">
              {Apidata ? (
                <img
                  src={
                    (Apidata && Apidata[0].image == "") ||
                      (Apidata && Apidata[0].image == null)
                      ? "/images/project-management.png"
                      : `${baseUrlPostGres()}/${Apidata && Apidata[0].image}`
                  }
                  alt="img"
                  className="img-fluid"
                />
              ) : (
                <Skeleton
                  sx={{ bgcolor: "grey.900" }}
                  variant="rectangular"
                  width="100%"
                  height={535}
                />
              )}
            </div>
            <div className="col-lg-8 mt-lg-0 mt-5">
              {Apidata ? (
                <h4>{Apidata && Parser(Apidata[0].description)}</h4>
              ) : (
                <Skeleton
                  sx={{ bgcolor: "grey.900" }}
                  variant="rectangular"
                  width="100%"
                  height={216}
                />
              )}

              <div className="mt-5">
                <a
                  href="/contact"
                  className="btn-outline border-dark-red-color"
                >
                  Get in Touch
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
            height={811}
          />
    }
    </>
  );
};

export default Capabilities;
