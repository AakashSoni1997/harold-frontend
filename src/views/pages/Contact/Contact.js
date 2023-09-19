import React, { useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './Contact.scss';
import { FaRegUser } from 'react-icons/fa';
import { MdOutlineMail, MdLocationPin } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { baseUrlPostGres } from "../../components/constant/index"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MOBILE_NUMBER_REGEX, EMAIL_REGEX } from "../../utils/ValidationRegex"
import TextErrorMsg from "../../components/TextErrorMsg/TextErrorMsg"
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Parser from 'html-react-parser';
import { getApicalling, postApicalling } from '../../Apicalling/api';

toast.configure();

const CustomInputComponent = (props) => (
	<textarea className="my-custom-input" type="text" {...props} />
);

const Contact = () => {
	const [Apidata, setApidata] = useState()
	useEffect(() => {
		console.log("apicalling", getApicalling("contact-us-page-view").then(res => res.status && setApidata(res.success)))
	}, [])

	
	useEffect(() => {
		let data =Apidata && 	( Parser(Apidata[0]?.address)[0].props.children[0] + 	 Parser(Apidata[0]?.address)[0].props.children[2])
		console.log("Fsfjsdfjsdfs" , data);
	}, [Apidata])

	const LoginValidationSchema = Yup.object({
		name: Yup.string().max(50, "Maximum length should be 50.").required('Name field is Required.'),
		phone: Yup.string().min(10).max(12).matches(MOBILE_NUMBER_REGEX, 'Phone number is not valid.').required('Phone number field is Required.'),
		email: Yup.string().matches(EMAIL_REGEX, 'Email field is not valid.').required('Email is Required.'),
		more_info: Yup.string().required('Information field is Required.'),
		designation: Yup.string().required('Designation filed Required.'),
	});

	const handleLoginSubmit = (value) => {
		console.log("dasdsadasdsad", value);
		postApicalling("/contact-us-form-fill", value).then((response) => {
			console.log("asdasdasdsad", response);
			toast.success(response.success)
		})
	}


	function formatPhoneNumber(phoneNumberString) {
		var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
		var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
		if (match) {
			var intlCode = (match[1] ? '+1 ' : '');
			return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
		}
		return null;
	}
	console.log("formatPhoneNumber('+12345678900')", formatPhoneNumber('+12345678900'));
	return (
		<>
		<spna>hello</spna>
			<section className='banner-section'>
				<img src={`${baseUrlPostGres()}/${Apidata && Apidata[0].image}`} alt='img' className='img-fluid' />
				<h1>Contact Us</h1>
			</section>
			{console.log(Apidata)}
			<section className='repeat-section contact-form-section'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<div className='bg-sky-blue'>
								<div className='row align-items-center'>
									<div className='col-lg-4'>
										<div className='left-dark-bx'>
											<div className='icon'>
												<img
													src={`${baseUrlPostGres()}/${Apidata && Apidata[0].icon}`}
													alt='IIconmage' className='img-fluid' />
											</div>
											<ul>
												<li>
													<div className='icon-bx'>
														<FaRegUser />
													</div>
													<div className='contact-details'>
														<h4>Point of Contact</h4>
														<a target="_blank" href='https://www.linkedin.com/in/andy-harold-421bb2/'>{Apidata && Apidata[0].poc}</a>
													</div>
												</li>
												<li>
													<div className='icon-bx'>
														<MdOutlineMail />
													</div>
													<div className='contact-details'>
														<h4>EMAIL</h4>
														<a href={`mailto:${Apidata && Apidata[0].email}`}>{Apidata && Apidata[0].email}</a>
													</div>
												</li>
												<li>
													<div className='icon-bx'>
														<FiPhone />
													</div>
													<div className='contact-details'>
														<h4>Phone</h4>
														<a href={`tel:${Apidata && Apidata[0].phone}`}>{Apidata && Apidata[0].phone}</a>
													</div>
												</li>
												<li>
													<div className='icon-bx'>
														<MdLocationPin />
													</div>
													<div className='contact-details'>
														<h4>ADDRESS</h4>
															{/* {console.log("Fsdfsdfsdf" , Apidata && Parser(Apidata[0].address))} */}
														<a href={`http://maps.google.com/?q=${Apidata && 	( Parser(Apidata[0]?.address)[0].props.children[0] + 	 Parser(Apidata[0]?.address)[0].props.children[2])}`} target="_blank" dangerouslySetInnerHTML={{__html:Apidata && Apidata[0].address}}></a>
													</div>
												</li>
											</ul>
										</div>
									</div>

									<div className='col-lg-6 margin-left-custom'>
										<Formik
											initialValues={{
												name: "",
												phone: "",
												email: "",
												more_info: "",
												designation: ""
											}}
											validationSchema={LoginValidationSchema}
											onSubmit={handleLoginSubmit}
										>
											{formik => {
												return (
													<Form>
														<div className='contact-form'>
															<h2>REQUEST INFORMATION</h2>

															<div className="form-group">
																<label htmlFor="" className="form-label">Name</label>
																<Field name="name" className="form-control" type="text" placeholder='Type Here...' aria-describedby="" autoComplete="off" />
																<ErrorMessage name="name" component={TextErrorMsg} />
															</div>
															<div className="form-group">
																<label htmlFor="" className="form-label">Phone</label>
																<Field name="phone" className="form-control" type="text" placeholder='Type Here...' aria-describedby="" autoComplete="off" />
																<ErrorMessage name="phone" component={TextErrorMsg} />
															</div>
															<div className="form-group">
																<label htmlFor="" className="form-label">Email</label>
																<Field name="email" className="form-control" type="text" placeholder='Type Here...' aria-describedby="" autoComplete="off" />
																<ErrorMessage name="email" component={TextErrorMsg} />
															</div>
															<div className="form-group">
																<label htmlFor="" className="form-label">More Info</label>
																<Field name="more_info" as={CustomInputComponent} className="form-control" type="text" placeholder='Type Here...' aria-describedby="" autoComplete="off" />
																<ErrorMessage name="more_info" component={TextErrorMsg} />
															</div>
															<div className="form-group mt-5">
																<Field component="div" name="designation">
																	<div className='row'>
																		<div className='col-lg-4 col-6'>
																			<label className="checkbox-btn">
																				<input name="designation" type="radio" value="TRAINING" className="form-check-input" autoComplete="off" />

																				<span>
																					<i></i>
																					TRAINING
																				</span>
																			</label>
																		</div>

																		<div className='col-lg-4 col-6'>
																			<label className="checkbox-btn">
																				<input name="designation" value="SERVICES" type="radio" className="form-check-input" autoComplete="off" />
																				<span>
																					<i></i>
																					SERVICES
																				</span>
																			</label>
																		</div>
																		<div className='col-lg-4 col-6'>
																			<label className="checkbox-btn">
																				<input name="designation" value="FMS" type="radio" className="form-check-input" autoComplete="off" />
																				<span>
																					<i></i>
																					FMS
																				</span>
																			</label>
																		</div>
																		<div className='col-lg-4 col-6'>
																			<label className="checkbox-btn">
																				<input name="designation" value="BUSINESS" type="radio" className="form-check-input" autoComplete="off" />
																				<span>
																					<i></i>
																					BUSINESS DEVELOPMENT
																				</span>
																			</label>
																		</div>
																		<div className='col-lg-4 col-6'>
																			<label className="checkbox-btn">
																				<input name="designation" value="HR" type="radio" className="form-check-input" autoComplete="off" />																				<span>
																					<i></i>
																					HR
																				</span>
																			</label>
																		</div>

																	</div>
																</Field>
																<ErrorMessage name="designation" component={TextErrorMsg} />
															</div>
															<div className='text-center'>
																<button type="submit"
																	disabled={!formik.isValid}
																	className="btn btn-outline">Submit</button>
															</div>
														</div>
													</Form>
												)
											}}
										</Formik>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	);
}

export default Contact
