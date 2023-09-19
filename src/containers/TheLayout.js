import React, { useEffect } from 'react';
import { TheHeader, TheContent } from './index';
import Footer from '../views/components/Footer/Footer';
import { useLocation } from 'react-router-dom';

export default function TheLayout() {

	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<>
			<TheHeader />
			<TheContent />
			<Footer />
		</>
	);
};