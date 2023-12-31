import { useState } from "react";

import "../styles/LightSwitch.css";

function LightSwitch(props) {
    const [onOff, setOnOff] = useState("off");

    const turnOnOff = () => {
        if (onOff == "on") {
            setOnOff("off");
        } else if (onOff == "off") {
            setOnOff("on");
        }
    };

    return (
        <div className="symbol">
            <div className="symbol">1</div>
            <div
                id="lightswitch-container"
                onClick={() => {
                    props.onClick();
                    turnOnOff();
                }}
            >
                <div id="lightswitch" className={onOff}></div>
            </div>
            <div className="symbol">0</div>
        </div>
    );
}

export default LightSwitch;
