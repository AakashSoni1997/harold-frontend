import React, { useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { getApicalling } from '../../Apicalling/api';
import { baseUrlPostGres } from '../../components/constant';
import ExperienceLogistics from '../../components/ExperienceLogistics/ExperienceLogistics';
import { RiArrowDownSLine } from "react-icons/ri";
import { useLocation } from 'react-router-dom';
import { Skeleton } from '@mui/material';
const Experience = () => {
	const [Apidata, setApidata] = useState()
	const [currentIndex, setCurrentIndex] = useState();
	const location = useLocation();

	useEffect(() => {
		console.log("apicalling", getApicalling("/logistics-exp").then(res => res.status && setApidata(res.success)))
	}, [])

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
			<section className='experience-section-logistics logistic-page-experience' id="experience">
				<div className='container-fluid'>
					<div className='section-title'>
						<h2>EXPERIENCE</h2>
					</div>
				</div>
				<div className='container-fluid'>
					<div className="row">
						{Apidata && Apidata.map((ele, i) => {
							console.log(ele, "FDfsdfsdfsdfdsfsdf")
							return (
								<>
									{i < 6 ?
										<div className='col-xl-4 col-lg-6 col-md-6 d-flex'>
											<ExperienceLogistics
											location={location.pathname}
												IndexNumber={i + 1}
												ImageUrl={`${baseUrlPostGres()}/${ele.image}`}
												ExperienceTitle={ele.tittle}
												ExperienceDescripition={ele.description}
												ExperienceFooter={ele.total_value} />
										</div>
										:
										<div className={currentIndex === 1 ? 'col-xl-4 col-lg-6 col-md-6 d-flex' :
											'col-xl-4 col-lg-6 col-md-6 d-flex d-none'}>
											<ExperienceLogistics
											location={location.pathname}
												IndexNumber={i + 1}
												ImageUrl={`${baseUrlPostGres()}/${ele.image}`}
												ExperienceTitle={ele.tittle}
												ExperienceDescripition={ele.description}
												ExperienceFooter={ele.total_value} />
										</div>
									}
								</>
							)
						})}
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

