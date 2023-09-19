import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "./Home.scss";
import { getApicalling, postApicalling } from "../../Apicalling/api";
import { baseUrlPostGres } from "../../components/constant";
import LatestNews from "./LatestNews";
import { NavHashLink } from "react-router-hash-link";
const SupportServices = () => {
  const [Apidata, setApidata] = useState();
  useEffect(() => {
    console.log(
      "apicalling",
      getApicalling("/home-service").then(
        (res) => res.status && setApidata(res.success),
      ),
    );
  }, []);

  const [width, setWidth] = useState(0);

  const [title, setTitle] = useState(0);

  useEffect(() => {
    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, [width]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const onClick = (id) => {
    // setCurrentIndex(id)
    if (currentIndex === id) {
      // setCurrentIndex(1)
    } else {
      setCurrentIndex(id);
    }
  };

  const options = {
    items: 2,
    margin: 100,
    loop: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 2,
        margin: 40,
      },
      480: {
        items: 2,
        margin: 40,
      },
      992: {
        items: 2,
        margin: 100,
      },
    },
  };
  return (
    <>
      <section className="higher-standard-services-section">
        <div className="container-fluid">
          <div className="row">
            {width > 992 ? (
              <div className="col-lg-7 p-0 d-flex">
                <div className="left-standard w-100">
                  <h2>{Apidata && Apidata[0].tittle}</h2>
                  <OwlCarousel {...options}>
                    {Apidata &&
                      Apidata[0].home_service_sliders.map((ele, i) => {
                        return (
                          <>
                            <div className="item">
                              <div className="core-bx">
                                <img
                                  src={
                                    Apidata &&
                                    (ele.image == ""
                                      ? "/images/services-slide-1.png"
                                      : `${baseUrlPostGres()}/${ele.image}`)
                                  }
                                  alt="img"
                                  className="img-fluid"
                                />
                                {/* <img src='/images/services-slide-1.png' alt='img' className='img-fluid' /> */}
                                <NavHashLink
                                  to={
                                    i === 0
                                      ? "/services/0?id=onsite-smes"
                                      : i === 1
                                      ? "/services/1?id=pm-support"
                                      : i === 2
                                      ? "/services/2?id=information-technology-section"
                                      : i === 3
                                      ? "/services/1?id=administriave-management"
                                      : i === 4
                                      ? "/services/4?id=instructional-services"
                                      : ""
                                  }
                                  
                                >
                                  
                                  {ele.tittle}
                                </NavHashLink>
                              </div>
                            </div>
                          </> 
                        );
                      })}
                  </OwlCarousel>
                  <div className="text-center">
                    <a href="/services" className="btn btn-outline">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ) : null}
            {width <= 991 ? (
              <>
              {Apidata &&  <div className="left-standard col-md-12">
                  <div className="mobile-higher-standard">
                    {console.log(
                      Apidata,
                      "ApidataApidataApidataApidataApidata",
                    )}
                    <h2>{Apidata && Apidata[0].tittle}</h2>
                    {Apidata && (
                      <div className="higher-standard-title">
                        {console.log(Apidata[0].home_service_sliders[title].tittle,"titllllllllllllllllllllllle")}
                        <NavHashLink
                                  to={
                                    Apidata &&
                          Apidata[0].home_service_sliders[title].tittle === "Subject Matter Expertise" ? "/services/0?id=onsite-smes" :
                          Apidata[0].home_service_sliders[title].tittle === "Program & Project Management" ? "/services/1?id=program-management-support"  : 
                          Apidata[0].home_service_sliders[title].tittle === "Cybersecurity" ? "/services/2?id=it-support"  : 
                          Apidata[0].home_service_sliders[title].tittle === "Administrative & Managerial Services" ? "/services/1?id=it-support"  : 
                          Apidata[0].home_service_sliders[title].tittle === "Electronic Classroom Set-up" ? "/services/4?id=instructional-services"  : ""
                      
                      }>
                        {/* to={
                                    i === 0
                                      ? "/services/0?id=onsite-smes"
                                      : i === 1
                                      ? "/services/1?id=program-management-support"
                                      : i === 2
                                      ? "/services/2?id=it-support"
                                      : i === 3
                                      ? "/services/1?id=it-support"
                                      : i === 4
                                      ? "/services/4?id=instructional-services"
                                      : ""
                                  } */}
                          {Apidata &&
                            Apidata[0].home_service_sliders[title].tittle}
                        </NavHashLink>
                      </div>
                    )}
                    <>
                      {Apidata && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width={693}
                          height={683}
                          viewBox="0 0 693 683"
                        >
                          <defs>
                            <clipPath id="clip-path">
                              <path
                                id="SVGID"
                                d="M352.247,7099.482,639.33,7007.9c-38.47-119.231-149.2-205.987-280.591-208.652Z"
                                fill="none"
                              />
                            </clipPath>
                            <clipPath id="clip-path-2">
                              <rect
                                id="SVGID-2"
                                data-name="SVGID"
                                width="356.357"
                                height="317.859"
                                transform="translate(330.488 6794.521)"
                                fill="none"
                              />
                            </clipPath>
                            <linearGradient
                              id="linear-gradient"
                              x1="-14.171"
                              y1="8.908"
                              x2="-14.171"
                              y2="8.908"
                              gradientUnits="objectBoundingBox"
                            >
                              <stop offset={0} stopColor="#fff" />
                              <stop offset={1} stopColor="#231f20" />
                            </linearGradient>
                            <clipPath id="clip-path-3">
                              <path
                                id="SVGID-3"
                                data-name="SVGID"
                                d="M322.212,7060.4l6.545-300.235c-2.089-.043-4.179-.08-6.279-.08-134.419,0-248.263,88.02-287.086,209.56Z"
                                transform="translate(-35.392 -6760.09)"
                                fill="none"
                              />
                            </clipPath>
                            <clipPath id="clip-path-5">
                              <rect
                                id="SVGID-5"
                                data-name="SVGID"
                                width="424.09"
                                height="369.371"
                                fill="none"
                              />
                            </clipPath>
                            <linearGradient
                              id="linear-gradient-2"
                              x1="-11.253"
                              y1="7.766"
                              x2="-11.253"
                              y2="7.766"
                              xlinkHref="#linear-gradient"
                            />
                            <clipPath id="clip-path-7">
                              <path
                                id="SVGID-7"
                                data-name="SVGID"
                                d="M175.194,7344.151l177.053-244.669-285.93-93.5a301.022,301.022,0,0,0-15.143,94.523C51.174,7200.644,100.031,7289.355,175.194,7344.151Z"
                                fill="none"
                              />
                            </clipPath>
                            <clipPath id="clip-path-8">
                              <rect
                                id="SVGID-8"
                                data-name="SVGID"
                                width="570.185"
                                height="379.743"
                                transform="translate(-177.867 7000.57)"
                                fill="none"
                              />
                            </clipPath>
                            <linearGradient
                              id="linear-gradient-3"
                              x1="-7.957"
                              y1="7.013"
                              x2="-7.957"
                              y2="7.013"
                              xlinkHref="#linear-gradient"
                            />
                            <clipPath id="clip-path-9">
                              <path
                                id="SVGID-9"
                                data-name="SVGID"
                                d="M352.247,7099.482,176.074,7344.793a301.344,301.344,0,0,0,354.331-1.06Z"
                                fill="none"
                              />
                            </clipPath>
                            <clipPath id="clip-path-10">
                              <rect
                                id="SVGID-10"
                                data-name="SVGID"
                                width="365.507"
                                height="325.136"
                                transform="translate(169.493 7088.096)"
                                fill="none"
                              />
                            </clipPath>
                            <clipPath id="clip-path-11">
                              <rect
                                id="SVGID-11"
                                data-name="SVGID"
                                width="506.605"
                                height="337.906"
                                transform="translate(110.817 7083.142)"
                                fill="none"
                              />
                            </clipPath>
                            <linearGradient
                              id="linear-gradient-4"
                              x1="-13.41"
                              y1="7.803"
                              x2="-13.41"
                              y2="7.803"
                              xlinkHref="#linear-gradient"
                            />
                            <clipPath id="clip-path-12">
                              <path
                                id="SVGID-12"
                                data-name="SVGID"
                                d="M352.247,7098.795,531.423,7342.3a301.646,301.646,0,0,0,108.108-334.471Z"
                                fill="none"
                              />
                            </clipPath>
                            <clipPath id="clip-path-13">
                              <rect
                                id="SVGID-13"
                                data-name="SVGID"
                                width="415.034"
                                height="369.44"
                                transform="translate(288.815 6974.023)"
                                fill="none"
                              />
                            </clipPath>
                            <clipPath id="clip-path-14">
                              <rect
                                id="SVGID-14"
                                data-name="SVGID"
                                width="707.58"
                                height="450.982"
                                transform="translate(142.541 6913.648)"
                                fill="none"
                              />
                            </clipPath>
                            <linearGradient
                              id="linear-gradient-5"
                              x1="-12.065"
                              y1="7.154"
                              x2="-12.065"
                              y2="7.154"
                              xlinkHref="#linear-gradient"
                            />
                            <clipPath id="clip-frame">
                              <rect width={693} height={683} />
                            </clipPath>
                          </defs>
                          <g id="frame" clipPath="url(#clip-frame)">
                            <g
                              id="Group_58"
                              data-name="Group 58"
                              transform="translate(-4.485 -6758.994)"
                            >
                              <circle
                                id="Ellipse_1"
                                data-name="Ellipse 1"
                                cx="301.339"
                                cy="301.339"
                                r="301.339"
                                transform="translate(51.901 6799.144)"
                                fill="#f68f1f"
                              />
                              <g
                                id="clip-image-2"
                                transform={
                                  currentIndex === 1
                                    ? "translate(20 -28)"
                                    : "translate(0 0)"
                                }
                                onClick={() => {
                                  onClick(1);
                                  setTitle(1);
                                }}
                              >
                                <g
                                  id="Group_21"
                                  data-name="Group 21"
                                  clipPath="url(#clip-path)"
                                >
                                  <g id="Group_20" data-name="Group 20">
                                    <g id="Group_19" data-name="Group 19">
                                      <g
                                        id="Group_18"
                                        data-name="Group 18"
                                        clipPath="url(#clip-path-2)"
                                      >
                                        <image
                                          id="Rectangle_5"
                                          data-name="Rectangle 5"
                                          width="713.007"
                                          height="475.576"
                                          transform="translate(113.472 6787.799)"
                                          xlinkHref={
                                            Apidata &&
                                            (Apidata[0].home_service_sliders[1]
                                              .image == ""
                                              ? "/images/services-slide-1.png"
                                              : `${baseUrlPostGres()}/${
                                                  Apidata[0]
                                                    .home_service_sliders[1]
                                                    .image
                                                }`)
                                          }
                                        />
                                      </g>
                                    </g>
                                    <g
                                      id="Group_57-4"
                                      data-name="Group 57-4"
                                      opacity="0.3"
                                    >
                                      <g id="Group_56-4" data-name="Group 56-4">
                                        <g
                                          id="Group_193-4"
                                          data-name="Group 193-4"
                                        >
                                          <g
                                            id="Group_54-4"
                                            data-name="Group 54-4"
                                          >
                                            <g
                                              id="Group_192-4"
                                              data-name="Group 192-4"
                                            >
                                              <g
                                                id="Component_20_3"
                                                data-name="Component 20 3"
                                              >
                                                <rect
                                                  id="Rectangle_52-4"
                                                  className={
                                                    currentIndex === 2
                                                      ? "click-bx active"
                                                      : "click-bx"
                                                  }
                                                  onClick={() => onClick(2)}
                                                  data-name="Rectangle 52-4"
                                                  width="357.326"
                                                  height="317.858"
                                                  transform="translate(330.004 6794.521)"
                                                  fill="url(#linear-gradient)"
                                                />
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g
                                id="clip-image-1"
                                transform={
                                  currentIndex === 0
                                    ? "translate(-20 106.157)"
                                    : "translate(0 133.157)"
                                }
                                onClick={() => {
                                  onClick(0);
                                  setTitle(0);
                                }}
                              >
                                <g
                                  id="Group_34"
                                  data-name="Group 34"
                                  transform="translate(47.392 6666.09)"
                                >
                                  <g
                                    id="Group_30"
                                    data-name="Group 30"
                                    transform="translate(18 -0.079)"
                                  >
                                    <g
                                      id="Group_29"
                                      data-name="Group 29"
                                      clipPath="url(#clip-path-3)"
                                    >
                                      <g
                                        id="Group_28"
                                        data-name="Group 28"
                                        transform="translate(6.272 -3.645)"
                                      >
                                        <g
                                          id="Group_27"
                                          data-name="Group 27"
                                          transform="translate(0 0.069)"
                                        >
                                          <g
                                            id="Group_26"
                                            data-name="Group 26"
                                            clipPath="url(#clip-path-5)"
                                          >
                                            <image
                                              id="Rectangle_7"
                                              data-name="Rectangle 7"
                                              width="563.565"
                                              height="375.29"
                                              transform="translate(-16.438 -2.959)"
                                              xlinkHref={
                                                Apidata &&
                                                (Apidata[0]
                                                  .home_service_sliders[0]
                                                  .image == ""
                                                  ? "/images/services-slide-1.png"
                                                  : `${baseUrlPostGres()}/${
                                                      Apidata[0]
                                                        .home_service_sliders[0]
                                                        .image
                                                    }`)
                                              }
                                            />
                                          </g>
                                        </g>
                                        <g
                                          id="Group_57"
                                          data-name="Group 57"
                                          opacity="0.3"
                                        >
                                          <g id="Group_56" data-name="Group 56">
                                            <g
                                              id="Group_193"
                                              data-name="Group 193"
                                            >
                                              <g
                                                id="Group_54"
                                                data-name="Group 54"
                                              >
                                                <g
                                                  id="Group_192"
                                                  data-name="Group 192"
                                                >
                                                  <g
                                                    id="Component_20_4"
                                                    data-name="Component 20 4"
                                                  >
                                                    <rect
                                                      id="Rectangle_52"
                                                      className={
                                                        currentIndex === 1
                                                          ? "click-bx active"
                                                          : "click-bx"
                                                      }
                                                      onClick={() => onClick(1)}
                                                      data-name="Rectangle 52"
                                                      width="424.09"
                                                      height="369.509"
                                                      fill="url(#linear-gradient-2)"
                                                    />
                                                  </g>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g
                                id="clip-image-5"
                                transform={
                                  currentIndex === 4
                                    ? "translate(-30 10)"
                                    : "translate(0 0)"
                                }
                                onClick={() => {
                                  onClick(4);
                                  setTitle(4);
                                }}
                              >
                                <g
                                  id="Group_40"
                                  data-name="Group 40"
                                  clipPath="url(#clip-path-7)"
                                >
                                  <g id="Group_39" data-name="Group 39">
                                    <g id="Group_48" data-name="Group 48">
                                      <g id="Group_38" data-name="Group 38">
                                        <g id="Group_47" data-name="Group 47">
                                          <g id="Group_46" data-name="Group 46">
                                            <g
                                              id="Group_37"
                                              data-name="Group 37"
                                            >
                                              <g
                                                id="Group_36"
                                                data-name="Group 36"
                                                clipPath="url(#clip-path-8)"
                                              >
                                                <g
                                                  id="Group_45"
                                                  data-name="Group 45"
                                                >
                                                  <image
                                                    id="Rectangle_46"
                                                    data-name="Rectangle 46"
                                                    width="570.183"
                                                    height="379.742"
                                                    transform="translate(-177.866 7000.57)"
                                                    xlinkHref={
                                                      Apidata &&
                                                      (Apidata[0]
                                                        .home_service_sliders[4]
                                                        .image == ""
                                                        ? "/images/services-slide-1.png"
                                                        : `${baseUrlPostGres()}/${
                                                            Apidata[0]
                                                              .home_service_sliders[4]
                                                              .image
                                                          }`)
                                                    }
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                    <g
                                      id="Group_57-2"
                                      data-name="Group 57"
                                      opacity="0.3"
                                    >
                                      <g id="Group_56-2" data-name="Group 56">
                                        <g
                                          id="Group_193-2"
                                          data-name="Group 193"
                                        >
                                          <g
                                            id="Group_54-2"
                                            data-name="Group 54"
                                          >
                                            <g
                                              id="Group_192-2"
                                              data-name="Group 192"
                                            >
                                              <g
                                                id="Component_20_4-2"
                                                data-name="Component 20 4"
                                              >
                                                <rect
                                                  id="Rectangle_52-2"
                                                  className={
                                                    currentIndex === 5
                                                      ? "click-bx active"
                                                      : "click-bx"
                                                  }
                                                  onClick={() => onClick(5)}
                                                  data-name="Rectangle 52"
                                                  width="572.063"
                                                  height="374.261"
                                                  transform="translate(-179.744 7000.57)"
                                                  fill="url(#linear-gradient-3)"
                                                />
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g
                                id="clip-image-4"
                                transform={
                                  currentIndex === 3
                                    ? "translate(0 33)"
                                    : "translate(0 0)"
                                }
                                onClick={() => {
                                  onClick(3);
                                  setTitle(3);
                                }}
                              >
                                <g
                                  id="Group_48-2"
                                  data-name="Group 48"
                                  clipPath="url(#clip-path-9)"
                                >
                                  <g id="Group_47-2" data-name="Group 47">
                                    <g id="Group_46-2" data-name="Group 46">
                                      <g
                                        id="Group_45-2"
                                        data-name="Group 45"
                                        clipPath="url(#clip-path-10)"
                                      >
                                        <g id="Group_44" data-name="Group 44">
                                          <g id="Group_43" data-name="Group 43">
                                            <g
                                              id="Group_42"
                                              data-name="Group 42"
                                              clipPath="url(#clip-path-11)"
                                            >
                                              <image
                                                id="Rectangle_8"
                                                data-name="Rectangle 8"
                                                width="506.605"
                                                height="337.906"
                                                transform="translate(110.817 7083.142)"
                                                xlinkHref={
                                                  Apidata &&
                                                  (Apidata[0]
                                                    .home_service_sliders[3]
                                                    .image == ""
                                                    ? "/images/services-slide-1.png"
                                                    : `${baseUrlPostGres()}/${
                                                        Apidata[0]
                                                          .home_service_sliders[3]
                                                          .image
                                                      }`)
                                                }
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                    <g id="Group_221" data-name="Group 221">
                                      <g
                                        id="Group_57-2-2"
                                        data-name="Group 57-2"
                                        opacity="0.3"
                                      >
                                        <g
                                          id="Group_56-2-2"
                                          data-name="Group 56-2"
                                        >
                                          <g
                                            id="Group_193-2-2"
                                            data-name="Group 193-2"
                                          >
                                            <g
                                              id="Group_54-2-2"
                                              data-name="Group 54-2"
                                            >
                                              <g
                                                id="Group_192-2-2"
                                                data-name="Group 192-2"
                                              >
                                                <g
                                                  id="Component_20_6"
                                                  data-name="Component 20 6"
                                                >
                                                  <rect
                                                    id="Rectangle_52-2-2"
                                                    className={
                                                      currentIndex === 4
                                                        ? "click-bx active"
                                                        : "click-bx"
                                                    }
                                                    onClick={() => onClick(4)}
                                                    data-name="Rectangle 52-2"
                                                    width="365.507"
                                                    height="325.136"
                                                    transform="translate(169.493 7088.096)"
                                                    fill="url(#linear-gradient-4)"
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g
                                id="clip-image-3"
                                transform={
                                  currentIndex === 2
                                    ? "translate(30 13)"
                                    : "translate(0 0)"
                                }
                                onClick={() => {
                                  onClick(2);
                                  setTitle(2);
                                }}
                              >
                                <g
                                  id="Group_56-3"
                                  data-name="Group 56"
                                  clipPath="url(#clip-path-12)"
                                >
                                  <g id="Group_55" data-name="Group 55">
                                    <g id="Group_54-3" data-name="Group 54">
                                      <g
                                        id="Group_53"
                                        data-name="Group 53"
                                        clipPath="url(#clip-path-13)"
                                      >
                                        <g id="Group_52" data-name="Group 52">
                                          <g id="Group_51" data-name="Group 51">
                                            <g
                                              id="Group_50"
                                              data-name="Group 50"
                                              clipPath="url(#clip-path-14)"
                                            >
                                              <image
                                                id="Rectangle_9"
                                                data-name="Rectangle 9"
                                                width="707.58"
                                                height="450.982"
                                                transform="translate(142.541 6913.648)"
                                                fill="url(#pattern)"
                                                xlinkHref={
                                                  Apidata &&
                                                  (Apidata[0]
                                                    .home_service_sliders[2]
                                                    .image == ""
                                                    ? "/images/services-slide-1.png"
                                                    : `${baseUrlPostGres()}/${
                                                        Apidata[0]
                                                          .home_service_sliders[2]
                                                          .image
                                                      }`)
                                                }
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                    <g id="Group_220" data-name="Group 220">
                                      <g
                                        id="Group_57-3"
                                        data-name="Group 57-3"
                                        opacity="0.35"
                                      >
                                        <g
                                          id="Group_56-3-2"
                                          data-name="Group 56-3"
                                        >
                                          <g
                                            id="Group_193-3"
                                            data-name="Group 193-3"
                                          >
                                            <g
                                              id="Group_54-3-2"
                                              data-name="Group 54-3"
                                            >
                                              <g
                                                id="Group_192-3"
                                                data-name="Group 192-3"
                                              >
                                                <g
                                                  id="Component_20_5"
                                                  data-name="Component 20 5"
                                                >
                                                  <rect
                                                    id="Rectangle_52-3"
                                                    className={
                                                      currentIndex === 3
                                                        ? "click-bx active"
                                                        : "click-bx"
                                                    }
                                                    onClick={() => onClick(3)}
                                                    data-name="Rectangle 52-3"
                                                    width="416.121"
                                                    height="370.777"
                                                    transform="translate(287.728 6972.687)"
                                                    fill="url(#linear-gradient-5)"
                                                  />
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      )}
                    </>
                    <div className="text-center">
                    <a href="/services" className="btn btn-outline">
                      Learn More
                    </a>
                  </div>
                  </div>
                </div>}
               
              </>
            ) : null}
            <div className="col-lg-5 col-md-12 p-0 d-flex">
              <div className="right-standard w-100 text-white">
                <div className="icon">
                  <img
                    src="/images/targeted-recruitment-icon.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <h3>{Apidata && Apidata[0].sidebar_description}</h3>
                <a href="/careers" className="btn btn-outline">
                  Join Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
        {console.log(Apidata, "test arka")}
      </section>
    </>
  );
};

export default SupportServices;
