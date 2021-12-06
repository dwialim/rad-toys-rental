import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import Index from './views/Index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './assets/css/animate.css';
import './assets/css/chosen.min.css';
import './assets/css/dreaming-attribute.css';
import './assets/css/jquery.scrollbar.css';
import './assets/css/lightbox.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/megamenu.css';
import './assets/css/slick.min.css';
import './assets/css/style.css';

import './assets/js/jquery-1.12.4.min.js';
// import './assets/js/bootstrap.min.js';
import './assets/js/chosen.min.js';
import './assets/js/countdown.min.js';
import './assets/js/jquery.scrollbar.min.js';
import './assets/js/lightbox.min.js';
import './assets/js/magnific-popup.min.js';
import './assets/js/slick.min.js';
// import './assets/js/jquery.zoom.min.js';
import './assets/js/threesixty.min.js';
import './assets/js/jquery-ui.min.js';
import './assets/js/mobilemenu.js';
import './assets/js/functions.js';


// import font			from './assets/css/font-awesome.min.css';

// const cssStyles = {
// 	...animate,
// 	...bootstrap,
// 	...chosen,
// 	...dreaming,
// 	...jquery,
// 	...lightbox,
// 	...magnific,
// 	...megamenu,
// 	...slick,
// 	...style,
// }

//export default name(Table, cssStyles)

ReactDOM.render(
	<React.StrictMode>
	<Index />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// style.css, lightbox.min.css, chosen.min.css
reportWebVitals();
