import React, { useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { getApicalling } from '../../Apicalling/api';
import { baseUrlPostGres } from '../../components/constant';
import { Skeleton } from '@mui/material';
const Directors = () => {
	const [Apidata, setApidata] = useState()

	useEffect(() => {
		console.log("apicalling", getApicalling("about-director").then(res => res.status && setApidata(res.success)))
	}, [])

	return (
		<>
			{Apidata ?
				<>

				<section className='directors-section'>
					<div className='container'>
						<div className='sparator-line'></div>
						<div className='section-title'>
							<h3>DIRECTORS</h3>
						</div>
						<div className='row justify-content-center'>
							<div className='col-10'>
								<div className='row'>
									{Apidata && Apidata.map((ele, i) => {
										return (
											<>
												<div className='col-lg-4 col-md-6 col-6'>
													<div className='director-bx'>
														<img src={Apidata && (ele.image == "" ? '/images/about-banner.jpg' :
															`${baseUrlPostGres()}/${ele.image}`)}
															alt='Banner' className='img-fluid' />
														<div className='director-profile-details'>
															<h4>{ele.director_name} </h4>
															<p>{ele.designation}</p>
															<a href={ele.linkedin_url} className='linkedin-icon' target="_blank">
																<img src='/images/linkedin-icon-dark.svg' alt='linkedin' className='img-fluid' />
															</a>
														</div>
													</div>
												</div>
											</>
										)
									})}
									{/* <div className='col-md-4'>
										<div className='director-bx'>
											<img src='/images/bob-jorge.jpg' alt='Director' className='img-fluid' />
											<div className='director-profile-details'>
												<h4>Ed O'Donnell</h4>
												<p>Capture</p>
												<a href="#" className='linkedin-icon'>
													<img src='/images/linkedin-icon-dark.svg' alt='linkedin' className='img-fluid' />
												</a>
											</div>
										</div>
									</div>
									<div className='col-md-4'>
										<div className='director-bx'>
											<img src='/images/bob-jorge.jpg' alt='Director' className='img-fluid' />
											<div className='director-profile-details'>
												<h4>Michael S. McCullough (Colonel, ret.)</h4>
												<p>Foreign Military Sales Division</p>
												<a href="#" className='linkedin-icon'>
													<img src='/images/linkedin-icon-dark.svg' alt='linkedin' className='img-fluid' />
												</a>
											</div>
										</div>
									</div>

									<div className='col-md-4'>
										<div className='director-bx'>
											<img src='/images/holly-marrow.jpg' alt='Director' className='img-fluid' />
											<div className='director-profile-details'>
												<h4>Holly Morrow</h4>
												<p>Human Resources</p>
												<a href="#" className='linkedin-icon'>
													<img src='/images/linkedin-icon-dark.svg' alt='linkedin' className='img-fluid' />
												</a>
											</div>
										</div>
									</div>
									<div className='col-md-4'>
										<div className='director-bx'>
											<img src='/images/bob-jorge.jpg' alt='Director' className='img-fluid' />
											<div className='director-profile-details'>
												<h4>Robert Murdoch</h4>
												<p>Creative Director</p>
												<a href="#" className='linkedin-icon'>
													<img src='/images/linkedin-icon-dark.svg' alt='linkedin' className='img-fluid' />
												</a>
											</div>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</section>
				</>: <Skeleton
					sx={{ bgcolor: 'grey.900' }}
					variant="rectangular"
					width="100%"
					height={1344}
				/>
		}

		</>
	);
}

export default Directors
