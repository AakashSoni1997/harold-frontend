import React, { useState, useEffect } from 'react';
import Objectives from './Objectives';
import './SeaportE.scss';
import SeaportEASSURANCE from './SeaportEASSURANCE';
import SeaportEBanner from './SeaportEBanner';
import TeamMembers from './TeamMembers';
const SeaportE = () => {
	const [currentIndex, setCurrentIndex] = useState();
	const onClick = (id) => {
		if (currentIndex === id) {
			setCurrentIndex()
		} else {
			setCurrentIndex(id)
		}
	}

	const [width, setWidth] = useState(0);

	useEffect(() => {
		const handleWindowSizeChange = () => setWidth(window.innerWidth);
		handleWindowSizeChange();
		window.addEventListener("resize", handleWindowSizeChange);
		return () => window.removeEventListener("resize", handleWindowSizeChange);
	}, [width]);
	return (
		<>
			<SeaportEBanner />

			<section className='seaport-e-zone-map-section'>
				<div className='container-fluid'>
					<div className='section-title'>
						<h2>SEAPORT-NXG CONTRACTS</h2>
					</div>
				</div>
				<div className='container mt-5'>
					<div className='row'>
						<div className='section-title'>
							<h3 className='text-transform-unset'>SEAPORT-NXG ZONE MAP</h3>
							<p>
								AHA is operational in Zones 1 through 6.
							</p>
						</div>
					</div>
					<div className='row mt-5'>
						<div className='col-md-12 text-center'>
							<img src='/images/image-seaport-map.png' alt='SeaPort-NxG' className='img-fluid' />
						</div>
					</div>
				</div>
			</section>
			<SeaportEASSURANCE />
			<Objectives />
			<TeamMembers /> 


			<section className='services-contact-section'>
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

export default SeaportE