import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './Home.scss';
import { getApicalling, postApicalling } from '../../Apicalling/api';
import { baseUrlPostGres } from '../../components/constant';
import Parser from 'html-react-parser';
const Minimizelogistical = () => {
	const [Apidata, setApidata] = useState()
	useEffect(() => {
		console.log("apicallingapicallingapicallingapicalling", getApicalling("home-min-logistical").then(res => res.success && setApidata(res.success)))
	}, [])
	const [width, setWidth] = useState(0);

	useEffect(() => {
		const handleWindowSizeChange = () => setWidth(window.innerWidth);
		handleWindowSizeChange();
		window.addEventListener("resize", handleWindowSizeChange);
		return () => window.removeEventListener("resize", handleWindowSizeChange);
	}, [width]);

	return (
		<>
			<section className='challenges-section'>
				<div className='left-image-fixed'>
					{/* <img src='/images/logistics-bg.png' alt='img' className='img-fluid' /> */}
					<img src={Apidata && (Apidata[0].image == "" ? '/images/logistics-bg.png' :
						`${baseUrlPostGres()}/${Apidata[0].image}`)}
						alt='img' className='img-fluid' />
				</div>
				{console.log(Apidata, "ApidataApidata")}
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='bg-e6e6e5 p-5 mb-5'>
								<div className='row justify-content-end'>
									<div className='col-md-8'>
										{Apidata && Parser(Apidata[0].first_description)}
										<div className='text-center'>
											<a href='/logistics' className='btn btn-outline mb-5'>EXPLORE LOGISTICS CAPABILITIES</a>
										</div>
									</div>
								</div>
							</div>

							<div className='bg-363636 glo-foreign p-5'>
								<div className='row justify-content-end'>
									<div className='col-lg-8 col-md-12'>

										{Apidata && Parser(Apidata[0].last_description)}
										<div className='glo-icons'>
											<ul>
												<li>
													<img src='/images/AHA_Website_Icons_air.png' alt='Air' className='img-fluid' />
													<span>Air</span>
												</li>
												<li>
													<img src='/images/AHA_Website_Icons_land.png' alt='Air' className='img-fluid' />
													<span>Land</span>
												</li>
												<li>
													<img src='/images/AHA_Website_Icons_sea.png' alt='Air' className='img-fluid' />
													<span>Sea</span>
												</li>
												<li>
													<img src='/images/AHA_Website_Icons_cyber.png' alt='Air' className='img-fluid' />
													<span>Cyber</span>
												</li>
												<li>
													<img src='/images/AHA_Website_Icons_space.png' alt='Air' className='img-fluid' />
													<span>Space</span>
												</li>
											</ul>
										</div>
										<div className='text-center'>
											<a href='/fms' className='btn btn-outline mb-5'>DISCOVER FMS OPPORTUNITIES</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{width < 992 ?
					<div className='right-image-fixed'>
						{/* <img src='/images/logistics-bg.png' alt='img' className='img-fluid' /> */}
						<img src={Apidata && (Apidata[0].image == "" ? '/images/logistics-bg.png' :
							`${baseUrlPostGres()}/${Apidata[0].image}`)}
							alt='img' className='img-fluid' />
					</div>
					:
					null
				}
			</section>
		</>
	);
}

export default Minimizelogistical
