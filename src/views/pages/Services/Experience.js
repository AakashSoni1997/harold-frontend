import React, { useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { getApicalling } from '../../Apicalling/api';
import ExperienceTraining from '../../components/ExperienceTraining/ExperienceTraining';
import { RiArrowDownSLine } from 'react-icons/ri';
import { baseUrlPostGres } from '../../components/constant';
import ExperienceLogistics from '../../components/ExperienceLogistics/ExperienceLogistics';
import { useLocation } from 'react-router-dom';
import { Skeleton } from '@mui/material';
const Experience = () => {
	const location = useLocation()
	const [Apidata, setApidata] = useState()
	useEffect(() => {
		console.log("apicalling", getApicalling("/service-experience").then(res => res.status && setApidata(res.success)))
	}, [])

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
		{Apidata ? 
			<>
			<section className='experience-section-services service-page-experience' id='experience'>
				<div className='container-fluid'>
					<div className='section-title'>
						<h2>EXPERIENCE</h2>
					</div>
					<div className='row'>
						{
							Apidata && Apidata.map((ele, i) => {
								return (
									<>

										{i < 6 ?
											<div className='col-xl-4 col-lg-6 col-md-6 d-flex'>
												<ExperienceLogistics
												location={location.pathname}
													ImageUrl={ele.image == "" || ele.image == null ? "/images/Design_5.png" :
														`${baseUrlPostGres()}/${ele.image}`}
													ExperienceTitle={ele.tittle}
													ExperienceDescripition={ele.description}
													ExperienceFooter={ele.total_value} /></div> : ""}
									</>
								)
							})
						}

					</div>

					<div className={currentIndex === 1 ? 'row show-experience' : 'row hide-experience'}>
						{
							Apidata && Apidata.map((ele, i) => {
								return (
									<>
										{i > 5 ?
											<div className='col-xl-4 col-lg-6 col-md-6 d-flex'>
												<ExperienceLogistics
												location={location.pathname}
													ImageUrl={ele.image == "" || ele.image == null ? "/images/Design_5.png" :
														`${baseUrlPostGres()}/${ele.image}`}
													ExperienceTitle={ele.tittle}
													ExperienceDescripition={ele.description}
													ExperienceFooter={ele.total_value} /></div>
											: ""}
									</>
								)
							})
						}
					</div>

					<div className='row'>
						<div className='col-md-12'>
							<div className='see-more-experience'>
								<a className={currentIndex === 1 ? 'btn-outline with-arrow-down active' : 'btn-outline with-arrow-down'} onClick={() => onClick(1)}>{currentIndex == 1 ? "See Less" : "See More"} <RiArrowDownSLine /></a>
							</div>
						</div>
					</div>
				</div>
			</section>
			</>: <Skeleton 
			sx={{ bgcolor: "grey" }}
			variant="rectangular"
			width="100%"
			height={1526}
			/>
			}
		</>
	);
}

export default Experience
