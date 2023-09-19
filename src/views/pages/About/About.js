import React from 'react';
import './About.scss';
import ExcutiveLeadresAbout from '../../components/ExcutiveLeadresAbout/ExcutiveLeadresAbout';
import CompanyMilestoneAbout from '../../components/CompanyMilestoneAbout/CompanyMilestoneAbout';
import AboutBanner from './AboutBanner';
import SecondSectionAbout from './SecondSection';
import OurCoreValues from './OurCoreValues';
import ContractVehicles from './ContractVehicles';
import SamAssersions from './SamAssersions';
import Directors from './Directors';
import ExecutiveLeaders from './ExecutiveLeaders';
import CompanyMilestone from "./CompanyMilestone"
const About = () => {
	return (
		<>
			<AboutBanner />
			<SecondSectionAbout />
			<OurCoreValues />
			<ContractVehicles />
			<SamAssersions />
			<section className='the-team-section'>
				<div className='container'>
					<div className='section-title'>
						<h2>THE TEAM</h2>
					</div>
				</div>
			</section>
			<ExecutiveLeaders />
			<Directors />
			<CompanyMilestone />
		</>
	);
}

export default About