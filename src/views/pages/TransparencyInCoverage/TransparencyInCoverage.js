import React, { useState } from 'react';
import './TransparencyInCoverage.scss';

const TransparencyInCoverage = () => {
	return (
		<>
			<section className='banner-section'>
				<img src='/images/transparency-in-coverage-banner.jpg' alt='Banner' className='img-fluid' />
				<h1>Transparency In Coverage</h1>
			</section>

			<section className='repeat-section welcome-section-transparency-coverage'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<div className='section-title'>
								<p className=''>
									This link leads to the machine-readable files that are made available in response to the Federal Transparency in Coverage Rule and includes negotiated service rates and out-of-network allowed amounts between health plans and healthcare providers. The  machine-readable files are formatted to allow researchers, regulators, and application developers to more easily access and analyze data.
								</p>
								<div className='text-center mt-7'>
									<a href='https://health1.meritain.com/app/public/#/one/insurerCode=MERITAIN_I&brandCode=MERITAINOVER/machine-readable-transparency-in-coverage?reportingEntityType=TPA_18234&lock=true' className='btn-outline' target="_blank">Click Here</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	);
}

export default TransparencyInCoverage