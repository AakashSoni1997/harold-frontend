import React, { useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { getApicalling } from '../../Apicalling/api';
import Parser from 'html-react-parser';
import { Skeleton } from '@mui/material';
const NOTICE = () => {
	const [Apidata, setApidata] = useState()
	useEffect(() => {
		console.log("apicalling", getApicalling("career-notice").then(res => res.status && setApidata(res.success)))
	}, [])
	return (
		<>
		{Apidata ? 
			<>
			<section className='notice-section' id="notice">
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<div className='section-title mb-5'>
								<h4>Notice:</h4>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							{Apidata && Parser(Apidata[0].descrption)}
						</div>
					</div>
				</div>
			</section>
			</>: <Skeleton 
			sx={{ bgcolor: "grey" }}
			variant="rectangular"
			width="100%"
			height={1215}
			/>
			}
		</>
	);
}

export default NOTICE
