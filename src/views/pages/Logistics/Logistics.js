import React, { useState } from 'react';
import './Logistics.scss';
import ExperienceLogistics from '../../components/ExperienceLogistics/ExperienceLogistics';
import { RiArrowDownSLine } from "react-icons/ri";
import LogisticsBanner from './LogisticsBanner';
import Capabilities from './Capabilities';
import Experience from './Experience';

const Logistics = () => {
	const [currentIndex, setCurrentIndex] = useState();
	const onClick = (id) => {
		if (currentIndex === id) {
			setCurrentIndex()
		} else {
			setCurrentIndex(id)
		}
	}
	return (
		<>
			<LogisticsBanner />
			<Capabilities />
			<Experience />



			<section className='logistics-contact-section'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<h3>WE WANT TO WORK WITH YOU</h3>
							<a href='/contact' className='btn-outline'>Contact Us</a>
						</div>
					</div>
				</div>
			</section>

		</>
	);
}

export default Logistics