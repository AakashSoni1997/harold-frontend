import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './Home.scss';
import { getApicalling, postApicalling } from '../../Apicalling/api';
import { baseUrlPostGres } from '../../components/constant';
import moment from 'moment';

const LatestNews = () => {
	const [Apidata, setApidata] = useState()

	useEffect(() => {
		console.log("apicalling", getApicalling("	letest_news").then(res => res.status && setApidata(res.success)))
	}, [])

	return (
		<>
			{console.log(Apidata, "ApidataApidataApidata")}
			{Apidata &&
				<section className='news-section'>
					<div className='container'>
						<div className='row'>
							<div className='col-12'>
								<div className='section-title text-color-orange mb-5'>
									<h2>Latest News</h2>
								</div>
							</div>
						</div>
						<div className='row'>
							{Apidata.map((ele, i) => {
								return (
									<>
										<div className='col-lg-4 col-md-6 d-flex'>
											<div className='featured-blog w-100'>
												<div className='featured-header'>
													<div className='featured-date'>
														{moment(ele.createdAt).format(" Do MMM")}

													</div>
													<div className='featured-image'>
														<img
															src={`${baseUrlPostGres()}/${Apidata && ele.image}`}
															alt='img' className='img-fluid' />
													</div>
												</div>
												<h3>{ele.head_line}</h3>
												<p>
													{ele.description}
												</p>
												<a href='#' className='read-more-btn'>Read More</a>
											</div>
										</div>
									</>
								)
							})}
						</div>
						<div className='row'>
							<div className='col-12 mt-7 mb-5 text-lg-end text-center'>
								<a href='#' className='btn-outline'>More News</a>
							</div>
						</div>
					</div>
				</section>
			}
		</>
	);
}

export default LatestNews
