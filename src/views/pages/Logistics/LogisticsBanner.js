import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import { getApicalling, postApicalling } from '../../Apicalling/api';
import { baseUrlPostGres } from '../../components/constant';
import moment from 'moment';
import { Skeleton } from '@mui/material';

const LogisticsBanner = () => {
	const [Apidata, setApidata] = useState()
	useEffect(() => {
		console.log("apicalling", getApicalling("header-common-list/logistics").then(res => res.status && setApidata(res.success)))
		// console.log("apicalling", getApicalling("comman-page/").then(res => res.status && setApidata(res.success)))
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
			</>: <Skeleton 
			sx={{ bgcolor: "grey" }}
			variant="rectangular"
			width="100%"
			height={800}
			/>
			}
			{Apidata ? 
			<>
			<section className='repeat-section welcome-section-logistics'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<div className='section-title'>
								<p>{Apidata && Apidata.description}</p>
								<div className='text-center mt-7'>
									<a href='/pdf/2Pager_Logistics_2022-11-17.pdf' className='btn-outline' target="_blank">VIEW OUR Logistics DOCUMENT</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			</>: <Skeleton 
			sx={{ bgcolor: "grey" }}
			variant="rectangular"
			width="100%"
			height={570}
			/>
			}
		</>
	);
}

export default LogisticsBanner
