import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import { getApicalling, postApicalling } from '../../Apicalling/api';
import { baseUrlPostGres } from '../../components/constant';
import moment from 'moment';

const NewsBanner = () => {
	const [Apidata, setApidata] = useState()
	useEffect(() => {
		console.log("apicalling", postApicalling("/comman-page/news").then(res => res.status && setApidata(res.success)))
		// console.log("apicalling", getApicalling("comman-page/").then(res => res.status && setApidata(res.success)))
	}, [])
	return (
		<>
			<section className='banner-section' id="banner-section">
				<img src={Apidata && (Apidata.image == "" ? '/images/about-banner.jpg' :
					`${baseUrlPostGres()}/${Apidata.image}`)}
					alt='Banner' className='img-fluid' />
				<h1>{Apidata && Apidata.page_name}</h1>
			</section>

			<section className='repeat-section welcome-section-news'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<div className='section-title'>
								<p className='text-white'>
									{Apidata && Apidata.description}</p>
							</div>
						</div>
					</div>
				</div>
			</section>


		</>
	);
}

export default NewsBanner
