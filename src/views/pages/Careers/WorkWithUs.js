import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { getApicalling, postApicalling } from '../../Apicalling/api';
import { baseUrlPostGres } from '../../components/constant';
import moment from 'moment';
import Parser from 'html-react-parser';
import { Skeleton } from '@mui/material';
const WorkWithUs = () => {
	const [Apidata, setApidata] = useState()
	useEffect(() => {
		console.log("apicalling", getApicalling("career-work-list").then(res => res.status && setApidata(res.success)))
	}, [])
	return (
		<>
		
			{
				Apidata && Apidata.map((ele, i) => {
					return (
						i === 0 ?
							<section className='working-with-us-section'>
							{Apidata ? 
								<>
								<div className='container'>
									<div className='row align-items-center'>
										<div className='col-lg-5'>
											<img src={Apidata && (ele.image == "" ? '/images/career-work-with-us-image.png' :
												`${baseUrlPostGres()}/${ele.image}`)}
												alt='Banner' className='img-fluid w-100' />
										</div>
										<div className='col-lg-7 mt-lg-0 mt-5'>
											<div className='working-with-para'>
												<div className='section-title'>
													<h2>
														{Apidata && Parser(ele.tittle)}
													</h2>
												</div>

												{Apidata && Parser(ele.description)}
												<div className='button-sec'>
													<a href='/contact' className="btn btn-outline">CONTACT OUR TEAM</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								</>: <Skeleton 
								sx={{ bgcolor: "grey" }}
								variant="rectangular"
								width="100%"
								height={864}
								/>
								}
							</section> : i === 1 ?
								<div className='bg-top-15' id="benifits">
								{Apidata ? 
								<>
									<div className='container bg-gray-light'>
										<div className='row'>
											<div className='col-lg-5'>
												<img src={Apidata && (ele.image == "" ? '/images/career-benefits-image.png' :
													`${baseUrlPostGres()}/${ele.image}`)}
													alt='Banner' className='img-fluid w-100' />
											</div>
											<div className='col-lg-7 mt-lg-0 mt-5'>
												<div className='bx-benifits'>
													<h2>{Apidata && Parser(ele.tittle)}</h2>
													{Apidata && Parser(ele.description)}
												</div>
											</div>
										</div>
									</div>
									</>: <Skeleton 
								sx={{ bgcolor: "grey" }}
								variant="rectangular"
								width="100%"
								height={675}
								/>
								}
								</div> : i === 2 ?
									<section className='careers-military-section bg-top-15 mt-0' id="veterans">
									{Apidata ? 
									<>
										<div className='container'>
											<div className='row align-items-center'>
												<div className='col-lg-6 order-2 order-lg-1 mt-lg-0 mt-5'>
													<div className='bx-benifits'>
														<h2>{Apidata && Parser(ele.tittle)}</h2>
														{Apidata && Parser(ele.description)}
													</div>
												</div>
												<div className='col-lg-6 order-1 order-lg-2'>
													<img src={Apidata && (ele.image == "" ? '/images/career-benefits-image.png' :
														`${baseUrlPostGres()}/${ele.image}`)}
														alt='Banner' className='img-fluid w-100' />
												</div>
											</div>
										</div>
										</>: <Skeleton 
										sx={{ bgcolor: "grey" }}
										variant="rectangular"
										width="100%"
										height={900}
										/>
										}
									</section> : ""

					)
				})
			}

			
		</>
	);
}

export default WorkWithUs