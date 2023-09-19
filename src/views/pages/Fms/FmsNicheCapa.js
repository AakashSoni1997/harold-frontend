import React, { useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { getApicalling } from '../../Apicalling/api';
import { baseUrlPostGres } from '../../components/constant';
import { Skeleton } from '@mui/material';
const FmsNicheCapa = () => {
	const [Apidata, setApidata] = useState()
	const [width, setWidth] = useState(0);

	useEffect(() => {
		console.log("apicalling", getApicalling("/fms-capabilities").then(res => res.status && setApidata(res.success)))
	}, [])

	useEffect(() => {
		const handleWindowSizeChange = () => setWidth(window.innerWidth);
		handleWindowSizeChange();
		window.addEventListener("resize", handleWindowSizeChange);
		return () => window.removeEventListener("resize", handleWindowSizeChange);
	}, [width]);

	return (
		<>
		{Apidata ? 
			<>
			<section className='niche-capabilities-section' id="niche-capabilities">
				{width >= 992 ?
					<div className='right-bg-image'>
						<img src={Apidata && (Apidata[0].image == "" || Apidata[0].image == null ? '/images/niche-capabilities.jpg' :
							`${baseUrlPostGres()}/${Apidata[0].image}`)}
							alt='image' className='img-fluid' />
					</div>
					:
					null
				}
				<div className='container'>
					<div className='row'>
						{width <= 991 ?
							<div className='col-md-12'>
								<div className='niche-mobile-capabilities'>
									<img src={Apidata && (Apidata[0].image == "" || Apidata[0].image == null ? '/images/niche-capabilities.jpg' :
										`${baseUrlPostGres()}/${Apidata[0].image}`)}
										alt='image' className='img-fluid' />
									<div className='border-design'>
										<h2>NICHE CAPABILITIES</h2>
									</div>
								</div>
							</div>
							:
							null
						}
						<div className='col-md-8'>
							<div className='section-title'>
								{width >= 992 ?
									<div className='border-design'>
										<h2>NICHE CAPABILITIES</h2>
									</div>
									:
									null
								}
								<p>{Apidata && Apidata[0].head_line}</p>
							</div>
						</div>
						<div className='col-md-8'>
							<div className='niche-capabilities-descripition' dangerouslySetInnerHTML={{ __html: Apidata && Apidata[0].description }}>
							</div>
						</div>
					</div>
				</div>
			</section>
			</>: <Skeleton 
			sx={{ bgcolor: "grey" }}
			variant="rectangular"
			width="100%"
			height={660}
			/>
			}
		</>
	);
}

export default FmsNicheCapa

