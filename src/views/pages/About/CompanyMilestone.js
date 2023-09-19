import React, { useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { getApicalling } from '../../Apicalling/api';
import CompanyMilestoneAbout from '../../components/CompanyMilestoneAbout/CompanyMilestoneAbout';
import { Skeleton } from '@mui/material';


const CompanyMilestone = () => {
	const [Apidata, setApidata] = useState()
	useEffect(() => {
		console.log("apicalling", getApicalling("about-core").then(res => res.status && setApidata(res.success)))
	}, [])
	return (
		<>
		{Apidata ?
			<>
				<section className='company-milestones-section' id='milestones'>
					<div className='container'>
						<div className='section-title'>
							<h2>COMPANY MILESTONES</h2>
						</div>
					</div>
					<div className='milestone-slider'>
						<CompanyMilestoneAbout />
					</div>
					<div className='container'>
						<div className='text-center mt-7'>
							<a href='/news' className='btn-outline w-50 mobile-width-100'>LATEST NEWS</a>
						</div>
					</div>
				</section>
			</>: <Skeleton
					sx={{ bgcolor: 'grey.900' }}
					variant="rectangular"
					width="100%"
					height={1436}
				/>
		}
		</>
	);
}

export default CompanyMilestone
