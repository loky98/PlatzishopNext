import React from 'react';

import Header from '_components/Header';
// introducir el header

const Layout = ({ children }) => {
	return (
		<div className="Layout">
		<Header />
			{children}
		</div>
	);
}

export default Layout;