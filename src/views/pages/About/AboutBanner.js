import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { getApicalling, postApicalling } from '../../Apicalling/api';
import { baseUrlPostGres } from '../../components/constant';
import moment from 'moment';
import { Skeleton } from '@mui/material';

const AboutBanner = () => {
	const [Apidata, setApidata] = useState()
	useEffect(() => {
		console.log("apicalling", postApicalling("/comman-page/about").then(res => res.status && setApidata(res.success)))
		// console.log("apicalling", getApicalling("comman-page/about").then(res => res.status && setApidata(res.success)))
	}, [])
	return (
		<>
			{Apidata ?
				<>
					<section className='banner-section'>
						<img src={Apidata && (Apidata.image == "" ? '/images/about-banner.jpg' :
							`${baseUrlPostGres()}/${Apidata.image}`)}
							alt='Banner' className='img-fluid' />
						<h1>{Apidata && Apidata.page_name}</h1>
					</section>

					<section className='repeat-section welcome-section-about'>
						<div className='container'>
							<div className='row'>
								<div className='col-12'>
									<div className='section-title'>
										<p dangerouslySetInnerHTML={{ __html: Apidata && Apidata.description }}></p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</>: <Skeleton
					sx={{ bgcolor: 'grey.900' }}
					variant="rectangular"
					width="100%"
					height={1460}
				/>
			}
		</>
	);
}

export default AboutBanner
