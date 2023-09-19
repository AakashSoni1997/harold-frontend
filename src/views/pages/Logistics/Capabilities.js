import React, { useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { getApicalling, postApicalling } from '../../Apicalling/api';
import { baseUrlPostGres } from '../../components/constant';
import Parser from 'html-react-parser';
import { Skeleton } from '@mui/material';
const Capabilities = () => {
	const [Apidata, setApidata] = useState()
	useEffect(() => {
		console.log("apicalling", getApicalling("/logistics-capabilities").then(res => res.status && setApidata(res.success)))
	}, [])
	return (
		<>
		{Apidata ? 
			<>
			<section className='capabilities-logistics-section' id="capabilities">
				<div className='container-fluid mt-5'>
					<div className='row'>
						<div className='section-title'>
							<h2 className='text-white'>{Apidata && Apidata[0].tittle}</h2>
						</div>
					</div>
				</div>
				<div className='container'>
					<div className='row mt-5'>
						<div className='col-lg-5 col-md-12'>
							<img src={Apidata && (Apidata.image == "" ? '/images/logistics-capabilities.png' :
								`${baseUrlPostGres()}/${Apidata[0].image}`)}
								alt='Banner' className='img-fluid w-100' />
						</div>
						<div className='col-lg-7 col-md-12 mt-lg-0 mt-5'>
							{/* {Apidata && Parser(Apidata[0].description)} */}
							{Apidata && Parser(Apidata[0].description)}
						</div>
					</div>
				</div>
			</section>
			</>: <Skeleton 
			sx={{ bgcolor: "grey" }}
			variant="rectangular"
			width="100%"
			height={911}
			/>
			}

		</>
	);
}

export default Capabilities

