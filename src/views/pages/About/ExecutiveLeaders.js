import React, { useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { getApicalling } from '../../Apicalling/api';
import ExcutiveLeadresAbout from '../../components/ExcutiveLeadresAbout/ExcutiveLeadresAbout';
import { Skeleton } from '@mui/material';

const ExecutiveLeaders = () => {
	const [Apidata, setApidata] = useState()
	useEffect(() => {
		console.log("apicalling", getApicalling("about-core").then(res => res.status && setApidata(res.success)))
	}, [])
	return (
		<>
		{Apidata ?
			<>
			<section className='leaders-section' id="our-team">
				<div className='container'>
					<div className='section-title'>
						<h3>EXECUTIVE LEADERS</h3>
					</div>
					<ExcutiveLeadresAbout />
				</div>
			</section>
			</>: <Skeleton
					sx={{ bgcolor: 'grey.900' }}
					variant="rectangular"
					width="100%"
					height={596}
				/>
		}
		</>
	);
}

export default ExecutiveLeaders
