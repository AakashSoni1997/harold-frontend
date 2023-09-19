import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './Home.scss';
import { getApicalling, postApicalling } from '../../Apicalling/api';
import { baseUrlPostGres } from '../../components/constant';
import LatestNews from './LatestNews';
const DemonstratedExperience = () => {
	const [Apidata, setApidata] = useState()
	useEffect(() => {
		console.log("apicalling", getApicalling("/home-dem-exprince").then(res => res.status && setApidata(res.success)))
	}, [])
	return (
		<>


			<div className="footer-bg">
				<footer className='aha-footer'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-6 footer-bx'>
								<div className='image-bx'>
									<img src={Apidata && (Apidata[0].image == "" ? '/images/foreign-military-icon.png' :
										`${baseUrlPostGres()}/${Apidata[0].image}`)}
										alt='img' className='img-fluid' />
								</div>
							</div>
							<div className='col-lg-6 footer-bx'>
								<h2>{Apidata && Apidata[0].tittle}</h2>
								<p>
									{Apidata && Apidata[0].description}
								</p>
								{/* <div className='view-more-work'>
									<a href='#'>View More of Our Work</a>
								</div> */}
							</div>
						</div>
						{/* <div className='row'>
							<div className='col-lg-5'>

							</div>
							<div className='col-lg-7'>
								<div className='partner-ship'>
									<h3>PROVEN PARTNERSHIPS</h3>
									<ul>
										{Apidata && Apidata[0].home_dem_experience_logos.map((ele, i) => {

											return (
												<>
													<li className='logos-item'>
														<img src={ele && (ele.icon == "" ?
															'/images/foreign-military-icon.png' :
															`${baseUrlPostGres()}/${ele.icon}`)}
															alt='img' className='img-fluid' />
													</li>
												</>
											)
										})}
									</ul>
								</div>
							</div>
						</div> */}
					</div>
				</footer>
			</div>

		</>
	);
}

export default DemonstratedExperience
