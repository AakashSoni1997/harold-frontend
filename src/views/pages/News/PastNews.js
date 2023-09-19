import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import { getApicalling, postApicalling } from "../../Apicalling/api";
import { baseUrlPostGres } from "../../components/constant";
import moment from "moment";
import Modal from "react-bootstrap/Modal";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import { useLocation, useParams } from "react-router-dom";

const PastNews = () => {

const {id}=useParams();
const location =useLocation()

  const [Apidata, setApidata] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const onClick = (id) => {
    console.log("fsdfsffsdf", currentIndex);
    setCurrentIndex(id);
  };

  useEffect(() => {
    const handleClickScroll = () => {
      const params1 = new URLSearchParams(window.location.search);
      const prams2 = params1.get("id");
      if (location && prams2) {
        console.log(prams2,"prams2");
      // setCurrentIndex(Number(id+1))
        console.log("idAbout",location , params1.get("id"),id);
        const element = document.getElementById(prams2);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    if (Apidata && currentIndex <= 1) {
      setTimeout(() => {
        handleClickScroll();
      }, 100);
    }
  }, [Apidata]);

  useEffect(() => {
    if (currentIndex == 1) {
      console.log(
        "apicalling",
        postApicalling("/news-past", { page_no: currentIndex }).then(
          (res) => res.status && setApidata(res.success),
        ),
      );
    } else {
      console.log("fsdfsffsdf", currentIndex);
      console.log(
        "apicalling",
        postApicalling("/news-past", { page_no: currentIndex }).then(
          (res) => res.status && setApidata([...Apidata, ...res.success]),
        ),
      );
    }
  }, [currentIndex]);
  return (
    <>
      <div className="container">
        <div className="section-title mb-5" >
          <h2>Past News</h2>
        </div>

        <div className="row">
          <div className="col-md-12">
            <ul className="past-news-list">
              {Apidata &&
                Apidata.map((ele, i) => {
                  return (
                    <>
                      {i > 2 ? (
                        <>
                          <RenderModel ele={ele} />
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  );
                })}
            </ul>
          </div>
          <div className="col-md-12 text-end">
            <div className="see-more-news">
              <a
                className={
                  currentIndex === 10
                    ? "btn-outline with-arrow-down active"
                    : "btn-outline with-arrow-down"
                }
                onClick={() => {onClick(currentIndex + 1)
                }}
              >
                Read More <RiArrowDownSLine />
              </a>
              {currentIndex != 1 ? (
                <a
                  className={
                    currentIndex === 11
                      ? "btn-outline with-arrow-up active"
                      : "btn-outline with-arrow-up"
                  }
                  onClick={() => onClick(1)}
                >
                  Read Less <RiArrowUpSLine />
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const RenderModel = ({ ele }) => {
  const handleClose = () => setShow(false);

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <li>
        <div className="past-news-image">
          <img
            src={
              ele &&
              (ele.image == "" || ele.image == null
                ? "/images/logistics-capabilities.png"
                : `${baseUrlPostGres()}/${ele.image}`)
            }
            alt="Banner"
            className="img-fluid w-100"
          />
        </div>
        <div className="past-news-detail">
          <h4>{ele.head_line}</h4>
          <div className="text-end mt-5">
            <a
              className="read-full-article with-arrow-down"
              onClick={handleShow}
            >
              Read Full Article <RiArrowRightSLine />
            </a>
          </div>
        </div>
      </li>
      <Modal
        show={show}
        dialogClassName="past-news-modal-90w"
        centered
        onHide={handleClose}
      >
        {/* <Modal.Header closeButton>
                </Modal.Header> */}
        <Modal.Body>
          <div className="past-news-popup">
            <div className="row align-items-end">
              <div className="col-md-6">
                <div className="past-news-image">
                  <img
                    src={
                      ele &&
                      (ele.image == "" || ele.image == null
                        ? "/images/logistigcs-capabilities.png"
                        : `${baseUrlPostGres()}/${ele.image}`)
                    }
                    alt="Banner"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h4> {ele.head_line}</h4>
              </div>
              <div className="col-md-12">
                <div className="past-news-detail">
                  {ele.description}

                  <div className="text-end mt-5">
                    <a
                      className="read-full-article with-arrow-down"
                      onClick={handleClose}
                    >
                      Read Less <RiArrowRightSLine />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default PastNews;
