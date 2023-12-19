import {useState, useEffect} from 'react';

import LightSwitch from '../components/LightSwitch.jsx';

import '../styles/App.css';
import '../styles/Themes.css';

function App(){
	const [theme, setTheme] = useState("light-mode");

	const setLight = () => {
		setTheme("light-mode");
	}

	const setDark = () => {
		setTheme("dark-mode");	
	}

	let themeSwap = null;

	if(theme == "light-mode"){
		themeSwap = setDark;	
	}else if(theme == "dark-mode"){
		themeSwap = setLight;
	}

	return(
		<div>
			<div id = "app-container" className = {theme}>
				<div id = "theme-selector-container">
					<LightSwitch onClick = {themeSwap}/>	
				</div>

				<div id = "page-container">
					
				</div>
			</div>
		</div>
	);
}

export default App;
