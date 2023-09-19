import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import { getApicalling, postApicalling } from "../../Apicalling/api";
import { Nav, Tab, TabContainer } from "react-bootstrap";
import ConversionContent from "../../components/ConversionContent/ConversionContent";
import { baseUrlPostGres } from "../../components/constant";
import ReactPlayer from "react-player";
import { useLocation, useParams } from "react-router-dom";
import { Skeleton } from '@mui/material';
const Conversion = () => {
	const { id } = useParams();
	console.log("conversion render");
	const location = useLocation();
  const [currentIndex, setcurrentIndex] = useState(0);
  const [Apidata, setApidata] = useState();
  useEffect(() => {
    console.log(
      "apicalling",
      getApicalling("/service-technology").then(
        (res) => res.status && setApidata(res.success)
      )
    );
  }, []);

  useEffect(() => {
    const handleClickScroll = () => {
      if (location) {
        const params1 = new URLSearchParams(window.location.search);
        const prams2 = params1.get("id");
        if(id){

          setcurrentIndex(id)
        }
        console.log("Fsdfsdfsfsdfs", params1.get("id"));
        const element = document.getElementById(prams2);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    if (Apidata) {
      setTimeout(() => {
        handleClickScroll();
      }, 500);
    }
  }, [Apidata]);

  return (
    <>
    {Apidata ? 
			<>
      <section className="information-technology-section" id="it-support">
        <div className="container">
          <div className="bg-white">
            <div className="section-title">
              <h2 className="blueColorHeading">
                INFORMATION TECHNOLOGY SUPPORT
              </h2>
              <p>
                AHA offers a wide range of Information Technology (IT) support
                to ensure we meet client development, installation, and security
                needs. We leverage expertise from our other corporate core
                competencies within our Services Division and Training Division
                to provide our clients with complete solutions to meet immediate
                and emerging IT needs.
              </p>
            </div>
            <TabContainer id="information-technology-tab" defaultActiveKey={id===undefined ? "0" : id}>
              <div className="row align-items-center int-pad">
                <div className="col-md-12">
                  <div className="bx-shadow-design">
                    <Nav variant="pills" className="">
                      <Nav.Item onClick={()=>setcurrentIndex(0)}>
                        <Nav.Link eventKey="0">
                          <img
                            src="/images/software-development.jpg"
                            className="img-fluid"
                          />
                          <img
                            src="/images/software-development-active.jpg"
                            className="img-fluid active-image"
                          />

                          <p>{Apidata && Apidata[0].tittle}</p>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item onClick={()=>setcurrentIndex(1)}>
                        <Nav.Link eventKey="1">
                          <img
                            src="/images/system-administration.jpg"
                            className="img-fluid"
                          />
                          <img
                            src="/images/system-administration-active.jpg"
                            className="img-fluid active-image"
                          />

                          <p>{Apidata && Apidata[1].tittle}</p>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item onClick={()=>setcurrentIndex(2)}>
                        <Nav.Link eventKey="2">
                          <img
                            src="/images/cybersecurity-support.jpg"
                            className="img-fluid"
                          />
                          <img
                            src="/images/cybersecurity-support-active.jpg"
                            className="img-fluid active-image"
                          />

                          <p>{Apidata && Apidata[2].tittle}</p>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 conversion-content-bx">
                  <Tab.Content className="">
                    {Apidata &&
                      Apidata.map((ele, i) => {
                        return (
                          <>
                            <Tab.Pane eventKey={i}>
                              {
                                i == currentIndex ? 
                              
                              <ConversionContent
                                ConversionTitle={ele.tittle}
                                ConversionDescripition={ele.description}
                                VideoUrl={`${baseUrlPostGres()}/${ele.video}`}
                              />: ""}
                            </Tab.Pane>
                          </>
                        );
                      })}
                  </Tab.Content>
                </div>
              </div>
            </TabContainer>
          </div>
        </div>
      </section>
      </>: <Skeleton 
			sx={{ bgcolor: "grey" }}
			variant="rectangular"
			width="100%"
			height={1425}
			/>
			}
      
    </>
  );
};

export default Conversion;
