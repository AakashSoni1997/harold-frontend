import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { getApicalling, postApicalling } from '../../Apicalling/api';
import { baseUrlPostGres } from '../../components/constant';
import moment from 'moment';
import { Skeleton } from '@mui/material';

const OurCoreValues = () => {
	const [Apidata, setApidata] = useState()

	useEffect(() => {
		console.log("apicalling", getApicalling("about-core").then(res => res.status && setApidata(res.success)))
	}, [])

	return (
		<>
			{Apidata ?
				<>
					<section className='about-core-value'>
						<div className='container'>
							<div className='row'>
								<div className='col-12'>
									<div className='section-title'>
										<h3>OUR CORE VALUES</h3>
										<p>AHA’s values guide not only how we conduct our work as a company or as individuals, but also how we live our lives.</p>
									</div>
								</div>
							</div>
							<div className='row'>
								{Apidata && Apidata.map((ele, i) => {
									return (
										<>
											<div className='col-lg-6 col-md-12 d-flex'>
												<div className='iconbox w-100'>
													<div className='icon'>
														
													</div>
													<div className='iconbox-content'>
														<h4>{ele.head_line}</h4>
														<p>
															{ele.description}
														</p>
													</div>
												</div>
											</div>
										</>
									)
								})}
							</div>
						</div>
					</section>
				</>: <Skeleton
					sx={{ bgcolor: 'grey.900' }}
					variant="rectangular"
					width="100%"
					height={796}
				/>
			}
		</>
	);
}

export default OurCoreValues
