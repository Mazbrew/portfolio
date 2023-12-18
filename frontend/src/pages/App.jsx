import {useState, useEffect} from 'react';

import '../styles/App.css';
import '../styles/Themes.css';

function App(){
	const [theme, setTheme] = useState("light-mode");

	const updateTheme = () => {
		if(theme == "light-mode"){
			setTheme("dark-mode");
		}else if(theme == "dark-mode"){
			setTheme("light-mode");
		}
	}	

	return(
		<div>
			<div id = "app-container" className = {theme}>
				<div id = "page-container">
					
				</div>
			</div>
			<div id = "theme-selector-container">
				<input id = "light" type = "checkbox" onClick = {updateTheme} />
				<input id = "dark" type="checkbox" onClick = {updateTheme} />
			</div>
		</div>
	);
}

export default App;
