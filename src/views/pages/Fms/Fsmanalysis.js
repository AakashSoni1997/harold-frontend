import React, { useState, useEffect } from 'react';
import './Fms.scss';
import { getApicalling } from '../../Apicalling/api';
import Parser from 'html-react-parser';
import { Skeleton } from '@mui/material';
const Fmsanalysis = () => {
	const [Apidata, setApidata] = useState()
	const [Contentdata, setContentdata] = useState()
	const [EventKey, setEventKey] = useState(1)
	useEffect(() => {
		console.log("apicalling", getApicalling("fms-analysis").then(res => res.status && setApidata(res.success)))
		handleTabChange(EventKey)
	}, [])


	const handleTabChange = (e) => {
		setEventKey(e)
		console.log("apicalling", getApicalling(`fms-experience/${e}`).then(res => res.status && setContentdata(res.success)))
	}

	return (
		<>
		{Apidata ? 
			<>
			<section className='foreign-section fms-training-capabilities'>
				<div className='container'>
					<div className='row justify-content-center align-items-center'>
						<div className='col-lg-3 '>
							<div className='image-list'>
								<img src='/images/fms-training.svg' alt='img' className='img-fluid' />
							</div>
						</div>
						<div className='col-lg-9'>
							<div className='content-bx'>
								<h3>
									{Apidata && Apidata[0].tittle}
								</h3>
								{Apidata && Parser(Apidata[0].description)}
								{/* dangerouslySetInnerHTML={{ __html: Apidata && Apidata[0].description }} */}
							</div>
						</div>
					</div>
				</div>
			</section>
			</>: <Skeleton 
			sx={{ bgcolor: "grey" }}
			variant="rectangular"
			width="100%"
			height={483}
			/>
			}
		</>
	);
}

export default Fmsanalysis
