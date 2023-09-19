import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import { getApicalling, postApicalling } from "../../Apicalling/api";
import { baseUrlPostGres } from "../../components/constant";
import moment from "moment";
import { RiArrowDownSLine } from "react-icons/ri";
import { useParams } from "react-router-dom";

const RecentNews = () => {
  const [Apidata, setApidata] = useState();
  let { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(id);


  const onClick = (i) => {
    if (currentIndex === i) {
      setCurrentIndex();
    } else {
      setCurrentIndex(i);
    }
  };

  useEffect(() => {
    const handleClickScroll = () => {
      // if (location) {
        // const params1 = new URLSearchParams(window.location.search);
        // const prams2 = params1.get("id");

      setCurrentIndex(Number(id))
        // console.log("idAbout", params1.get("id"),id);
        const element = document.getElementById(id);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: "smooth" });
        }
      // }
    };
    if (Apidata) {
      setTimeout(() => {
        handleClickScroll();
      }, 500);
    }
  }, [Apidata]);

  useEffect(() => {
    // console.log("apicalling", postApicalling("/comman-page/news").then(res => res.status && setApidata(res.success)))
    console.log(
      "apicalling",
      getApicalling("letest_news").then(
        (res) => res.status && setApidata(res.success),
      ),
    );
  }, []);

  useEffect(() => {
    setCurrentIndex( parseInt(id));
	console.log("fsjdgfjhfgsdffsd" , id);
  }, [id]);
  return (
    <>
      <div className="container">
        <div className="section-title">
          <h2>RECENT NEWS</h2>
        </div>

        <div className="row">
          {Apidata &&
            Apidata.map((ele, i) => {
              return (
                <>
                  <div className="col-md-12" id={i+1}>
                    <div
                      className={
                        currentIndex === i
                          ? "recent-news-bg active"
                          : "recent-news-bg"
                      }
                    >
                      <div
                        className={
                          currentIndex === i + 1 ? "row align-items-end" : "row"
                        }
                      >
                        <div
                          className={
                            currentIndex === i + 1 ? "col-lg-6" : "col-lg-4"
                          }
                        >
                          <div className="recent-news-image">
                            <img
                              src={
                                Apidata &&
                                (ele.image == ""
                                  ? "/images/recent-news-image.jpg"
                                  : `${baseUrlPostGres()}/${ele.image}`)
                              }
                              alt="Banner"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div
                          className={
                            currentIndex === i + 1 ? "col-lg-6" : "d-none"
                          }
                        >
                          <div className="recent-news-detail">
                            <h3 className="mb-0">{ele.head_line}</h3>
                          </div>
                        </div>
                        <div
                          className={
                            currentIndex === i + 1 ? "col-lg-12" : "col-lg-8"
                          }
                        >
                          <div className="recent-news-detail">
                            <h3
                              className={currentIndex === i + 1 ? "d-none" : ""}
                            >
                              {ele.head_line}
                            </h3>

                            <p
                              className={
                                currentIndex === i + 1 ? " d-none" : ""
                              }
                            >
                              {ele.description}
                            </p>
                            <p
                              className={
                                currentIndex === i + 1
                                  ? "read-more-content mt-4"
                                  : "read-more-content d-none"
                              }
                            >
                              {ele.description}
                            </p>
                            <div className="text-end mt-5">
                              <a
                                className={
                                  currentIndex === i + 1
                                    ? "read-more-news with-arrow-down active"
                                    : "read-more-news with-arrow-down"
                                }
                                onClick={() => onClick(i + 1)}
                              >
                                {currentIndex === i + 1
                                  ? "Read Less"
                                  : "Read More"}
                                <RiArrowDownSLine />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default RecentNews;
