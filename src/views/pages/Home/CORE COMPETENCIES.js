import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "./Home.scss";
import { getApicalling, postApicalling } from "../../Apicalling/api";
import { baseUrlPostGres } from "../../components/constant";
import LatestNews from "./LatestNews";
const Home = () => {
  const [Apidata, setApidata] = useState();
  const [ApidataSecSection, setApidataSecSection] = useState();
  useEffect(() => {
    console.log(
      "apicalling",
      postApicalling("/comman-page/home").then(
        (res) => res.status && setApidata(res.success)
      )
    );
    console.log(
      "apicalling",
      getApicalling("/middle-page").then(
        (res) => res.status && setApidataSecSection(res.success)
      )
    );
  }, []);
  const options = {
    items: 2,
    margin: 100,
    loop: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 2000,
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
      <section className="video-banner">
        <video
          src="https://www.w3schools.com/howto/rain.mp4"
          muted
          autoPlay={"autoplay"}
          poster=""
          loop
        >
          video tag is not supported by your browser
        </video>
        {/* <h1>WORLD-CLASS <br /> TRAINING PRODUCTS <br /> & SUPPORT SERVICES</h1> */}
        <h1>{Apidata && Apidata.page_name}</h1>
        {console.log(ApidataSecSection, "Apidata")}
      </section>

      <section className="repeat-section welcome-section-home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11">
              {/* <div className='section-title'>
								<h2>Welcome to A. Harold & Associates. </h2>
								<p>We specialize in analysis, design, development, and implementation of instructor-led and student-directed interactive multimedia training, including extended reality and simulation. We also provide on-site subject matter expertise, administrative management, and instructional and operational services.</p>
							</div> */}
              <div className="section-title">
                <h2>{Apidata && Apidata.head_line} </h2>
                <p>{Apidata && Apidata.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="training-services-section">
        <ul className="list-view">
          {ApidataSecSection &&
            ApidataSecSection.map((ele, i) => {
              console.log("fsdfghsdfshdfhfsdf", ele);
              return (
                <>
                  <li>
                    <div className="image-list">
                      <img
                        src={`${baseUrlPostGres()}/${Apidata && ele.image}`}
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="content-bx">
                      <div className="icon-bx">
                        <img
                          src={`${baseUrlPostGres()}/${Apidata && ele.icon}`}
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <h3>{ele.page_name}</h3>
                      <p>{ele.description}</p>
                      <div className="codes">
                        <h4>NAICS Codes</h4>
                        <p>{ele.naics_code}</p>
                      </div>
                      <div className="btn-bottom">
                        <a
                          href={`${baseUrlPostGres()}/${ele.doc_pdf}`}
                          theme="info"
                          target="_blank"
                        >
                          {ele.page_name} Document
                          <img
                            src="/images/pdf-icon.png"
                            alt="img"
                            width={100}
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
        </ul>
      </section>
      {/* <section className='training-services-section'>
				<ul className='list-view'>
					<li>
						<div className='image-list'>
							<img src='/images/training.png' alt='img' className='img-fluid' />
						</div>
						<div className='content-bx'>
							<div className='icon-bx'>
								<img src='/images/training-icon.png' alt='img' className='img-fluid' />
							</div>
							<h3>
								Training
							</h3>
							<p>
								Training analysis, development, and instruction aligned with the highest quality standards and delivered across various learning platforms and participants
							</p>
							<div className='codes'>
								<h4>
									NAICS Codes
								</h4>
								<p>
									541330, 541511, 541512, 611430
								</p>
							</div>
							<div className='btn-bottom'>
								<a href='#'>Training Document <img src='/images/pdf-icon.png' alt='img' width={100} /></a>
							</div>
						</div>
					</li>
					<li>
						<div className='image-list'>
							<img src='/images/services.png' alt='img' className='img-fluid' />
						</div>
						<div className='content-bx'>
							<div className='icon-bx'>
								<img src='/images/services-icon.png' alt='img' className='img-fluid' />
							</div>
							<h3>
								Services
							</h3>
							<p>
								CONUS and OCONUS support services and highly specialized staffing solutions to accomplish the goals and mission-critical tasks that support your program
							</p>
							<div className='codes'>
								<h4>
									NAICS Codes
								</h4>
								<p>
									541611, 541614, 541690, 561110, 541990
								</p>
							</div>
							<div className='btn-bottom'>
								<a href='#'>Services Document <img src='/images/pdf-icon.png' alt='img' width={100} /></a>
							</div>
						</div>
					</li>
					<li>
						<div className='image-list'>
							<img src='/images/logistics.png' alt='img' className='img-fluid' />
						</div>
						<div className='content-bx'>
							<div className='icon-bx'>
								<img src='/images/logistics-icon.png' alt='img' className='img-fluid' />
							</div>
							<h3>
								Logistics
							</h3>
							<p>
								Effective Logistics, Engineering, and Maintenance solutions by applying full-service turnkey solutions that will deliver the quality and results you need for your mission
							</p>
							<div className='codes'>
								<h4>
									NAICS Codes
								</h4>
								<p>
									332311, 333923, 335999, 336413, 337214, 337215, 488991
								</p>
							</div>
							<div className='btn-bottom'>
								<a href='#'>Logistics Document <img src='/images/pdf-icon.png' alt='img' width={100} /></a>
							</div>
						</div>
					</li>
				</ul>
			</section> */}

      <section className="foreign-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="row">
                <div className="col-lg-5">
                  <div className="image-list">
                    <img
                      src="/images/home-fms-main.jpg"
                      alt="img"
                      className="img-fluid"
                    />
                    <div className="icon-bx">
                      <img
                        src="/images/foreign-military-icon.png"
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="content-bx">
                    <h3>FOREIGN MILITARY SALES (FMS)</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                    </p>
                    <div className="btn-bottom">
                      <a href="#">
                        FMS Document
                        <img src="/images/pdf-icon.png" alt="img" width={100} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="core-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-white">
                <h2>Core Competencies </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="core-section-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className="core-bx w-100">
                <img
                  src="/images/competencies04.jpeg"
                  alt="img"
                  className="img-fluid"
                />
                <a href="#">
                  <h3>Self-Directed Interactive Training (SDIT)</h3>
                </a>
                <div className="arrow-top">
                  <img
                    src="/images/arrow-top.svg"
                    alt="Arrow Top"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="core-bx w-100">
                <img
                  src="/images/competencies05.png"
                  alt="img"
                  className="img-fluid"
                />
                <a href="#">
                  <h3>Instructor-Facilitated Interactive Training (IFIT)</h3>
                </a>
                <div className="arrow-top">
                  <img
                    src="/images/arrow-top.svg"
                    alt="Arrow Top"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="core-bx w-100">
                <img
                  src="/images/competencies06.png"
                  alt="img"
                  className="img-fluid"
                />
                <a href="#">
                  <h3>Mobile Learning</h3>
                </a>
                <div className="arrow-top">
                  <img
                    src="/images/arrow-top.svg"
                    alt="Arrow Top"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="core-bx heading-details w-100">
                <h3>
                  Diverse and Innovative Training Classified up to Top Secret
                </h3>
                <a href="#" className="btn btn-outline">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="core-bx w-100">
                <img
                  src="/images/competencies07.jpeg"
                  alt="img"
                  className="img-fluid"
                />
                <a href="#">
                  <h3>FLASH to HTML5 Conversion</h3>
                </a>
                <div className="arrow-top">
                  <img
                    src="/images/arrow-top.svg"
                    alt="Arrow Top"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="core-bx w-100">
                <img
                  src="/images/competencies08.jpeg"
                  alt="img"
                  className="img-fluid"
                />
                <a href="#">
                  <h3>SCORM, xAPI, & cmi5 Compliance</h3>
                </a>
                <div className="arrow-top">
                  <img
                    src="/images/arrow-top.svg"
                    alt="Arrow Top"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="higher-standard-services-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 p-0 d-flex">
              <div className="left-standard w-100">
                <h2>
                  213Committed to a Higher <br className="d-none d-lg-block" />
                  Standard of Support Services
                </h2>
                <OwlCarousel {...options}>
                  <div className="item">
                    <div className="core-bx">
                      <img
                        src="/images/services-slide-1.png"
                        alt="img"
                        className="img-fluid"
                      />
                      <a href="#">
                        Subject Matter <br />
                        Expertise
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="core-bx">
                      <img
                        src="/images/services-slide-2.jpeg"
                        alt="img"
                        className="img-fluid"
                      />
                      <a href="#">
                        Program & Project <br />
                        Management
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="core-bx">
                      <img
                        src="/images/services-slide-3.jpeg"
                        alt="img"
                        className="img-fluid"
                      />
                      <a href="#">Cybersecurity</a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="core-bx">
                      <img
                        src="/images/services-slide-4.jpeg"
                        alt="img"
                        className="img-fluid"
                      />
                      <a href="#">
                        Administrative & Managerial <br /> Services
                      </a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="core-bx">
                      <img
                        src="/images/services-slide-5.jpeg"
                        alt="img"
                        className="img-fluid"
                      />
                      <a href="#">
                        Electronic Classroom
                        <br />
                        Set-up
                      </a>
                    </div>
                  </div>
                </OwlCarousel>
                <div className="text-center">
                  <a href="#" className="btn btn-outline">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5 p-0 d-flex">
              <div className="right-standard w-100 text-white">
                <div className="icon">
                  <img
                    src="/images/targeted-recruitment-icon.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <h3>
                  Targeted recruitment processes result in top talent for
                  strategic decision-making and the implementation of
                  world-class solutions.
                </h3>
                <a href="#" className="btn btn-outline">
                  Join Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="challenges-section">
        <div className="left-image-fixed">
          <img src="/images/logistics-bg.png" alt="img" className="img-fluid" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bg-e6e6e5 p-2 mb-5">
                <div className="row justify-content-end">
                  <div className="col-md-9">
                    <h2 className="mt-5">
                      Minimize Logistical Challenges & Maximize Benefits
                    </h2>
                    <ul>
                      <li>
                        Reliability, Accountability, Maintainability (RAM)
                      </li>
                      <li>Life Cycle Management and Sustainment</li>
                      <li>Integrated Logistics Support Plan (ILSP)</li>
                      <li>Global Supply Chain Management</li>
                      <li>Enterprise Resource Planning (ERP)</li>
                      <li>Configuration management (CM)</li>
                      <li>Level or Repair Analysis (LORA)</li>
                      <li>Logistics Product Data (LPD)</li>
                      <li>Cost Analysis</li>
                    </ul>
                    <div className="text-center">
                      <a href="#" className="btn btn-outline mb-5">
                        EXPLORE LOGISTICS CAPABILITIES
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-363636 glo-foreign p-2">
                <div className="row justify-content-end">
                  <div className="col-md-9">
                    <h2 className="mt-5 text-white">
                      Globalize With Foreign Military Sales
                    </h2>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet
                      <br className="d-none d-lg-block" /> dolore magna aliquam
                      erat volutpat.
                    </p>
                    <div className="glo-icons">
                      <ul>
                        <li>
                          <img
                            src="/images/air-icon.png"
                            alt="Air"
                            className="img-fluid"
                          />
                          <span>Air</span>
                        </li>
                        <li>
                          <img
                            src="/images/land-icon.png"
                            alt="Air"
                            className="img-fluid"
                          />
                          <span>Land</span>
                        </li>
                        <li>
                          <img
                            src="/images/sea-icon.png"
                            alt="Air"
                            className="img-fluid"
                          />
                          <span>Sea</span>
                        </li>
                        <li>
                          <img
                            src="/images/space-icon.png"
                            alt="Air"
                            className="img-fluid"
                          />
                          <span>Space</span>
                        </li>
                        <li>
                          <img
                            src="/images/cyber-icon.png"
                            alt="Air"
                            className="img-fluid"
                          />
                          <span>Cyber</span>
                        </li>
                        <li>
                          <img
                            src="/images/education-icon.png"
                            alt="Air"
                            className="img-fluid"
                          />
                          <span>Education</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <a href="#" className="btn btn-outline mb-5">
                        DISCOVER FMS OPPORTUNITES
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contract-vehicles">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div className="primary-bg">
                <div className="icon"></div>
                <h2>CONTRACT VEHICLES</h2>
                <ul>
                  <li>GSA Multiple Award Schedule</li>
                  <li>Seaport Next Generation</li>
                  <li>NETC Naval Training Products & Services IDIQ</li>
                  <li>Pilot & Aircrew Curriculum R&M MAC</li>
                  <li>HQ AETC Course Development & Delivery IDIQ</li>
                </ul>
                <a href="#">View Our Full List of Contract Vehicles </a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="orange-bx">
                <h3>SAM UEI </h3>
                <p>J8RRSCM1SKY7</p>
                <h3>CAGE CODE </h3>
                <p>3EWS7</p>
                <h3>PRIMARY NAICS </h3>
                <p>541330</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="orange-bx">
                <h3 className="mb-4">SAM ASSERTIONS</h3>
                <h3>System for Award Management (SAM)</h3>
                <p>Learn more about our registered business information.</p>
                <a href="#">VIEW CODES</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LatestNews />
      <div className="footer-bg">
        <footer className="aha-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 footer-bx">
                <div className="image-bx">
                </div>
              </div>
              <div className="col-lg-6 footer-bx">
                <h2>DEMONSTRATED EXPERIENCE </h2>
                <p>
                  Our success is based on client satisfaction. Not only do we
                  boast of our organizational past performance, but we also
                  ensure all team members and teaming partners meet our
                  standards of quality service; on-time deliverables; and
                  effective, efficient, and superior performance.
                </p>
                <div className="view-more-work">
                  <a href="#">View More of Our Work</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5"></div>
              <div className="col-lg-7">
                <div className="partner-ship">
                  <h3>PROVEN PARTNERSHIPS</h3>
                  <ul>
                    <li className="logos-item">
                      <img
                        src="/images/partner-logo-1.png"
                        className="img-fluid"
                      />
                    </li>
                    <li className="logos-item">
                      <img
                        src="/images/partner-logo-2.png"
                        className="img-fluid"
                      />
                    </li>
                    <li className="logos-item">
                      <img
                        src="/images/partner-logo-3.png"
                        className="img-fluid"
                      />
                    </li>
                    <li className="logos-item">
                      <img
                        src="/images/partner-logo-4.png"
                        className="img-fluid"
                      />
                    </li>
                    <li className="logos-item">
                      <img
                        src="/images/partner-logo-5.png"
                        className="img-fluid"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
