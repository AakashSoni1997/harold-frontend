import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './Home.scss';
import { getApicalling, postApicalling } from '../../Apicalling/api';
import { baseUrlPostGres } from '../../components/constant';
const SecondScetion = () => {
	const [ApidataSecSection, setApidataSecSection] = useState()
	useEffect(() => {
		console.log("apicalling", getApicalling("/home-core").then(res => res.status && setApidataSecSection(res.success)))
	}, [])

	return (
		<>

			<section className='core-section-details'>
				<div className='container'>
					<div className='row'>
						{console.log(ApidataSecSection, "ApidataSecSectionApidataSecSection")}
						{/* <div className="col-lg-4 d-flex">
								<div className='core-bx w-100'>
									<img src='/images/competencies04.jpeg' alt='img' className='img-fluid' />
									<a href='#'>
										<h3>Self-Directed Interactive Training (SDIT)</h3>
									</a>
									<div className='arrow-top'>
										<img src='/images/arrow-top.svg' alt='Arrow Top' className='img-fluid' />
									</div>
								</div>
							</div>
							<div className="col-lg-4 d-flex">
								<div className='core-bx w-100'>
									<img src='/images/competencies05.png' alt='img' className='img-fluid' />
									<a href='#'>
										<h3>Instructor-Facilitated Interactive Training (IFIT)</h3>
									</a>
									<div className='arrow-top'>
										<img src='/images/arrow-top.svg' alt='Arrow Top' className='img-fluid' />
									</div>
								</div>
							</div>
							<div className="col-lg-4 d-flex">
								<div className='core-bx w-100'>
									<img src='/images/competencies06.png' alt='img' className='img-fluid' />
									<a href='#'>
										<h3>Mobile Learning</h3>
									</a>
									<div className='arrow-top'>
										<img src='/images/arrow-top.svg' alt='Arrow Top' className='img-fluid' />
									</div>
								</div>
							</div>
							<div className="col-lg-4 d-flex">
								<div className='core-bx heading-details w-100'>
									<h3>Diverse and Innovative Training Classified up to Top Secret</h3>
									<a href='#' className='btn btn-outline'>
										Learn More
									</a>
								</div>
							</div>
							<div className="col-lg-4 d-flex">
								<div className='core-bx w-100'>
									<img src='/images/competencies07.jpeg' alt='img' className='img-fluid' />
									<a href='#'>
										<h3>FLASH to HTML5 Conversion</h3>
									</a>
									<div className='arrow-top'>
										<img src='/images/arrow-top.svg' alt='Arrow Top' className='img-fluid' />
									</div>
								</div>
							</div>
							<div className="col-lg-4 d-flex">
								<div className='core-bx w-100'>
									<img src='/images/competencies08.jpeg' alt='img' className='img-fluid' />
									<a href='#'>
										<h3>SCORM, xAPI, & cmi5 Compliance</h3>
									</a>
									<div className='arrow-top'>
										<img src='/images/arrow-top.svg' alt='Arrow Top' className='img-fluid' />
									</div>
								</div>
							</div> */}
						{ApidataSecSection && ApidataSecSection?.map((ele, i) => {
							return (
								<>
									{i == 3 ?
										<>
											<div className="col-lg-4 d-flex">
												<div className='core-bx heading-details w-100'>
													<h3>Diverse and Innovative Training Classified up to Top Secret</h3>
													<a href='#' className='btn btn-outline'>
														Learn More
													</a>
												</div>
											</div>

										</>
										:
										<div className="col-lg-4 d-flex">
											<div className='core-bx w-100'>
												<img src={ele && (ele.image == "" ? '/images/competencies04.jpeg' :
													`${baseUrlPostGres()}/${ele.image}`)}
													alt='img' className='img-fluid' />
													
												{/* <img src='/images/competencies04.jpeg' alt='img' className='img-fluid' /> */}
												<a href='#'>
													<h3>{ele.tittle}</h3>
												</a>
												<div className='arrow-top'>
													<img src='/images/arrow-top.svg' alt='Arrow Top' className='img-fluid' />
												</div>
											</div>
										</div>
									}
								</>
							)
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default SecondScetion
