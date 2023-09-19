import React, { useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { getApicalling, postApicalling } from '../../Apicalling/api';
import { baseUrlPostGres } from '../../components/constant';
import Parser from 'html-react-parser';
import { Skeleton } from '@mui/material';
const Capabilities = () => {
	const [Apidata, setApidata] = useState()
	useEffect(() => {
		console.log("apicalling", getApicalling("service-capabilities").then(res => res.status && setApidata(res.success)))
	}, [])

	return (
		<>
			{Apidata ? 
			<>
					<div className='container-fluid'>
						<div className='section-title'>
							<h2>{Apidata && Apidata[0].head_line ? Apidata[0].head_line : "CAPABILITIES"} </h2>
						</div>
					</div>
					<div className='container mt-5'>
						<div className='row'>
							<div className='section-title'>
								<h3 className='blueColorHeading'></h3>
							</div>
						</div>
						<div className='row'>
							<div className='section-title'>
								<h3 className='blueColorHeading'>{Apidata[0].tittle}</h3>

							</div>
						</div>
						<div className='row mt-7'>
							<div className='col-lg-4'>
								<img
									src={Apidata[0].image == "" || Apidata[0].image == null ? '/images/project-management.png' :
										`${baseUrlPostGres()}/${Apidata[0].image}`}
									alt='img' className='img-fluid' />	</div>
							<div className='col-lg-8 mt-lg-0 mt-5' >
								{Apidata && Parser(Apidata[0].description)}
								<div className='mt-5'>
									<a href='/contact' className='btn-outline border-dark-red-color'>Get in Touch</a>
								</div>
							</div>
						</div>
					</div>
			</>: <Skeleton 
			sx={{ bgcolor: "grey" }}
			variant="rectangular"
			width="100%"
			height={675}
			/>
			}

		</>
	);
}

export default Capabilities
