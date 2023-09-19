import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import Parser from 'html-react-parser';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { getApicalling, postApicalling } from '../../Apicalling/api';
import { baseUrlPostGres } from '../../components/constant';
import moment from 'moment';

const SeaportEBanner = () => {
	const [Apidata, setApidata] = useState()
	useEffect(() => {
		console.log("apicalling", postApicalling("/comman-page/seaport").then(res => res.status && setApidata(res.success)))
		// console.log("apicalling", getApicalling("comman-page/").then(res => res.status && setApidata(res.success)))
	}, [])
	return (
		<>
			<section className='banner-section'>
				<img src={Apidata && (Apidata.image == "" ? '/images/about-banner.jpg' :
					`${baseUrlPostGres()}/${Apidata.image}`)}
					alt='Banner' className='img-fluid' />
				<h1>{Apidata && Apidata.page_name}</h1>
			</section>
			<section className='repeat-section welcome-section-seaporte'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<div className='section-title'>
								{Apidata && Parser(Apidata.description)}
								<div className='text-center mt-7'>
									<a href='/contact' className='btn-outline'>CONTACT US FOR MORE INFORMATION</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default SeaportEBanner
