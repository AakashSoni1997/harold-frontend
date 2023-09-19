import React, { useEffect, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import ContractBox from "../../components/ContractBox/ContractBox";
import { getApicalling, postApicalling } from "../../Apicalling/api";
import { Nav, Tab, TabContainer } from "react-bootstrap";
import { Design } from "../../components/Design/Design";
import { baseUrlPostGres } from "../../components/constant";
import Parser from "html-react-parser";
import { Skeleton } from "@mui/material";
const Designs = () => {
  const [Apidata, setApidata] = useState();

  useEffect(() => {
    console.log(
      "apicalling",
      getApicalling("training-design-list").then(
        (res) => res.status && setApidata(res.success)
      )
    );
  }, []);

  return (
    <>
    {Apidata ?
    <>
      <section className="design-section" id="design">
        <div className="container">
          <div className="section-title">
            <h2 className="dark-red-color">Design</h2>
          </div>
        </div>
        <div className="bg-secondaryColor curve-design">
          <div className="container">
            <TabContainer id="design-tab" defaultActiveKey="0">
              <div className="row align-items-center">
                <div className="col-md-6">
                  {Apidata ? (
                    <Nav variant="pills" className="flex-column">
                      {Apidata &&
                        Apidata.map((ele, i) => {
                          return (
                            <>
                              <Nav.Item>
                                <Nav.Link eventKey={i}>{ele.tittle} </Nav.Link>
                              </Nav.Item>
                            </>
                          );
                        })}
                    </Nav>
                  ) : (
                    <Skeleton
                      sx={{ bgcolor: "grey.900" }}
                      variant="rectangular"
                      width="100%"
                      height={892}
                    />
                  )}
                </div>
                <div className="col-md-6 d-flex justify-content-center mt-5 mt-md-0">
                 {Apidata ?(  <Tab.Content className="d-flex justify-content-center">
                    {Apidata &&
                      Apidata.map((ele, i) => {
                        return (
                          <>
                            <Tab.Pane eventKey={i}>
                              <Design
                                ImageUrl={
                                  ele.image
                                    ? `${baseUrlPostGres()}/${ele.image}`
                                    : "/images/Design_5.png"
                                }
                                DesignContent={Parser(ele.description)}
                              />
                            </Tab.Pane>
                          </>
                        );
                      })}
                  </Tab.Content>):(
					 <Skeleton
					 sx={{ bgcolor: "white" }}
					 variant="rectangular"
					 width="100%"
					 height={892}
				   />
				  )}
				
                </div>
              </div>
            </TabContainer>
          </div>
        </div>
      </section>
      </>:<Skeleton
					 sx={{ bgcolor: "white" }}
					 variant="rectangular"
					 width="100%"
					 height={980}
				   />
    }
    </>
  );
};

export default Designs;
