import React from 'react';
import Header from './../components/Headers/IndexHeader.js';
import IndexContent from './../components/Contents/IndexContent.js';

const Index = () => {
	return(
		<div className="wrapper">
			<Header />
			<IndexContent />
		</div>
	)
}

export default Index;