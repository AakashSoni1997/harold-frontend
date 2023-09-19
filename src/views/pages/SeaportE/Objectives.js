import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import Parser from 'html-react-parser';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { getApicalling, postApicalling } from '../../Apicalling/api';
import { baseUrlPostGres } from '../../components/constant';
import moment from 'moment';

const Objectives = () => {
	const [Apidata, setApidata] = useState()
	useEffect(() => {
		// console.log("apicalling", postApicalling("/comman-page/seaport").then(res => res.status && setApidata(res.success)))
		console.log("apicalling", getApicalling("seaporte-objective").then(res => res.status && setApidata(res.success)))
	}, [])
	return (
		<>

			<section className='quality-objective-section'>
				<div className='container'>
					<div className='section-title'>
						<h2>Quality Objectives </h2>
						{Apidata && Parser(Apidata[0].head_line)}

					</div>
					<div className='row justify-content-center mt-7'>
						{Apidata && Apidata[0].seaporte_objective_details.map((ele, i) => {
							return (
								<>
									<div className='col-md-11 d-flex'>
										<div className='iconbox w-100'>
											<div className='icon'>
												{/* <img src={(ele.image == null ? '/images/quality-assurance.png' :
													`${baseUrlPostGres()}/${ele.image}`)}
													alt='Banner' className='img-fluid' style={{ height: "100%" }} /> */}
											</div>
											<div className='iconbox-content'>
												<p>
													{ele.description}	</p>
											</div>
										</div>
									</div>
								</>
							)
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default Objectives


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