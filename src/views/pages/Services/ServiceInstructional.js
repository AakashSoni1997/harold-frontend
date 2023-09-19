import React, { useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { getApicalling, postApicalling } from '../../Apicalling/api';
import { Nav, Tab, TabContainer } from 'react-bootstrap';
import { Design } from '../../components/Design/Design';
import { baseUrlPostGres } from '../../components/constant';
import Parser from 'html-react-parser';
import { InstructionalServices } from '../../components/Design/Design';
import { Accordion } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import { Skeleton } from '@mui/material';
const ServiceInstructional = () => {
	const { id } = useParams();
	// console.log(id,"iddddddddddddddd213");
	const location = useLocation();
	const [Apidata, setApidata] = useState()

	useEffect(() => {
		console.log("apicalling", getApicalling("service-instructional").then(res => res.status && setApidata(res.success)))
	}, [])

	const [width, setWidth] = useState(0);

	useEffect(() => {
		const handleWindowSizeChange = () => setWidth(window.innerWidth);
		handleWindowSizeChange();
		window.addEventListener("resize", handleWindowSizeChange);
		return () => window.removeEventListener("resize", handleWindowSizeChange);
	}, [width]);

	useEffect(() => {
		const handleClickScroll = () => {
		  if (location) {
			const params1 = new URLSearchParams(window.location.search);
			const prams2 = params1.get("id");
			console.log("Fsdfsdfsfsdfs", params1.get("idconversion"));
			const element = document.getElementById(prams2);
			if (element) {
			  // 👇 Will scroll smoothly to the top of the next section
			  element.scrollIntoView({ behavior: "smooth" });
			}
		  }
		};
		if (Apidata) {
		  setTimeout(() => {
			handleClickScroll();
		  }, 500);
		}
	  }, [Apidata]);

	
	return (
		<>
		{Apidata ? 
			<>
				<div className='container'>
					<div className='section-title'>
						<h3 className='blueColorHeading'>INSTRUCTIONAL SERVICES</h3>
					</div>
				</div>
				{width >= 992 ?
					<div className='bg-363636 curve-design'>
						<div className='container'>
							<TabContainer id="design-tab" defaultActiveKey={0}>
								<div className='row align-items-center'>
									<div className='col-md-5'>
										<Nav variant="pills" className="flex-column">
											{Apidata && Apidata.map((ele, i) => {
												return (
													<>
														<Nav.Item>
															<Nav.Link eventKey={i}>{ele.tittle} </Nav.Link>
														</Nav.Item>
													</>
												)
											})}
										</Nav>
									</div>
									<div className='col-md-7 d-flex justify-content-center'>
										<Tab.Content className='d-flex justify-content-center'>
											{Apidata && Apidata.map((ele, i) => {
												return (
													<>
														<Tab.Pane eventKey={i}>
															<Design ImageUrl={ele.image ? `${baseUrlPostGres()}/${ele.image}` : "/images/Design_5.png"}
																DesignContent={Parser(ele.description)} />
														</Tab.Pane>
													</>
												)
											})}
										</Tab.Content>
									</div>
								</div>
							</TabContainer>
						</div>
					</div>
					:
					<div className='services-design-tab-mobile bg-363636 curve-design'>
						<Accordion defaultActiveKey="0" flush>

							{Apidata && Apidata.map((ele, i) => {
								return (
									<>
										<Accordion.Item eventKey={i}>
											<Accordion.Header>{ele.tittle}</Accordion.Header>
											<Accordion.Body>
												<InstructionalServices
													ImageUrl={ele.image ? `${baseUrlPostGres()}/${ele.image}` : "/images/Design_5.png"}
													InstructionalServicesList={Parser(ele.description)}
												/>
											</Accordion.Body>
										</Accordion.Item>
									</>
								)
							})}

						</Accordion>
					</div>
				}
				</>: <Skeleton 
			sx={{ bgcolor: "grey" }}
			variant="rectangular"
			width="100%"
			height={1080}
			/>
			}
		</>
	);
}

export default ServiceInstructional
