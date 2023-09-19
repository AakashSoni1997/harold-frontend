import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import ContractBox from '../../components/ContractBox/ContractBox';
import { getApicalling, postApicalling } from '../../Apicalling/api';
import { baseUrlPostGres } from '../../components/constant';
import moment from 'moment';
import { Nav, Tab, TabContainer } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Skeleton } from '@mui/material';

const ContractVehicles = () => {
	const [Apidata, setApidata] = useState()
	const location = useLocation();


	useEffect(() => {
		console.log("apicalling", getApicalling("about-contract").then(res => res.status && setApidata(res.success)))
	}, [])

	useEffect(() => {
		const handleClickScroll = () => {
		  if (location) {
			const params1 = new URLSearchParams(window.location.search);
			const prams2 = params1.get("id")
			console.log("virajjjjjjjjjjjjjjjjjjjjjjj" , params1.get("id"));
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
				<section className='contract-about-section' id='contract-vehicles'>
					<div className='container'>
						<div className='row'>
							<div className='col-12'>
								<div className='section-title'>
									<h2>Contract Vehicles</h2>
								</div>
							</div>
						</div>

						<TabContainer id="contract-vehicles-tab" defaultActiveKey="first">
							<div className='row'>
								<div className='col-lg-6 col-md-12 mt-lg-0 mt-5'>
									{console.log(Apidata, "ApidataApidata")}
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
								<div className='col-lg-6 col-md-12 mt-lg-0 mt-5 d-flex justify-content-center'>
									<Tab.Content className='d-flex justify-content-center w-100'>
										{Apidata && Apidata.map((ele, i) => {
											return (
												<>
													<Tab.Pane eventKey={i}>
														<ContractBox contractData={ele.description} className={''} />
													</Tab.Pane>
												</>
											)
										})}

										{/* <Tab.Pane eventKey="first">
												<ContractBox data="Air Force Head Quarters (HQ) Air Education and Training Command (AETC) IDIQ" className={''} />
											</Tab.Pane>
											<Tab.Pane eventKey="second">
												<ContractBox contractTitle="Naval Training Products and Services (NTPS) Multiple Award Contract (MAC) Naval Education and Training Command (NETC)" contractList1="Professional, Technical, and Management Support" contractList2="Contract Number: N00189-17-D-Z008" className={''} />
											</Tab.Pane>
											<Tab.Pane eventKey="third">
												<ContractBox contractTitle="General Services Administration (GSA)" contractList1="Professional Services Schedule (PSS) " contractList2="Mission Oriented Business Integrated Services (MOBIS)" contractList3="Contract Number: GS-02F-038CA " contractList4="Federal Supply Group: 874 Class R499" contractList5="Special Item Number: SIN 874-4" className={''} />
											</Tab.Pane>
											<Tab.Pane eventKey="fourth">
												<ContractBox contractTitle="Pilot and Aircrew Curriculum Revision and Maintenance (PACRM) Indefinite Delivery/Indefinite Quantity (IDIQ)" contractList1="Professional, Technical, and Management Support " contractList2="Contract Number: N61340-12-D-7203 " className={''} />
											</Tab.Pane>
											<Tab.Pane eventKey="fifth">
												<ContractBox contractTitle="Seaport-e" contractList1="Engineering, Technical, and Programmatic Services " contractList2="Contract Number: N00178-14-D-7579-P00004" LinkUrl="/" LinkText="Learn more about our Seaport-e capabilites" className={''} />
											</Tab.Pane>
											<Tab.Pane eventKey="sixth">
												<ContractBox contractTitle="FAA Electronic Federal Aviation Administration Accelerated and Simplified Tasks (eFAST)" contractList1="Contract Number: 693KA922A000546" className={''} />
											</Tab.Pane> */}
									</Tab.Content>
								</div>
							</div>
						</TabContainer>
					</div>
				</section>
			</>: <Skeleton
					sx={{ bgcolor: 'grey.900' }}
					variant="rectangular"
					width="100%"
					height={769}
				/>
		}

		</>
	);
}

export default ContractVehicles
