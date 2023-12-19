import {useState} from 'react';

import '../styles/LightSwitch.css';

function LightSwitch(props){
	const [onOff, setOnOff] = useState("on");

	const turnOnOff = ()=> {
		if(onOff == "on"){
			setOnOff("off");
		}else if(onOff == "off"){
			setOnOff("on");
		}
	};	

	return(
		<div id = "lightswitch-container" onClick = {()=>{
				props.onClick();
				turnOnOff();
			}
		}>
			<div id = "lightswitch" className = {onOff}>
			</div>
		</div>
	);
}

export default LightSwitch;
