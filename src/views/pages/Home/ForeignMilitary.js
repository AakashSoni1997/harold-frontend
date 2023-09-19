import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './Home.scss';
import { getApicalling, postApicalling } from '../../Apicalling/api';
import { baseUrlPostGres } from '../../components/constant';
import LatestNews from './LatestNews';
const ForeignMilitary = () => {
	const [Apidata, setApidata] = useState()
	useEffect(() => {
		console.log("apicalling", getApicalling("home-forigen").then(res => res.status && setApidata(res.success)))
	}, [])
	return (
		<>
			{Apidata &&
				<section className='foreign-section'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-10'>
								<div className='row'>
									<div className='col-lg-5'>
										<div className='image-list'>
											<img
												src={Apidata[0].image == "" ? '/images/home-fms-main.jpg' :
													`${baseUrlPostGres()}/${Apidata[0].image}`}
												alt='img' className='img-fluid w-100' />
											<div className='icon-bx'>
												<img src={Apidata[0].icon == "" ? '/images/foreign-military-icon.png' :
													`${baseUrlPostGres()}/${Apidata[0].icon}`} alt='img' className='img-fluid' />
											</div>
										</div>
									</div>
									<div className='col-lg-7'>
										<div className='content-bx'>
											<h3>
												{Apidata[0].tittle}
											</h3>
											<p>
												{Apidata[0].description}
											</p>
											<div className='btn-bottom'>
												<a href={Apidata[0].icon == "" ? "#" :
													`${baseUrlPostGres()}/${Apidata[0].doc_pdf}`} target="_blank">FMS Document <img src='/images/pdf-icon.png' alt='img' width={100} /></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>}
		</>
	);
}

export default ForeignMilitary
