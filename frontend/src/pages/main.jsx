import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Landing from './Landing.jsx';
import Aboutme from './Aboutme.jsx';
import Error from './Error.jsx';

import '../styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route path = "/" element = {<Landing />}></ Route>
			<Route path = "/aboutme" element = {<Aboutme />}></ Route>
			<Route path = "/*" element = {<Error />}></ Route>
		</Routes>
	</ BrowserRouter>
);
