import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './News.scss';
import NewsBanner from './NewsBanner';
import RecentNews from './RecentNews.js';
import PastNews from './PastNews';
import { useParams } from 'react-router-dom';

const News = () => {
	const [currentIndex, setCurrentIndex] = useState();
	const onClick = (id) => {
		if (currentIndex === id) {
			setCurrentIndex()
		} else {
			setCurrentIndex(id)
		}
	}

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<NewsBanner />
			<section className='recent-news-section' id='recent-news-section'>
			<RecentNews />
			</section>
			<section className='past-news-section' id='past-news-section'>
			<PastNews />
			</section>


		</>
	);
}

export default News