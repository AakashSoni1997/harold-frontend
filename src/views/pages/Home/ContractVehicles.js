import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "./Home.scss";
import { getApicalling, postApicalling } from "../../Apicalling/api";
import { baseUrlPostGres } from "../../components/constant";
import LatestNews from "./LatestNews";
import Parser from "html-react-parser";
const ContractVehicles = () => {
  const [Apidata, setApidata] = useState();
  useEffect(() => {
    console.log(
      "apicalling",
      getApicalling("/home-contract").then(
        (res) => res.status && setApidata(res.success),
      ),
    );
  }, []);

  return (
    <>
      {console.log("fdsjsjkdfhsdfsjdfkfsjkdfhkfsfsdf", Apidata)}
      <section className="contract-vehicles" id="hello">
        <div className="container">
          <div className="row align-items-lg-end ">
            <div className="col-lg-6">
              <div className="primary-bg">
                <div className="icon"></div>
                <h2>{Apidata && Parser(Apidata[0].tittle)}</h2>
                {Apidata && Parser(Apidata[0].description)}

                <a href="/about?id=contract-about-section">View Our Full List of Contract Vehicles </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="orange-bx w-100">
                {Apidata && Parser(Apidata[0].codes)}
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="orange-bx w-100">
                {Apidata && Parser(Apidata[0].content_description)}
                <a href="/about/0?id=sam-assersions-section">VIEW CODES</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContractVehicles;
