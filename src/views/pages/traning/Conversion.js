import React, { useEffect, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "./Home.scss";
import { getApicalling} from "../../Apicalling/api";
import { Nav, Tab, TabContainer } from "react-bootstrap";
import ConversionContent from "../../components/ConversionContent/ConversionContent";
import { baseUrlPostGres } from "../../components/constant";
import { Skeleton } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
const Conversion = () => {
  const [Apidata, setApidata] = useState();
  const [currentIndex, setcurrentIndex] = useState(0);
  const { id } = useParams();
  // console.log(id,"iddddddddddddddd213");
  const location = useLocation();

  useEffect(() => {
    console.log(
      "apicalling",
      getApicalling("/training-conversion").then(
        (res) => res.status && setApidata(res.success)
      )
    );
  }, []);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWindowSizeChange = () => setWidth(window.innerWidth);
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, [width]);

  useEffect(() => {
    const handleClickScroll = () => {
      if (location) {
        const params1 = new URLSearchParams(window.location.search);
        const prams2 = params1.get("id");
        console.log("Fsdfsdfsfsdfs", params1.get("idconversion"));
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

  console.log(currentIndex,'currentIndex')

  return (
    <>
    {Apidata ?
    <>
      <section className="conversion-section" id="conversion">
        <div className="container">
          <div className="bg-white">
            <div className="section-title">
              <h2 className="dark-red-color">Conversion</h2>
              <p>
                AHA is a global pioneer in converting training content and media
                to updated platforms that best satisfy the client’s
                requirements.
              </p>
            </div>
            <TabContainer
              id="conversion-content-tab"
              defaultActiveKey={id == undefined ? "0" : id}
            >
              {width >= 992 ? (
                <div className="row align-items-center int-pad">
                  <div className="col-md-6">
                    <div className="bx-shadow-design">
                      <div className="title-nav">Content</div>
                      <Nav variant="pills" className="">
                        {Apidata ? (
                          <Nav.Item onClick={() =>setcurrentIndex(0)}>
                            <Nav.Link eventKey="0" >
                              <img
                                alt="img"
                                src="/images/content-conversion.png"
                                className="img-fluid"
                              />
                              <img
                                alt="img"
                                src="/images/content-conversion-active.png"
                                className="img-fluid active-image"
                              />
                              <p>{Apidata[0].tittle}</p>
                            </Nav.Link>
                          </Nav.Item>
                        ) : (
                          <Nav.Item>
                            <Nav.Link eventKey="0">
                              <Skeleton
                                sx={{ bgcolor: "grey.900" }}
                                variant="rectangular"
                                width="100%"
                                height={163}
                              />
                            </Nav.Link>
                          </Nav.Item>
                        )}
                        {Apidata ? (
                          <Nav.Item onClick={()=>setcurrentIndex(1)}>
                            <Nav.Link eventKey="1" >
                              <img
                                alt="img"
                                src="/images/content-migration.png"
                                className="img-fluid"
                              />
                              <img
                                alt="img"
                                src="/images/content-migration-active.png"
                                className="img-fluid active-image"
                              />
                              <p>{Apidata[1].tittle}</p>
                            </Nav.Link>
                          </Nav.Item>
                        ) : (
                          <Nav.Item>
                            <Nav.Link eventKey="1">
                              <Skeleton
                                sx={{ bgcolor: "grey" }}
                                variant="rectangular"
                                width="100%"
                                height={163}
                              />
                            </Nav.Link>
                          </Nav.Item>
                        )}
                        {Apidata ? (
                          <Nav.Item onClick={() =>setcurrentIndex(2)}>
                            <Nav.Link eventKey="2" >
                              <img
                                alt="img"
                                src="/images/ilt-to-cbt.png"
                                className="img-fluid"
                              />
                              <img
                                alt="img"
                                src="/images/ilt-to-cbt-active.png"
                                className="img-fluid active-image"
                              />
                              <p>{Apidata[2].tittle}</p>
                            </Nav.Link>
                          </Nav.Item>
                        ) : (
                          <Skeleton
                            sx={{ bgcolor: "grey.900" }}
                            variant="rectangular"
                            width="100%"
                            height={163}
                          />
                        )}
                      </Nav>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bx-shadow-design">
                      <div className="title-nav">Media</div>
                      <Nav variant="pills" className="">
                        {Apidata ? (
                          <Nav.Item  onClick={() =>setcurrentIndex(3)}>
                            <Nav.Link eventKey="3">
                              <img
                                alt="img"
                                src="/images/flash-html.png"
                                className="img-fluid"
                              />
                              <img
                                alt="img"
                                src="/images/flash-html-active.png"
                                className="img-fluid active-image"
                              />
                              <p>{Apidata[3].tittle}</p>
                            </Nav.Link>
                          </Nav.Item>
                        ) : (
                          <Skeleton
                            sx={{ bgcolor: "grey" }}
                            variant="rectangular"
                            width="100%"
                            height={163}
                          />
                        )}
                        {Apidata ? (
                          <Nav.Item  onClick={() =>setcurrentIndex(4)}>
                            <Nav.Link eventKey="4">
                              <img
                                alt="img"
                                src="/images/static-responsive.png"
                                className="img-fluid"
                              />
                              <img
                                alt="img"
                                src="/images/static-responsive-active.png"
                                className="img-fluid active-image"
                              />
                              <p>{Apidata[4].tittle}</p>
                            </Nav.Link>
                          </Nav.Item>
                        ) : (
                          <Skeleton
                            sx={{ bgcolor: "grey.900" }}
                            variant="rectangular"
                            width="100%"
                            height={163}
                          />
                        )}
                      </Nav>
                    </div>
                  </div>
                </div>
              ) : null}
              {width <= 991 ? (
                <div className="row align-items-center int-pad">
                  <div className="col-md-12">
                    <div className="bx-shadow-design">
                      <div className="title-nav">
                        <span>Content</span>
                        <span>Media</span>
                      </div>
                      <Nav variant="pills" className="">
                        {Apidata ? (
                          <Nav.Item onClick={()=>setcurrentIndex(0)}>
                            <Nav.Link eventKey="0">
                              <img
                                alt="img"
                                src="/images/content-conversion.png"
                                className="img-fluid"
                              />
                              <img
                                alt="img"
                                src="/images/content-conversion-active.png"
                                className="img-fluid active-image"
                              />
                              <p>{Apidata && Apidata[0].tittle}</p>
                            </Nav.Link>
                          </Nav.Item>
                        ) : (
                          <Skeleton
                            sx={{ bgcolor: "grey" }}
                            variant="rectangular"
                            width="100%"
                            height={163}
                          />
                        )}
                        {Apidata ? (
                          <Nav.Item onClick={()=>setcurrentIndex(1)}>
                            <Nav.Link eventKey="1">
                              <img
                                alt="img"
                                src="/images/content-migration.png"
                                className="img-fluid"
                              />
                              <img
                                alt="img"
                                src="/images/content-migration-active.png"
                                className="img-fluid active-image"
                              />
                              <p>{Apidata && Apidata[1].tittle}</p>
                            </Nav.Link>
                          </Nav.Item>
                        ) : (
                          <Skeleton
                            sx={{ bgcolor: "grey.900" }}
                            variant="rectangular"
                            width="100%"
                            height={163}
                          />
                        )}
                        {Apidata ? (
                          <Nav.Item onClick={()=>setcurrentIndex(2)}>
                            <Nav.Link eventKey="2">
                              <img
                                alt="img"
                                src="/images/ilt-to-cbt.png"
                                className="img-fluid"
                              />
                              <img
                                alt="img"
                                src="/images/ilt-to-cbt-active.png"
                                className="img-fluid active-image"
                              />
                              <p>{Apidata && Apidata[2].tittle}</p>
                            </Nav.Link>
                          </Nav.Item>
                        ) : (
                          <Skeleton
                            sx={{ bgcolor: "grey" }}
                            variant="rectangular"
                            width="100%"
                            height={163}
                          />
                        )}
                        {Apidata ? (
                          <Nav.Item onClick={()=>setcurrentIndex(3)}>
                            <Nav.Link eventKey="3">
                              <img
                                alt="img"
                                src="/images/flash-html.png"
                                className="img-fluid"
                              />
                              <img
                                alt="img"
                                src="/images/flash-html-active.png"
                                className="img-fluid active-image"
                              />
                              <p>{Apidata && Apidata[3].tittle}</p>
                            </Nav.Link>
                          </Nav.Item>
                        ) : (
                          <Skeleton
                            sx={{ bgcolor: "grey.900" }}
                            variant="rectangular"
                            width="100%"
                            height={163}
                          />
                        )}
                        {Apidata ? (
                          <Nav.Item onClick={()=>setcurrentIndex(4)}>
                            <Nav.Link eventKey="4">
                              <img
                                alt="img"
                                src="/images/static-responsive.png"
                                className="img-fluid"
                              />
                              <img
                                alt="img"
                                src="/images/static-responsive-active.png"
                                className="img-fluid active-image"
                              />

                              <p>{Apidata && Apidata[4].tittle}</p>
                            </Nav.Link>
                          </Nav.Item>
                        ) : (
                          <Skeleton
                            sx={{ bgcolor: "grey" }}
                            variant="rectangular"
                            width="100%"
                            height={163}
                          />
                        )}
                      </Nav>
                    </div>
                  </div>
                </div>
              ) : null}
              <div className="row">
                <div className="col-md-12 conversion-content-bx">
                  <Tab.Content className="">
                    {Apidata ? (
                      <>
                          <Tab.Pane eventKey={0}>
                      {currentIndex == 0 ?
                          <ConversionContent
                            ConversionTitle={Apidata[0].tittle}
                            ConversionDescripition={Apidata[0].description}
                            VideoUrl={`${baseUrlPostGres()}/${Apidata[0].video}`}
                          />
                         : 
                           <Skeleton
                           sx={{ bgcolor: "grey.900" }}
                           variant="rectangular"
                           width="100%"
                           height={372}
                           />
                      }     
                           </Tab.Pane>
                      </>
                    ) : (
                      <Skeleton
                        sx={{ bgcolor: "grey.900" }}
                        variant="rectangular"
                        width="100%"
                        height={372}
                      />
                    )}
                {Apidata ? (
                      <>
                        <Tab.Pane eventKey={1}>
                      {currentIndex == 1?  
                          <ConversionContent
                            ConversionTitle={Apidata[1].tittle}
                            ConversionDescripition={Apidata[1].description}
                            VideoUrl={`${baseUrlPostGres()}/${Apidata[1].video}`}
                          />
                          : 
                          <Skeleton
                          sx={{ bgcolor: "grey.900" }}
                          variant="rectangular"
                          width="100%"
                          height={372}
                          />
                        }     
                        </Tab.Pane> 
                      </>
                    ) : (
                      <Skeleton
                        sx={{ bgcolor: "grey.900" }}
                        variant="rectangular"
                        width="100%"
                        height={372}
                      />
                    )}
                              {Apidata ? (
                      <>
                          <Tab.Pane eventKey={2}>
                      {currentIndex == 2 ?
                          <ConversionContent
                            ConversionTitle={Apidata[2].tittle}
                            ConversionDescripition={Apidata[2].description}
                            VideoUrl={`${baseUrlPostGres()}/${Apidata[2].video}`}
                          />
                         : 
                           <Skeleton
                           sx={{ bgcolor: "grey.900" }}
                           variant="rectangular"
                           width="100%"
                           height={372}
                           />
                      }     
                           </Tab.Pane>
                      </>
                    ) : (
                      <Skeleton
                        sx={{ bgcolor: "grey.900" }}
                        variant="rectangular"
                        width="100%"
                        height={372}
                      />
                    )}          {Apidata ? (
                      <>
                          <Tab.Pane eventKey={3}>
                      {currentIndex == 3 ?
                          <ConversionContent
                            ConversionTitle={Apidata[3].tittle}
                            ConversionDescripition={Apidata[3].description}
                            VideoUrl={`${baseUrlPostGres()}/${Apidata[3].video}`}
                          />
                         : 
                           <Skeleton
                           sx={{ bgcolor: "grey.900" }}
                           variant="rectangular"
                           width="100%"
                           height={372}
                           />
                      }     
                           </Tab.Pane>
                      </>
                    ) : (
                      <Skeleton
                        sx={{ bgcolor: "grey.900" }}
                        variant="rectangular"
                        width="100%"
                        height={372}
                      />
                    )}  
                            {Apidata ? (
                      <>
                          <Tab.Pane eventKey={4}>
                      {currentIndex == 4 ?
                          <ConversionContent
                            ConversionTitle={Apidata[4].tittle}
                            ConversionDescripition={Apidata[4].description}
                            VideoUrl={`${baseUrlPostGres()}/${Apidata[4].video}`}
                          />
                         : 
                           <Skeleton
                           sx={{ bgcolor: "grey.900" }}
                           variant="rectangular"
                           width="100%"
                           height={372}
                           />
                      }     
                           </Tab.Pane>
                      </>
                    ) : (
                      <Skeleton
                        sx={{ bgcolor: "grey.900" }}
                        variant="rectangular"
                        width="100%"
                        height={372}
                      />
                    )}
                  </Tab.Content>
                </div>
              </div>
            </TabContainer>
          </div>
        </div>
      </section>
      </>:<Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width="100%"
          height={1484}
        />
      }
    </>
  );
};

export default Conversion;
