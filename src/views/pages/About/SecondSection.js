import React, { useEffect, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import { getApicalling } from "../../Apicalling/api";
import { baseUrlPostGres } from "../../components/constant";
import { Skeleton } from "@mui/material";
import { useParams } from "react-router-dom";
const SecondSectionAbout = () => {
  let { id } = useParams()
  const [Apidata, setApidata] = useState();
  const [Apidata1, setApidata1] = useState();
  useEffect(() => {
    console.log(
      "apicalling",
      getApicalling("about-mission").then(
        (res) => res.status && setApidata(res.success),
      ),
    );
    console.log(
      "apicalling",
      getApicalling("about-corporate-reel").then(
        (res) => res.status && setApidata1(res.success),
      ),
    );
  }, []);

  useEffect(() => {
    const handleClickScroll = () => {
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    if (Apidata1) {
      setTimeout(() => {
        handleClickScroll();
      }, 200);
    }
  }, [Apidata1]);

  return (
    <>
      <section className="video-section-about" id="reel">
        {/* {console.log(Apidata1[0].video, "ApidataApidataApidataApidata")} */}
        {Apidata ? (
          <>
            <video
              src={`${baseUrlPostGres()}/${Apidata1 && Apidata1[0].video}`}
              className="video-tag"
              muted
              autoPlay={"autoplay"}
              poster=""
              loop
              controls
            >
              video tag is not supported by your browser
            </video>
            {/* <div className="button-get-in-touch">
              <a href="/contact" className="btn-outline">
                Get in Touch
              </a>
            </div> */}
          </>
        ) : (
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width="100%"
            height={800}
          />
        )}
      </section>

      <section className="mission-vision-section" id="mission-vision-values">
        <div className="container-fluid">
          <div className="row">
            {Apidata ?
              <>
                {Apidata &&
                  Apidata.map((ele, i) => {
                    return (
                      <>
                        {i + 1 === 2 || i + 1 === 3 ? (
                          <div className="col-lg-6 col-md-12 p-0 d-flex">
                            <div
                              className="bg-mission-image w-100"
                              style={{
                                backgroundImage: `url(${baseUrlPostGres()}/${Apidata && ele.image
                                  })`,
                                backgroundRepeat: "no-repeat",
                              }}
                            >
                              <h2>{ele.tittle}</h2>
                            </div>
                          </div>
                        ) : i + 1 === 4 ? (
                          <div className="col-lg-6 col-md-12 p-0 d-flex">
                            <div className="bg-light-dark w-100">
                              <h3>{ele.tittle}</h3>
                            </div>
                          </div>
                        ) : (
                          <div className="col-lg-6 col-md-12 p-0 d-flex">
                            <div className="bg-website-color w-100">
                              <h3>{ele.tittle}</h3>
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })}
              </>
              : <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width="100%"
                height={1340}
              />
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondSectionAbout;
