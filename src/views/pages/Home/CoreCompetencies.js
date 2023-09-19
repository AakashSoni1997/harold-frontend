import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './Home.scss';
import { getApicalling, postApicalling } from '../../Apicalling/api';
import { baseUrlPostGres } from '../../components/constant';
import LatestNews from './LatestNews';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
const CoreCompetencies = () => {
	const [ApidataSecSection, setApidataSecSection] = useState()
	useEffect(() => {
		console.log("apicalling", getApicalling("/home-core").then(res => res.status && setApidataSecSection(res.success)))
	}, [])

	const [width, setWidth] = useState(0);

	useEffect(() => {
		const handleWindowSizeChange = () => setWidth(window.innerWidth);
		handleWindowSizeChange();
		window.addEventListener("resize", handleWindowSizeChange);
		return () => window.removeEventListener("resize", handleWindowSizeChange);
	}, [width]);

	const options = {
		items: 1,
		margin: 20,
		loop: true,
		center: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			480: {
				items: 1,
			},
			992: {
				items: 1,
				margin: 20,
			}
		}
	};

	return (
		<>
			{width >= 992 ?
				<section className='core-section-details'>
					<div className='container'>
						<div className='row'>
							{console.log(ApidataSecSection, "ApidataSecSectionApidataSecSection")}
							{ApidataSecSection && ApidataSecSection?.map((ele, i) => {
								return (
									<>
										{i == 3 ?
											<>
												<div className="col-lg-4 d-flex">
													<div className='core-bx heading-details w-100'>
														<h3>Diverse and Innovative Training Classified up to Top Secret</h3>
														<a href='/training' className='btn btn-outline'>
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
													{/* <NavHashLink to={i===4  ?`/training/${i+1}#conversion-section` :`/training/${i+1}#development-section`}> */}
													<NavHashLink to={
														i === 0 ? `/training/1?id=development-section` : 
													    i === 1 ? `/training/0?id=development-section` :
													    i === 2 ? `/training/4?id=development-section` :
													    i === 5 ? `/training/7?id=development-section` :
													    i === 4 ? `/training/3?id=conversion-section` :""
												}>
														
														<h3>{ele.tittle}</h3>
													</NavHashLink>
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
				:
				null
			}
			{width < 992 ?
				<section className='core-section-details slider-m'>
					<div className='container'>
						<div className='row'>
							<OwlCarousel {...options}>

								{console.log(ApidataSecSection, "ApidataSecSectionApidataSecSection")}
								{ApidataSecSection && ApidataSecSection?.map((ele, i) => {
									return (
										<>
											{i == 3 ?
												<>
												</>
												:
												<div className='item d-flex'>
													<div className='core-bx w-100'>
														<img src={ele && (ele.image == "" ? '/images/competencies04.jpeg' :
															`${baseUrlPostGres()}/${ele.image}`)}
															alt='img' className='img-fluid' />
														{/* <img src='/images/competencies04.jpeg' alt='img' className='img-fluid' /> */}
														<NavHashLink to={
														i === 0 ? `/training/1?id=development-section` : 
													    i === 1 ? `/training/0?id=development-section` :
													    i === 2 ? `/training/4?id=development-section` :
													    i === 5 ? `/training/7?id=development-section` :
													    i === 4 ? `/training/3?id=conversion-section` :""
												}>
															<h3>{ele.tittle}</h3>
														</NavHashLink>
														<div className='arrow-top'>
															<img src='/images/arrow-top.svg' alt='Arrow Top' className='img-fluid' />
														</div>
													</div>
												</div>
											}
										</>
									)
								})}
							</OwlCarousel>
							<div className="col-lg-12 d-flex mt-5 mb-5">
								<div className='core-bx heading-details w-100'>
									<a href='/training' className='btn btn-outline'>
										Learn More
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				:
				null
			}
		</>
	);
}

export default CoreCompetencies
