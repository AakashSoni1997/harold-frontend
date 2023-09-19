import React, { useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { getApicalling, postApicalling } from '../../Apicalling/api';
import { Nav, Tab, TabContainer } from 'react-bootstrap';
import { Design } from '../../components/Design/Design';
import { baseUrlPostGres } from '../../components/constant';
import Parser from 'html-react-parser';
import { InstructionalServices } from '../../components/Design/Design';
import { Accordion } from 'react-bootstrap';
import { Skeleton } from '@mui/material';
const ServiceAdministrative = () => {
	const [Apidata, setApidata] = useState()
	console.log("administrative render");
	useEffect(() => {
		console.log("apicalling", getApicalling("service-administrative").then(res => res.status && setApidata(res.success)))
	}, [])

	const [width, setWidth] = useState(0);

	useEffect(() => {
		const handleWindowSizeChange = () => setWidth(window.innerWidth);
		handleWindowSizeChange();
		window.addEventListener("resize", handleWindowSizeChange);
		return () => window.removeEventListener("resize", handleWindowSizeChange);
	}, [width]);
	return (
		<>
		{Apidata ? 
			<>
			<section className='administriave-management-section' id="administriave-management">
				<div className='container'>
					<div className='section-title'>
						<h3 className='blueColorHeading'>ADMINISTRATIVE MANAGEMENT</h3>
					</div>
				</div>
			</section>
			<div className='container-fluid p-0 administriave-management'>
				<div className='row m-0'>
					<div className='col-md-6 d-flex p-0 order-1'>
						<img
							src={Apidata && (Apidata[0].image == "" || Apidata[0].image == null ? '/images/project-management.png' :
								`${baseUrlPostGres()}/${Apidata[0].image}`)}
							alt='img' className='img-fluid' />
					</div>
					<div className='col-md-6 d-flex p-0 order-2'>
						<div className='administriave-bx'>
							<h3>{Apidata && Apidata[0].tittle}</h3>
							<div dangerouslySetInnerHTML={{ __html: Apidata && Apidata[0].description }}></div>
						</div>



					</div>
					<div className='col-md-6 d-flex p-0 order-4 order-md-3'>
						<div className='administriave-bx' >
							<h3>{Apidata && Apidata[1].tittle}</h3>
							<div dangerouslySetInnerHTML={{ __html: Apidata && Apidata[1].description }}></div>

						</div>
					</div>
					<div className='col-md-6 d-flex p-0 order-3 order-md-4'>
						<img
							src={Apidata && (Apidata[1].image == "" || Apidata[1].image == null ? '/images/project-management.png' :
								`${baseUrlPostGres()}/${Apidata[1].image}`)}
							alt='img' className='img-fluid' />
					</div>
				</div>
			</div>
			
			</>: <Skeleton 
			sx={{ bgcolor: "grey" }}
			variant="rectangular"
			width="100%"
			height={1615}
			/>
			}

		</>
	);
}

export default ServiceAdministrative
