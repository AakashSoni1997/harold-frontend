import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './Home.scss';
import { getApicalling, postApicalling } from '../../Apicalling/api';
import { baseUrlPostGres } from '../../components/constant';
import LatestNews from './LatestNews';
import DemonstratedExperience from './DemonstratedExperience';
import ContractVehicles from './ContractVehicles';
import Minimizelogistical from './_MinimizeLogistical';
import SupportServices from './SupportServices';
import CoreCompetencies from './CoreCompetencies';
import ForeignMilitary from './ForeignMilitary';
import { Skeleton } from '@mui/material';
const Home = () => {
	const [Apidata, setApidata] = useState()
	const [ApidataSecSection, setApidataSecSection] = useState()
	useEffect(() => {
		console.log("apicalling", postApicalling("/comman-page/home").then(res => res.status && setApidata(res.success)))
		console.log("apicalling", getApicalling("/middle-page").then(res => res.status && setApidataSecSection(res.success)))
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
			<section className='video-banner'>
				{Apidata && <>
					<video src={`${baseUrlPostGres()}/${Apidata && Apidata.image}`} muted autoPlay={"autoplay"} poster="" loop>video tag is not supported by your browser</video>
				{console.log(Apidata && Apidata.image,"Apidata213")}
				<h1>{Apidata && Apidata.page_name}</h1>
				</> }
				
			</section>
			<section className='repeat-section welcome-section-home'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-11'>
							<div className='section-title'>
								<h2>{Apidata && Apidata.head_line} </h2>
								<p>{Apidata && Apidata.description}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='training-services-section'>
				<ul className='list-view'>
					{ApidataSecSection ?
						ApidataSecSection.map((ele, i) => {
							console.log("fsdfghsdfshdfhfsdf", ele)
							return (
								<>
									<li>
										<div className='image-list'>
											<img src={`${baseUrlPostGres()}/${Apidata && ele.image}`} alt='img' className='img-fluid' />
										</div>
										<div className='content-bx'>
												<div className='icon-bx'>
													<img src={`${baseUrlPostGres()}/${Apidata && ele.icon}`} alt='img' className='img-fluid' />
												</div>
											<div className='fix-bottom-content'>
												<h3>
													{ele.page_name}
												</h3>
												<p>
													{ele.description}</p>
												<div className='codes'>
													<h4>
														NAICS Codes
													</h4>
													<p>
														{ele.naics_code}
													</p>
												</div>
												<div className='btn-bottom'>
													<a
														href={`${baseUrlPostGres()}/${ele.doc_pdf}`}
														theme="info"
														target="_blank"
													>{ele.page_name} Document <img src='/images/pdf-icon.png' alt='img' width={100} />

													</a>
												</div>
											</div>
										</div>
									</li>
								</>
							)
						}) :
						<>
							<li>
								<div className='image-list'>
									<Skeleton
										sx={{ bgcolor: 'grey.900' }}
										variant="rectangular"
										width="100%"
										height={425}
									/>
								</div>
								<div className='content-bx'>
									<Skeleton
										sx={{ bgcolor: 'grey.900' }}
										variant="rectangular"
										width="100%"
										height={639}
									/>
								</div>
							</li>
							<li>
								<div className='image-list'>
									<Skeleton
										sx={{ bgcolor: 'grey.900' }}
										variant="rectangular"
										width="100%"
										height={425}
									/>
								</div>
								<div className='content-bx'>
									<Skeleton
										sx={{ bgcolor: 'grey.900' }}
										variant="rectangular"
										width="100%"
										height={639}
									/>
								</div>
							</li>
							<li>
								<div className='image-list'>
									<Skeleton
										sx={{ bgcolor: 'grey.900' }}
										variant="rectangular"
										width="100%"
										height={425}
									/>
								</div>
								<div className='content-bx'>
									<Skeleton
										sx={{ bgcolor: 'grey.900' }}
										variant="rectangular"
										width="100%"
										height={639}
									/>
								</div>
							</li>
						</>}
				</ul>
			</section>
			<ForeignMilitary />
			<section className='core-section'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<div className='section-title text-white'>
								<h2>Core Competencies </h2>
								{width < 992 ?
									<p>
										Diverse and Innovative Training Classified up to Top Secret
									</p>
									:
									null
								}
							</div>
						</div>
					</div>
				</div>
			</section>
			<CoreCompetencies />
			<SupportServices />
			<Minimizelogistical />
			<ContractVehicles />
			<LatestNews />
			<DemonstratedExperience />
		</>
	);
}

export default Home
