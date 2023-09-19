import React, { useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { getApicalling, postApicalling } from '../../Apicalling/api';
import { baseUrlPostGres } from '../../components/constant';
import { NavLink, useHistory } from 'react-router-dom';
import { Skeleton } from '@mui/material';
const CareerBanner = ({ Hello }) => {
	let navigate = useHistory()
	const [Apidata, setApidata] = useState()
	useEffect(() => {
		console.log("apicalling", postApicalling("/comman-page/career").then(res => res.status && setApidata(res.success)))
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
			height={748}
			/>
			}

			{Apidata ? 
			<>
			<section className='repeat-section welcome-section-careers'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<div className='section-title'>
								<p className=''>{Apidata && Apidata.description}</p>
								<div className='text-center job-opportunities-button'>
									{/* <a href='#' className='btn-outline'>VIEW OUR AVAILABLE JOB OPPORTUNITIES</a> */}
									<NavLink to="#" onClick={Hello} className='btn-outline'>VIEW OUR AVAILABLE JOB OPPORTUNITIES</NavLink>
									{/* <a href='' className='btn-outline'></a> */}
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
			height={462}
			/>
			}
		</>
	);
}

export default CareerBanner
