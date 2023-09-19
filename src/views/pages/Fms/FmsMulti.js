import React, { useState, useEffect } from 'react';
import './Fms.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getApicalling } from '../../Apicalling/api';
import { Tab, Nav, TabContainer } from 'react-bootstrap';
import FmsTraining from '../../components/FmsTraining/FmsTraining';
import { baseUrlPostGres } from '../../components/constant';
import { Skeleton } from '@mui/material';

const FmsMulti = () => {
	const [Apidata, setApidata] = useState()
	useEffect(() => {
		console.log("apicalling", getApicalling("fms-multi").then(res => res.status && setApidata(res.success)))
	}, [])



	return (
		<>
		{Apidata ? 
			<>
			<section className='training-services-section fms-space-cyber-education'>
				<ul className='list-view'>
					{console.log(Apidata, "Apidata")}
					{Apidata && Apidata.map((ele, i) => {
						return (<>
							<li>
								<div className='image-list'>
									<img src={`${baseUrlPostGres()}/${Apidata && ele.image}`} alt='img' className='img-fluid' />
								</div>
								<div className='content-bx'>
									<div className='icon-bx'>
										{i == 0 ? <img src='/images/fms-space-gray.svg' alt='img' className='img-fluid' />
											: i == 1 ? <img src='/images/fms-cyber-gray.svg' alt='img' className='img-fluid' /> :
												<img src='/images/fms-education-gray.svg' alt='img' className='img-fluid' />}
									</div>
									<h3>
										{ele.tittle}
									</h3>
									<p>
										{ele.description}</p>
								</div>
							</li>
						</>)
					})}
				</ul>
			</section>
			</>: <Skeleton 
			sx={{ bgcolor: "grey" }}
			variant="rectangular"
			width="100%"
			height={1010}
			/>
			}
		</>
	);
}

export default FmsMulti
