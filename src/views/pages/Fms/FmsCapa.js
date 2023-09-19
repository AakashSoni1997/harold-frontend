import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import './Fms.scss';
import { gsap } from 'gsap';
import { baseUrlPostGres } from '../../components/constant';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getApicalling } from '../../Apicalling/api';
import OwlCarousel from "react-owl-carousel";
import { Skeleton } from '@mui/material';
gsap.registerPlugin(ScrollTrigger);


const options = {
	items: 1,
	margin: 0,
	loop: true,
	center: true,
	autoplay: true,
	autoplayTimeout: 20000000,
	autoplayHoverPause: true,
	nav: true,
	dots: true,
	responsive: {
		0: {
			items: 1,
		},
		580: {
			items: 1,
		},
		992: {
			items: 1,
		},
	},
};


const FmsCapa = () => {
	const [Apidata, setApidata] = useState()
	useEffect(() => {
		console.log("apicalling", getApicalling("/fms-slider-cap").then(res => res.status && setApidata(res.success)))
	}, [])
	useLayoutEffect(() => {
		// if (Apidata) {
		// 	setTimeout(() => {
		// 		let sections = gsap.utils.toArray(".square");
		// 		const squareWidth = document.querySelector(".container-scroll").offsetWidth
		// 		gsap.to(sections, {
		// 			xPercent: -100 * (sections.length - 3.5),
		// 			ease: "none",
		// 			scrollTrigger: {
		// 				trigger: ".container-scroll",
		// 				pin: true,
		// 				markers: false,
		// 				scrub: 1,
		// 				// snap: 1 / (sections.length - 1),
		// 				start: "-90",
		// 				end: `+=${squareWidth}px`
		// 				// end: '+=700px'
		// 			}
		// 		});
		// 	}, [1000])
		// }

	}, []);

	return (
		<>
			{/* <Tween
				to={{
					x: '-100%',
					scrollTrigger: {
						trigger: '.square',
						start: '0% center',
						end: '0% center',
						scrub: 50,
						markers: true,
					},
				}}
			>
				<div className="square" style={{ width: '100px', height: '100px', background: '#ccc' }} />
			</Tween> */}
			{Apidata ? 
			<>
			<div className='container'>
				<div className='section-title'>
					<h2>CAPABILITIES</h2>
				</div>
				{Apidata && <OwlCarousel {...options} className="fms-slider">
					{Apidata &&
						Apidata.map((ele, i) => {
							return (
								<section className="square">
									<div className='capabilities-bx-item row align-items-center'>
										<div className="col-lg-6 order-1 order-lg-2">
											<div className='item-header bg-dark-square'>
												<div className='d-flex align-items-center'>
													<div className='icon-top-left'>
														{i == 0 ?
															<img src='/images/air-icon-fms.svg' />
															: i == 1 ?
																<img src='/images/land-icon-fms.svg' />
																: <img src='/images/sea-icon-fms.svg' />
														}
													</div>
													<h3>{ele.tittle} </h3>
												</div>
												<div className='item-title'>
													<p>
														{ele.description}
													</p>
												</div>
											</div>
										</div>
										<div className="col-lg-6 order-2 order-lg-1 padding-right-0">
											<div className='item-image'>

												<img src={ele && (ele.image == "" || ele.image == null ? '/images/logistics-capabilities.png' :
													`${baseUrlPostGres()}/${ele.image}`)}
													alt='Banner' className='img-fluid w-100' />
											</div>
										</div>
									</div>

								</section>
							)
						})
					}
				</OwlCarousel>}
			</div>
			</>: <Skeleton 
			sx={{ bgcolor: "grey" }}
			variant="rectangular"
			width="100%"
			height={707}
			/>
			}
			{/* <div className="container-scroll">
				{Apidata &&
					Apidata.map((ele, i) => {
						return (
							<>{
								i == 0 ?
									<>
										<section className="square">
											<div className='capabilities-bx-item'>
												<div className='item-header bg-dark-square'>
													<h3>{ele.tittle} </h3>
													<p>
														{ele.description}
													</p>
													<div className='icon-top-left'></div>
												</div>
												<div className='item-image'>

													<img src={ele && (ele.image == "" || ele.image == null ? '/images/logistics-capabilities.png' :
														`${baseUrlPostGres()}/${ele.image}`)}
														alt='Banner' className='img-fluid w-100' />
												</div>
											</div>
										</section>
										<section className="square">
											<div className='capabilities-bx-item'>
												<div className='item-header'>
													{console.log("fsdfhsjkdfsdfds", i, ele.tittle)}
													<h3>{ele.tittle} </h3>
													<p>
														{ele.description}
													</p>
													<div className='icon-top-left'></div>
												</div>
												<div className='item-image'>

													<img src={ele && (ele.image == "" || ele.image == null ? '/images/logistics-capabilities.png' :
														`${baseUrlPostGres()}/${ele.image}`)}
														alt='Banner' className='img-fluid w-100' />
												</div>
											</div>
										</section></>
									: i == 1 ?
										<section className="square">
											<div className='capabilities-bx-item'>
												<div className='item-header bg-light-square'>
													{console.log("fsdfhsjkdfsdfds", i, ele.tittle)}
													<h3>{ele.tittle} </h3>
													<p>
														{ele.description}
													</p>
													<div className='icon-top-left'></div>
												</div>
												<div className='item-image'>

													<img src={ele && (ele.image == "" || ele.image == null ? '/images/logistics-capabilities.png' :
														`${baseUrlPostGres()}/${ele.image}`)}
														alt='Banner' className='img-fluid w-100' />
												</div>
											</div>
										</section> : i == 2 ?
											<>	<section className="square">
												<div className='capabilities-bx-item'>
													<div className='item-header bg-dark-square'>
														<h3>{ele.tittle} </h3>
														<p>
															{ele.description}
														</p>
														<div className='icon-top-left'></div>
													</div>
													<div className='item-image'>

														<img src={ele && (ele.image == "" || ele.image == null ? '/images/logistics-capabilities.png' :
															`${baseUrlPostGres()}/${ele.image}`)}
															alt='Banner' className='img-fluid w-100' />
													</div>
												</div>
											</section>
												<section className="square">
													<div className='capabilities-bx-item'>
														<div className='item-header'>
															{console.log("fsdfhsjkdfsdfds", i, ele.tittle)}
															<h3>{Apidata[0].tittle} </h3>
															<p>
																{Apidata[0].description}
															</p>
															<div className='icon-top-left'></div>
														</div>
														<div className='item-image'>

															<img src={ele && (Apidata[0].image == "" || Apidata[0].image == null ? '/images/logistics-capabilities.png' :
																`${baseUrlPostGres()}/${Apidata[0].image}`)}
																alt='Banner' className='img-fluid w-100' />
														</div>
													</div>
												</section></>
											: ""}


							</>
						)
					})
				}
			</div> */}
			{/* <div className="container-scroll">
				<section className="square">
					<div className='capabilities-bx-item'>
						<div className='item-header bg-dark-square'>
							<h3>Sea </h3>
							<p>
								Regardless of the size or role of your naval forces, AHA can bolster your training and logistics programs and facilitate your ability to project your national interests across the sea.
							</p>
							<div className='icon-top-left'></div>
						</div>
						<div className='item-image'>
							<img src='/images/sea-slice-img.png' alt='Banner' className='img-fluid' />
						</div>
					</div>
				</section>
				<section className="square">
					<div className='capabilities-bx-item'>
						<div className='item-header'>
							<h3>Air </h3>
							<p>
								At AHA, we will help you modernize existing courseware or design new curriculum for effective operator and maintenance training programs that will facilitate your ability to project your airpower efficiently.
							</p>
							<div className='icon-top-left'></div>
						</div>
						<div className='item-image'>
							<img src='/images/air-slice-img.png' alt='Banner' className='img-fluid' />
						</div>
					</div>
				</section>
				<section className="square">
					<div className='capabilities-bx-item'>
						<div className='item-header bg-light-square'>
							<h3>Land </h3>
							<p>
								Our experienced global network of associates works tirelessly to ensure your training, maintenance, and logistics programs facilitate your ability to protect your borders and deploy in a time of emergency.
							</p>
							<div className='icon-top-left'></div>
						</div>
						<div className='item-image'>
							<img src='/images/land-slice-img.png' alt='Banner' className='img-fluid' />
						</div>
					</div>
				</section>
				<section className="square">
					<div className='capabilities-bx-item'>
						<div className='item-header bg-dark-square'>
							<h3>Sea </h3>
							<p>
								Regardless of the size or role of your naval forces, AHA can bolster your training and logistics programs and facilitate your ability to project your national interests across the sea.
							</p>
							<div className='icon-top-left'></div>
						</div>
						<div className='item-image'>
							<img src='/images/sea-slice-img.png' alt='Banner' className='img-fluid' />
						</div>
					</div>
				</section>
				<section className="square">
					<div className='capabilities-bx-item'>
						<div className='item-header'>
							<h3>Air </h3>
							<p>
								At AHA, we will help you modernize existing courseware or design new curriculum for effective operator and maintenance training programs that will facilitate your ability to project your airpower efficiently.
							</p>
							<div className='icon-top-left'></div>
						</div>
						<div className='item-image'>
							<img src='/images/air-slice-img.png' alt='Banner' className='img-fluid' />
						</div>
					</div>
				</section>
			</div> */}

		</>
	);
}

export default FmsCapa
