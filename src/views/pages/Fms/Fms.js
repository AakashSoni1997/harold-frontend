import React, { useEffect, useState } from 'react';
import './Fms.scss';
import FmsCapa from './FmsCapa';
import FmsBanner from './FmsBanner';
import FmsNicheCapa from './FmsNicheCapa';
import Experience from './FmsExperience';
import Fmsanalysis from './Fsmanalysis';
import FmsMulti from './FmsMulti';
const Fms = () => {

	return (
		<>

			<FmsBanner />

			<section className='fms-capabilities-section' id="capabilities">
				<FmsCapa />
			</section>


			<FmsMulti />

			<Fmsanalysis />
			<FmsNicheCapa />

			<Experience />
			<section className='fms-contact-section'>
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

export default Fms
