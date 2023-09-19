import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import Parser from 'html-react-parser';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { getApicalling, postApicalling } from '../../Apicalling/api';
import { baseUrlPostGres } from '../../components/constant';
import moment from 'moment';

const SeaportEASSURANCE = () => {
	const [Apidata, setApidata] = useState()
	useEffect(() => {
		// console.log("apicalling", postApicalling("/comman-page/seaport").then(res => res.status && setApidata(res.success)))
		console.log("apicalling", getApicalling("seaporte-quality-assurance").then(res => res.status && setApidata(res.success)))
	}, [])
	return (
		<>
			<section className='quality-assurance-program-section'>
				<div className='container-fluid'>
					<div className='section-title'>
						<h2>QUALITY ASSURANCE PROGRAM</h2>
					</div>
				</div>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-md-12'>
							<div className='quality-assurance-image'>
								<img src={Apidata && (Apidata[0].image == null ? '/images/quality-assurance.png' :
									`${baseUrlPostGres()}/${Apidata[0].image}`)}
									alt='Banner' className='img-fluid' />
								<div className='quality-assurance-image-content'>
									<h3>{Apidata && Apidata[0].head_line}</h3>
								</div>
							</div>
						</div>
						<div className='col-md-11'>
							<div className='row'>
								{Apidata && Parser(Apidata[0].description)}

							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default SeaportEASSURANCE


// <div className='col-md-6'>
// <p>
// 	As a client-driven and product-focused organization, AHA is dedicated to meeting or exceeding our customers’ requirements in every instance. We will maintain leading edge capabilities with trained, experienced, and skilled personnel, supported by the most modern technologies and methods, and we will apply those skills in the most efficient manner possible to ensure our customers' success. We will remain attuned to our customers by actively soliciting feedback and using that information to increase their level of satisfaction with our products. By leveraging the knowledge, skills, and ingenuity of our employees at every level of the organization and by embracing the principles of continuous improvement, we will achieve the most effective, efficient, and profitable approach to the attainment of quality.
// </p>
// </div>
// <div className='col-md-6'>
// <p>
// 	Policy outcome is ensured through implementation of a quality program employing policies and procedures that comply with ISO 9001:2008. Company-wide quality objectives have been derived from the Quality Policy to meet basic requirements for exceeding customers' expectations, providing quality services and products, recruiting and retaining only the highest caliber employees, meeting all schedule requirements for customer deliverables and services, and pursuing continual improvement.
// </p>
// </div>