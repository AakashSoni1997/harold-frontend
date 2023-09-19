import React, { useState, useEffect } from 'react';
import './Fms.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getApicalling } from '../../Apicalling/api';
import { Tab, Nav, TabContainer } from 'react-bootstrap';
import FmsTraining from '../../components/FmsTraining/FmsTraining';
import { baseUrlPostGres } from '../../components/constant';
import { Skeleton } from '@mui/material';

const Experience = () => {
	const [Apidata, setApidata] = useState()
	const [Contentdata, setContentdata] = useState()
	const [EventKey, setEventKey] = useState(1)
	useEffect(() => {
		console.log("apicalling", getApicalling("fms-experience-lists").then(res => res.status && setApidata(res.success)))
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
			<section className='fms-experience-section' id="experience">
				<div className='container-fluid'>
					<div className='section-title'>
						<h2>EXPERIENCE</h2>
					</div>

					<TabContainer id="lms-experience" defaultActiveKey={1}>
						<div className='row align-items-center'>
							<div className='col-md-12'>
								<div className='bx-shadow-design mb-5'>
									<Nav variant="pills" className="" onSelect={handleTabChange}>
										<Nav.Item  >
											<Nav.Link eventKey={1} value={1}>
												<div className='bg'>
													<img src='/images/air-icon-fms.svg' className='img-fluid' />
												</div>
												<p>{Apidata && Apidata[0].tittle}</p>
											</Nav.Link>
										</Nav.Item>
										<Nav.Item  >
											<Nav.Link eventKey={2} value={1}>
												<div className='bg'>
													<img src='/images/land-icon-fms.svg' className='img-fluid' />
												</div>
												<p>{Apidata && Apidata[1].tittle}</p>
											</Nav.Link>
										</Nav.Item>
										<Nav.Item  >
											<Nav.Link eventKey={3} value={1}>
												<div className='bg'>
													<img src='/images/sea-icon-fms.svg' className='img-fluid' />
												</div>
												<p>{Apidata && Apidata[2].tittle}</p>
											</Nav.Link>
										</Nav.Item>
										<Nav.Item >
											<Nav.Link eventKey={4} value={1}>
												<div className='bg'>
													<img src='/images/niche-icon-fms.svg' className='img-fluid' />
												</div>
												<p>{Apidata && Apidata[3].tittle}</p>
											</Nav.Link>
										</Nav.Item>

									</Nav>
								</div>
							</div>
						</div>
						<div className='row'>
							{console.log("VSDffsdfsdfsdfsdff", Contentdata)}
							<div className='col-md-12 conversion-content-bx'>
								<Tab.Content className=''>

									<Tab.Pane eventKey={EventKey}>
										<div className='row'>
											{Contentdata && Contentdata.map((ele, i) => {

												return (
													<>
														<FmsTraining IndexNumber={i + 1}
															FmsImageUrl={(ele.image == "" || ele.image == null ? '/images/niche-capabilities.jpg' :
																`${baseUrlPostGres()}/${ele.image}`)}
															FmsExperienceTitle={ele.tittle}
															FmsExperienceDescripition={ele.description} />
													</>
												)
											})}
										</div>
									</Tab.Pane>


								</Tab.Content>
							</div>
						</div>
					</TabContainer>

				</div>
			</section>
			</>: <Skeleton 
			sx={{ bgcolor: "grey" }}
			variant="rectangular"
			width="100%"
			height={1540}
			/>
			}
		</>
	);
}

export default Experience
